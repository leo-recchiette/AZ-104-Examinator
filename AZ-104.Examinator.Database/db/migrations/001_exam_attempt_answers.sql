-- Migrazione per i database gia' esistenti: db/init/01_schema.sql viene eseguito solo alla
-- creazione del volume, quindi chi ha gia' uno storico va aggiornato a mano con
--   docker compose exec -T db psql -U examinator -d examinator < AZ-104.Examinator.Database/db/migrations/001_exam_attempt_answers.sql
-- Su un volume nuovo non serve: lo stesso DDL e' gia' in 01_schema.sql.

-- Il dettaglio di un tentativo: una riga per domanda proposta, con la risposta data
-- dall'utente (vuota se la domanda e' stata saltata). E' cio' che rende lo storico
-- consultabile a distanza di tempo e non solo un punteggio secco.
--
-- ATTENZIONE: question_number NON e' una foreign key verso questions. L'importer fa
-- "TRUNCATE questions RESTART IDENTITY CASCADE" a ogni run: una FK propagherebbe il
-- CASCADE fin qui e un re-import del dataset cancellerebbe lo storico, che invece deve
-- sopravvivergli (stessa ragione per cui exam_attempts e' una tabella indipendente).
-- Il prezzo e' che una domanda puo' non esistere piu' al momento della rilettura: il
-- dettaglio la restituisce allora senza testo ne' soluzione, non fallisce.
CREATE TABLE exam_attempt_answers (
    id              SERIAL  PRIMARY KEY,
    attempt_id      INTEGER NOT NULL REFERENCES exam_attempts (id) ON DELETE CASCADE,
    -- Posizione nella sessione: le domande vanno rilette nell'ordine in cui sono
    -- state proposte, che per i gruppi non coincide con l'ordine di question_number.
    ord             INTEGER NOT NULL,
    question_number INTEGER NOT NULL,
    -- Risposta dell'utente nella stessa forma posizionale di AnswerSubmissionDto:
    -- lettere scelte (multiple_choice), sequenza scelta (ordered_answer) o una voce
    -- per riga (selection/yes_no). Array vuoto = domanda lasciata in bianco.
    user_answers    TEXT[]  NOT NULL,
    CONSTRAINT exam_attempt_answers_ord_unique UNIQUE (attempt_id, ord)
);

CREATE INDEX idx_exam_attempt_answers_attempt ON exam_attempt_answers (attempt_id);
