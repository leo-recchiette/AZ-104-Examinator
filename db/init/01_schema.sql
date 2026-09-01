-- Schema del question bank.
--
-- Tre tipi di domanda convivono nelle stesse tabelle:
--   MCQ       - pool unico di opzioni (letter A..H), 1+ risposte corrette
--   HOTSPOT   - piu' slot indipendenti, ognuno con il proprio pool di opzioni
--   DRAG_DROP - pool unico, la risposta e' una sequenza ordinata (position)
--
-- La answer key sta in tabella separata invece che come flag booleano sulle
-- opzioni: solo cosi' si possono esprimere l'ordinamento dei DRAG_DROP e il
-- riuso dello stesso valore su piu' slot degli HOTSPOT ("may be used once,
-- more than once, or not at all").

CREATE TYPE question_type AS ENUM ('MCQ', 'HOTSPOT', 'DRAG_DROP');

CREATE TABLE questions (
    id                SERIAL PRIMARY KEY,
    number            INTEGER       NOT NULL UNIQUE,
    type              question_type NOT NULL,
    question          TEXT          NOT NULL,
    -- Materiale di supporto a cui il testo rimanda ("shown in the following
    -- table"): tabelle, JSON, output CLI. E' testo markdown, non un file:
    -- nel PDF esiste solo come immagine e lo trascrive la passata vision.
    question_attachment TEXT,
    explanation       TEXT,
    source_page_start INTEGER       NOT NULL,
    source_page_end   INTEGER       NOT NULL,
    -- Immagini presenti nel PDF: >0 significa che c'e' contenuto non ancora
    -- trasposto a testo. Va a 0 quando la passata vision ha convertito tutto.
    image_count       INTEGER       NOT NULL DEFAULT 0,
    needs_review      BOOLEAN       NOT NULL DEFAULT FALSE,
    review_note       TEXT
);

CREATE TABLE options (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    -- NULL per MCQ e DRAG_DROP (pool unico); per HOTSPOT identifica il campo
    -- a cui il pool appartiene (es. '--sku', 'Box 1', il testo dello statement).
    slot        TEXT,
    -- A..H per le MCQ; NULL per gli altri tipi, che non hanno lettere.
    letter      TEXT,
    text        TEXT    NOT NULL,
    ord         INTEGER NOT NULL
);

CREATE TABLE answer_keys (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    option_id   INTEGER NOT NULL REFERENCES options (id) ON DELETE CASCADE,
    slot        TEXT,
    -- Ordine 1..N nella sequenza di risposta; significativo solo per DRAG_DROP.
    position    INTEGER,
    UNIQUE (question_id, option_id, slot, position)
);

-- Immagini ritagliate dal PDF. Il binario sta su volume, qui solo il percorso
-- relativo alla radice delle immagini (es. 'q0380/1.png'): il percorso assoluto
-- dipende da dove il volume e' montato e non va congelato nel database.
CREATE TABLE question_images (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    ord         INTEGER NOT NULL,
    path        TEXT    NOT NULL,
    width       INTEGER NOT NULL,
    height      INTEGER NOT NULL,
    -- Pagina del PDF di provenienza, per poter risalire alla fonte.
    source_page INTEGER NOT NULL,
    UNIQUE (question_id, ord)
);

CREATE INDEX idx_question_images_question ON question_images (question_id);
CREATE INDEX idx_options_question ON options (question_id);
CREATE INDEX idx_answer_keys_question ON answer_keys (question_id);
CREATE INDEX idx_questions_type ON questions (type);
CREATE INDEX idx_questions_needs_review ON questions (needs_review);

-- Domande somministrabili: hanno opzioni da mostrare e una risposta con cui
-- correggere. Le eventuali immagini di supporto si servono da question_images,
-- quindi averle non impedisce di giocare la domanda; restano fuori solo
-- HOTSPOT e DRAG_DROP, che di opzioni non ne hanno affatto.
--   SELECT * FROM answerable_questions ORDER BY random() LIMIT 40;
CREATE VIEW answerable_questions AS
SELECT q.*
FROM questions q
WHERE EXISTS (SELECT 1 FROM options o WHERE o.question_id = q.id)
  AND EXISTS (SELECT 1 FROM answer_keys a WHERE a.question_id = q.id);
