-- Question bank AZ-104, alimentato da az104_606_domande.json.
--
-- Il JSON distingue 4 tipi di domanda (campo "type"):
--   multiple_choice  - scelta fra un pool di opzioni A..H, una o piu' corrette
--   drag_and_drop    - risposta come sequenza ordinata, o come coppie prompt/scelta
--   hotspot          - coppie prompt/scelta (un menu per riga)
--   hotspot_yes_no   - coppie statement/risposta, risposta sempre Yes o No
--
-- La forma di storage pero' non segue "type" ma "answer_layout":
--   ordered_answer - sequenza pura (solo drag_and_drop): pool di elementi
--                    trascinabili question-scoped in "options" (letter NULL),
--                    ordine corretto in "answer_rows".
--   selection      - coppie prompt/scelta con un pool per riga (hotspot, ma
--                    anche una minoranza di drag_and_drop che in realta' sono
--                    selezioni, non sequenze): pool row-scoped in
--                    "answer_row_options".
--   yes_no         - coppie statement/risposta (hotspot_yes_no): dominio
--                    Si'/No implicito, nessun pool salvato.
--   (assente)      - multiple_choice: pool question-scoped in "options",
--                    con "letter" valorizzata.
--
-- Solo multiple_choice e ordered_answer/selection portano anche le opzioni
-- sbagliate (un pool da cui l'utente sceglie): solo per yes_no il JSON
-- contiene esclusivamente la risposta corretta (il dominio Si'/No e' fisso,
-- non serve salvarlo).

CREATE TYPE question_type AS ENUM (
    'multiple_choice',
    'drag_and_drop',
    'hotspot',
    'hotspot_yes_no'
);

CREATE TABLE questions (
    id            SERIAL PRIMARY KEY,
    number        INTEGER       NOT NULL UNIQUE,  -- "id" nel JSON, 1..606
    type          question_type NOT NULL,
    -- Forma della risposta per i tipi non-MCQ: 'ordered_answer' | 'selection'
    -- | 'yes_no'. NULL per multiple_choice, che non ne ha bisogno.
    answer_layout TEXT,
    question      TEXT          NOT NULL,
    explanation   TEXT          NOT NULL,
    -- Riassunto della risposta gia' pronto per la UI (es. "C. Assign tags...",
    -- oppure "1. An Azure Key Vault -> 2. An access policy"): evita di dover
    -- ricostruire la formattazione lato frontend da options/answer_rows.
    answer_text   TEXT          NOT NULL,
    -- Chiarimento aggiuntivo per le domande basate su immagine (es. il comando
    -- CLI esatto o il percorso evidenziato nello screenshot originale).
    note          TEXT,
    -- 'text_layer' (estratto dal PDF), 'manual_vision' (letto a mano
    -- dall'immagine) o 'ocr' (letto automaticamente, da controllare).
    source        TEXT          NOT NULL
);

-- Il pool di scelte question-scoped: le opzioni A..H di una multiple_choice
-- (letter valorizzata), oppure gli elementi trascinabili di un drag_and_drop
-- 'ordered_answer' (letter NULL, non hanno una lettera). is_correct significa
-- "fa parte della risposta corretta", non "e' la scelta giusta in questa
-- posizione": per ordered_answer la posizione la da' answer_rows.ord.
CREATE TABLE options (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    ord         INTEGER NOT NULL,
    letter      TEXT,
    text        TEXT    NOT NULL,
    is_correct  BOOLEAN NOT NULL
);

-- La risposta corretta di drag_and_drop, hotspot e hotspot_yes_no, una riga
-- per elemento. 'prompt' e' NULL quando la domanda e' un drag_and_drop in
-- sequenza (answer_layout 'ordered_answer'): li' la risposta e' l'ordine
-- stesso, dato da 'ord'.
CREATE TABLE answer_rows (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    ord         INTEGER NOT NULL,
    prompt      TEXT,
    answer      TEXT    NOT NULL
);

-- Il pool di scelte row-scoped di una riga 'selection' (hotspot, e la
-- minoranza di drag_and_drop che sono in realta' selezioni): a differenza di
-- 'options', qui non serve is_correct, la risposta corretta della riga e'
-- gia' in answer_rows.answer.
CREATE TABLE answer_row_options (
    id            SERIAL  PRIMARY KEY,
    answer_row_id INTEGER NOT NULL REFERENCES answer_rows (id) ON DELETE CASCADE,
    ord           INTEGER NOT NULL,
    text          TEXT    NOT NULL
);

-- Screenshot associati a una domanda: 'question' (mostrato prima di rispondere,
-- da images_question nel JSON) o 'answer' (mostrato solo dopo, da images_answer
-- - lo stesso stato con la risposta corretta compilata). Serviti da wwwroot/images
-- via app.UseStaticFiles(): qui salviamo solo il nome file, mai un URL completo.
CREATE TABLE question_images (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    kind        TEXT    NOT NULL,
    ord         INTEGER NOT NULL,
    filename    TEXT    NOT NULL
);

CREATE INDEX idx_options_question ON options (question_id);
CREATE INDEX idx_answer_rows_question ON answer_rows (question_id);
CREATE INDEX idx_answer_row_options_row ON answer_row_options (answer_row_id);
CREATE INDEX idx_question_images_question ON question_images (question_id);
CREATE INDEX idx_questions_type ON questions (type);

-- Storico delle sessioni (Practice o Simulation) portate a termine e inviate: alimenta il
-- grafico "Your progress" della mode-select. Tabella indipendente dal question bank sopra:
-- l'importer tronca solo "questions" (con CASCADE sulle sue FK), quindi un re-import del
-- dataset non azzera mai questo storico.
CREATE TABLE exam_attempts (
    id             SERIAL PRIMARY KEY,
    mode           TEXT             NOT NULL CHECK (mode IN ('practice', 'exam')),
    question_count INTEGER          NOT NULL,
    percentage     DOUBLE PRECISION NOT NULL,
    start_time     TIMESTAMPTZ      NOT NULL,
    end_time       TIMESTAMPTZ      NOT NULL,
    -- Istante di registrazione della riga (valorizzato dal DB, non dal client): "END" e' parola
    -- riservata in Postgres, quindi non utilizzabile come nome colonna senza quoting.
    completed_at   TIMESTAMPTZ      NOT NULL DEFAULT now()
);

CREATE INDEX idx_exam_attempts_end_time ON exam_attempts (end_time);
