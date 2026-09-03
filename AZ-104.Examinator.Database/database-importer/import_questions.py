"""Importa il question bank AZ-104 da JSON a PostgreSQL.

Il file sorgente (az104_606_domande.json) contiene gia' domande, opzioni e
risposte verificate a monte: qui si legge, si scrive nelle tabelle SQL, punto.
Nessuna euristica di ricostruzione: se il JSON dovesse cambiare forma, e'
questo script che va aggiornato di conseguenza, non il contrario.

Uso:
    python import_questions.py              legge il JSON e popola il database
    python import_questions.py --dry-run     legge e conta, senza toccare il DB
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import time
from pathlib import Path

import psycopg

QUESTIONS_JSON = os.environ.get("QUESTIONS_JSON", "/data/questions.json")
DATABASE_URL = os.environ.get(
    "DATABASE_URL", "postgresql://examinator:examinator@db:5432/examinator"
)

MULTIPLE_CHOICE = "multiple_choice"


def load_questions(path: str) -> list[dict]:
    return json.loads(Path(path).read_text(encoding="utf-8"))


def connect(database_url: str, attempts: int = 15, delay_seconds: float = 2.0) -> psycopg.Connection:
    """Si collega al database, riprovando finche' non e' pronto ad accettare connessioni."""
    for attempt in range(1, attempts + 1):
        try:
            return psycopg.connect(database_url)
        except psycopg.OperationalError as error:
            print(f"  database non pronto (tentativo {attempt}/{attempts}): {error}")
            time.sleep(delay_seconds)
    raise SystemExit("database irraggiungibile")


def insert_question(cur: psycopg.Cursor, q: dict) -> int:
    cur.execute(
        """
        INSERT INTO questions (number, type, answer_layout, question, explanation,
                               answer_text, note, source)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        RETURNING id
        """,
        (
            q["id"],
            q["type"],
            q.get("answer_layout"),
            q["question"],
            q["explanation"],
            q["answer_text"],
            q.get("note"),
            q["source"],
        ),
    )
    return cur.fetchone()[0]


def insert_options(cur: psycopg.Cursor, question_id: int, q: dict) -> None:
    """Il pool di scelte di una multiple_choice, con il flag di correttezza."""
    correct_letters = set(q["correct_answers"])
    for ord_, option in enumerate(q["options"]):
        cur.execute(
            """
            INSERT INTO options (question_id, ord, letter, text, is_correct)
            VALUES (%s, %s, %s, %s, %s)
            """,
            (question_id, ord_, option["letter"], option["text"], option["letter"] in correct_letters),
        )


def insert_answer_rows(cur: psycopg.Cursor, question_id: int, q: dict) -> None:
    """La risposta di drag_and_drop, hotspot e hotspot_yes_no, riga per riga.

    Il JSON la porta in due forme, mai insieme nella stessa domanda:
      - answer_items: una sequenza ordinata (drag & drop) -> prompt resta NULL,
        l'ordine e' la risposta.
      - answer_rows: coppie prompt/risposta, con chiavi che cambiano nome a
        seconda del tipo ('prompt'/'selected' oppure 'statement'/'answer').
    """
    for ord_, item_text in enumerate(q.get("answer_items", [])):
        cur.execute(
            """
            INSERT INTO answer_rows (question_id, ord, prompt, answer)
            VALUES (%s, %s, NULL, %s)
            """,
            (question_id, ord_, item_text),
        )

    for ord_, row in enumerate(q.get("answer_rows", [])):
        prompt = row.get("prompt", row.get("statement"))
        answer = row.get("selected", row.get("answer"))
        cur.execute(
            """
            INSERT INTO answer_rows (question_id, ord, prompt, answer)
            VALUES (%s, %s, %s, %s)
            """,
            (question_id, ord_, prompt, answer),
        )


def import_all(conn: psycopg.Connection, questions: list[dict]) -> None:
    with conn, conn.cursor() as cur:
        cur.execute("TRUNCATE questions RESTART IDENTITY CASCADE")
        for q in questions:
            question_id = insert_question(cur, q)
            if q["type"] == MULTIPLE_CHOICE:
                insert_options(cur, question_id, q)
            else:
                insert_answer_rows(cur, question_id, q)


def main() -> int:
    argp = argparse.ArgumentParser(description="Importa il question bank AZ-104.")
    argp.add_argument("--dry-run", action="store_true", help="non scrivere sul database")
    args = argp.parse_args()

    print(f"lettura di {QUESTIONS_JSON}")
    questions = load_questions(QUESTIONS_JSON)
    print(f"  {len(questions)} domande lette")

    unverified = [q for q in questions if not q.get("verified")]
    if unverified:
        numbers = ", ".join(str(q["id"]) for q in unverified[:10])
        print(f"  attenzione: {len(unverified)} domande non verificate ({numbers}...)", file=sys.stderr)

    if args.dry_run:
        print("dry run: database non toccato")
        return 0

    conn = connect(DATABASE_URL)
    import_all(conn, questions)
    print(f"importate {len(questions)} domande su {DATABASE_URL.rsplit('@', 1)[-1]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
