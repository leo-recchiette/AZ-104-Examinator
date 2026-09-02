-- Question bank AZ-104, alimentato da az104_606_domande.json.
--
-- Il JSON distingue 4 tipi di domanda (campo "type"):
--   multiple_choice  - scelta fra un pool di opzioni A..H, una o piu' corrette
--   drag_and_drop    - risposta come sequenza ordinata, o come coppie prompt/scelta
--   hotspot          - coppie prompt/scelta (un menu per riga)
--   hotspot_yes_no   - coppie statement/risposta, risposta sempre Yes o No
--
-- Solo multiple_choice porta anche le opzioni sbagliate (serve un pool da cui
-- l'utente sceglie): per gli altri tre tipi il JSON contiene solo la risposta
-- corretta, quindi in app si comportano da autovalutazione ("mostra, poi
-- rivela"), non da quiz a scelta cliccabile.

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

-- Il pool di scelte di una multiple_choice. Non usata dagli altri tipi.
CREATE TABLE options (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    ord         INTEGER NOT NULL,
    letter      TEXT    NOT NULL,
    text        TEXT    NOT NULL,
    is_correct  BOOLEAN NOT NULL
);

-- La risposta corretta di drag_and_drop, hotspot e hotspot_yes_no, una riga
-- per elemento. 'prompt' e' NULL quando la domanda e' un drag_and_drop in
-- sequenza: li' la risposta e' l'ordine stesso, dato da 'ord'.
CREATE TABLE answer_rows (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    ord         INTEGER NOT NULL,
    prompt      TEXT,
    answer      TEXT    NOT NULL
);

CREATE INDEX idx_options_question ON options (question_id);
CREATE INDEX idx_answer_rows_question ON answer_rows (question_id);
CREATE INDEX idx_questions_type ON questions (type);
