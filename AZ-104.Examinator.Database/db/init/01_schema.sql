-- Question bank AZ-104, alimentato da az104_606_domande.json.
-- 
-- La forma di storage segue answer_layout, non type:
--   ordered_answer - sequenza: pool in options (letter NULL), ordine corretto in answer_rows.
--   selection      - un pool per riga in answer_row_options (hotspot e 2 drag_and_drop).
--   yes_no         - dominio Yes/No fisso, nessun pool salvato.
--   NULL           - multiple_choice: pool in options, con letter.

CREATE TYPE question_type AS ENUM (
    'multiple_choice',
    'drag_and_drop',
    'hotspot',
    'hotspot_yes_no'
);

CREATE TABLE questions (
    id            SERIAL PRIMARY KEY,
    number        INTEGER       NOT NULL UNIQUE,  -- "id" nel JSON, 1..584
    type          question_type NOT NULL,
    -- NULL per multiple_choice.
    answer_layout TEXT,
    question      TEXT          NOT NULL,
    explanation   TEXT          NOT NULL,
    -- Risposta gia' formattata per la UI.
    answer_text   TEXT          NOT NULL,
    note          TEXT,
    -- 'text_layer' | 'manual_vision' | 'ocr'.
    source        TEXT          NOT NULL,
    -- 'ss01'..'ss24' per le scenario series. group_members del JSON non si salva: e' derivabile.
    group_id      TEXT,
    group_type    TEXT,
    CONSTRAINT questions_group_both_or_neither
        CHECK ((group_id IS NULL) = (group_type IS NULL))
);

CREATE INDEX questions_group_id_idx ON questions (group_id) WHERE group_id IS NOT NULL;

-- is_correct = "fa parte della risposta": per ordered_answer la posizione sta in answer_rows.ord.
CREATE TABLE options (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    ord         INTEGER NOT NULL,
    letter      TEXT,
    text        TEXT    NOT NULL,
    is_correct  BOOLEAN NOT NULL
);

-- prompt e' NULL per ordered_answer: la risposta e' l'ordine stesso.
CREATE TABLE answer_rows (
    id          SERIAL  PRIMARY KEY,
    question_id INTEGER NOT NULL REFERENCES questions (id) ON DELETE CASCADE,
    ord         INTEGER NOT NULL,
    prompt      TEXT,
    answer      TEXT    NOT NULL
);

-- Niente is_correct: la risposta della riga e' in answer_rows.answer.
CREATE TABLE answer_row_options (
    id            SERIAL  PRIMARY KEY,
    answer_row_id INTEGER NOT NULL REFERENCES answer_rows (id) ON DELETE CASCADE,
    ord           INTEGER NOT NULL,
    text          TEXT    NOT NULL
);

-- kind: 'question' (prima della risposta) o 'answer' (solo dopo). Solo il nome file.
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

-- Storico indipendente dal question bank: un reimport non lo azzera.
CREATE TABLE exam_attempts (
    id             SERIAL PRIMARY KEY,
    mode           TEXT             NOT NULL CHECK (mode IN ('practice', 'exam')),
    question_count INTEGER          NOT NULL,
    percentage     DOUBLE PRECISION NOT NULL,
    start_time     TIMESTAMPTZ      NOT NULL,
    end_time       TIMESTAMPTZ      NOT NULL,
    completed_at   TIMESTAMPTZ      NOT NULL DEFAULT now()
);

CREATE INDEX idx_exam_attempts_end_time ON exam_attempts (end_time);

-- question_number non e' una FK: il TRUNCATE ... CASCADE dell'importer cancellerebbe lo storico.
-- Una domanda puo' quindi non esistere piu' alla rilettura.
CREATE TABLE exam_attempt_answers (
    id              SERIAL  PRIMARY KEY,
    attempt_id      INTEGER NOT NULL REFERENCES exam_attempts (id) ON DELETE CASCADE,
    -- Ordine di presentazione: per i gruppi non e' quello dei numeri.
    ord             INTEGER NOT NULL,
    question_number INTEGER NOT NULL,
    -- Forma di AnswerSubmissionDto; vuoto = domanda in bianco.
    user_answers    TEXT[]  NOT NULL,
    CONSTRAINT exam_attempt_answers_ord_unique UNIQUE (attempt_id, ord)
);

CREATE INDEX idx_exam_attempt_answers_attempt ON exam_attempt_answers (attempt_id);

-- La sessione in corso. Una riga sola (app mono-utente, il CHECK lo impone). question_numbers
-- non e' vincolato a questions per lo stesso motivo di exam_attempt_answers.
CREATE TABLE active_session (
    id                  INTEGER   PRIMARY KEY DEFAULT 1 CHECK (id = 1),
    mode                TEXT      NOT NULL CHECK (mode IN ('practice', 'exam')),
    question_numbers    INTEGER[] NOT NULL,
    -- questionNumber -> risposta. jsonb: si riscrive per intero, non si interroga.
    answers             JSONB     NOT NULL DEFAULT '{}'::jsonb,
    flagged_indexes     INTEGER[] NOT NULL DEFAULT '{}',
    current_index       INTEGER   NOT NULL DEFAULT 0,
    time_limit_seconds  INTEGER,
    auto_reveal         BOOLEAN   NOT NULL DEFAULT FALSE,
    -- Orologio del client: mai confrontarli con now() del server.
    started_at          TIMESTAMPTZ NOT NULL,
    saved_at            TIMESTAMPTZ NOT NULL,
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);
