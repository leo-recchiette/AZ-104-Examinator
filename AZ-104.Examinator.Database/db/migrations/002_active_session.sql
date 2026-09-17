-- Migrazione per i database gia' esistenti: db/init/01_schema.sql viene eseguito solo alla
-- creazione del volume, quindi un database gia' avviato va aggiornato a mano con
--   docker compose exec -T db psql -U examinator -d examinator < AZ-104.Examinator.Database/db/migrations/002_active_session.sql
-- Su un volume nuovo non serve: lo stesso DDL e' gia' in 01_schema.sql.

-- La sessione attualmente in corso, salvata a ogni passo per poterla riprendere dopo un
-- reload, una scheda chiusa o un computer andato in sospensione. E' l'unico stato "vivo"
-- del progetto: lo storico (exam_attempts) registra le sessioni finite, questa registra
-- quella che si sta ancora giocando e viene cancellata appena la sessione viene inviata.
--
-- Una riga sola: l'app e' mono-utente e non ha autenticazione, quindi non esiste un
-- proprietario da cui distinguere le sessioni. Il CHECK rende l'unicita' un fatto dello
-- schema invece di una convenzione da ricordare, e permette l'upsert su chiave fissa.
--
-- Come exam_attempt_answers, question_numbers NON e' vincolato a questions: l'importer fa
-- TRUNCATE ... CASCADE e si porterebbe via la sessione in corso. Se dopo un re-import un
-- numero non esiste piu', la sessione non e' piu' ricostruibile e viene scartata (il
-- servizio la cancella e risponde "nessuna sessione"), invece di restituirla con dei buchi.
CREATE TABLE active_session (
    id                  INTEGER   PRIMARY KEY DEFAULT 1 CHECK (id = 1),
    mode                TEXT      NOT NULL CHECK (mode IN ('practice', 'exam')),
    -- Le domande nell'ordine in cui sono state proposte: per i gruppi non coincide con
    -- l'ordine dei numeri, e quell'ordine e' parte della sessione da ripristinare.
    question_numbers    INTEGER[] NOT NULL,
    -- Mappa questionNumber -> risposta data, nella stessa forma posizionale di
    -- AnswerSubmissionDto. jsonb e non una tabella figlia: e' stato temporaneo che si
    -- riscrive per intero a ogni salvataggio, non un dato su cui si interroga.
    answers             JSONB     NOT NULL DEFAULT '{}'::jsonb,
    -- Indici (nell'array question_numbers) delle domande marcate per la revisione.
    flagged_indexes     INTEGER[] NOT NULL DEFAULT '{}',
    current_index       INTEGER   NOT NULL DEFAULT 0,
    time_limit_seconds  INTEGER,
    auto_reveal         BOOLEAN   NOT NULL DEFAULT FALSE,
    -- Entrambi presi dall'orologio del CLIENT: la loro differenza e' il tempo giocato fino
    -- all'ultimo salvataggio, ed e' quella differenza (non l'ora del server) che permette al
    -- cronometro di ripartire da dov'era. Confrontarli con now() del server darebbe risultati
    -- sbagliati appena i due orologi divergono.
    started_at          TIMESTAMPTZ NOT NULL,
    saved_at            TIMESTAMPTZ NOT NULL,
    updated_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);
