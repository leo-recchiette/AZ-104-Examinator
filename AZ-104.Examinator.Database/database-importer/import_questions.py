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
ORDERED_ANSWER = "ordered_answer"


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
                               answer_text, note, source, group_id, group_type)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
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
            q.get("group_id"),
            q.get("group_type"),
        ),
    )
    return cur.fetchone()[0]


def insert_option_pool(cur: psycopg.Cursor, question_id: int, items: list[tuple[str | None, str, bool]]) -> None:
    """Pool di scelte question-scoped: le opzioni A..H di una multiple_choice
    (con lettera) o il pool trascinabile di un drag_and_drop 'ordered_answer'
    (senza lettera). is_correct segnala l'appartenenza alla risposta corretta,
    non la posizione: per ordered_answer la posizione la da' answer_rows.ord.
    """
    for ord_, (letter, text, is_correct) in enumerate(items):
        cur.execute(
            """
            INSERT INTO options (question_id, ord, letter, text, is_correct)
            VALUES (%s, %s, %s, %s, %s)
            """,
            (question_id, ord_, letter, text, is_correct),
        )


def insert_ordered_sequence(cur: psycopg.Cursor, question_id: int, answer_items: list[str]) -> None:
    """La sequenza corretta di un drag_and_drop 'ordered_answer': prompt resta
    NULL, l'ordine stesso e' la risposta."""
    for ord_, item_text in enumerate(answer_items):
        cur.execute(
            """
            INSERT INTO answer_rows (question_id, ord, prompt, answer)
            VALUES (%s, %s, NULL, %s)
            """,
            (question_id, ord_, item_text),
        )


def insert_answer_rows(cur: psycopg.Cursor, question_id: int, rows: list[dict]) -> None:
    """Righe prompt/risposta di 'selection' (hotspot, e la minoranza di
    drag_and_drop che sono in realta' selezioni, non sequenze) o 'yes_no'
    (hotspot_yes_no). Le chiavi cambiano nome a seconda del tipo
    ('prompt'/'selected' oppure 'statement'/'answer'). Le righe 'selection'
    portano anche un pool di opzioni proprio (assente per 'yes_no'), salvato
    in answer_row_options usando l'id della riga appena inserita.
    """
    for ord_, row in enumerate(rows):
        prompt = row.get("prompt", row.get("statement"))
        answer = row.get("selected", row.get("answer"))
        cur.execute(
            """
            INSERT INTO answer_rows (question_id, ord, prompt, answer)
            VALUES (%s, %s, %s, %s)
            RETURNING id
            """,
            (question_id, ord_, prompt, answer),
        )
        answer_row_id = cur.fetchone()[0]

        options = row.get("options")
        if options:
            for opt_ord, option_text in enumerate(options):
                cur.execute(
                    """
                    INSERT INTO answer_row_options (answer_row_id, ord, text)
                    VALUES (%s, %s, %s)
                    """,
                    (answer_row_id, opt_ord, option_text),
                )


def insert_images(cur: psycopg.Cursor, question_id: int, q: dict) -> None:
    """Screenshot associati alla domanda: images_question (kind 'question',
    mostrato prima di rispondere) e images_answer (kind 'answer', mostrato
    solo dopo - lo stesso stato con la risposta corretta compilata)."""
    for ord_, filename in enumerate(q.get("images_question", [])):
        cur.execute(
            """
            INSERT INTO question_images (question_id, kind, ord, filename)
            VALUES (%s, 'question', %s, %s)
            """,
            (question_id, ord_, filename),
        )
    for ord_, filename in enumerate(q.get("images_answer", [])):
        cur.execute(
            """
            INSERT INTO question_images (question_id, kind, ord, filename)
            VALUES (%s, 'answer', %s, %s)
            """,
            (question_id, ord_, filename),
        )


def find_selection_mismatches(questions: list[dict]) -> list[tuple[int, str | None, str]]:
    """Righe 'selection' dove la risposta corretta non compare nel proprio
    pool di opzioni: puro controllo sul JSON, nessuna scrittura sul DB."""
    mismatches = []
    for q in questions:
        for row in q.get("answer_rows", []):
            options = row.get("options")
            if options is None:
                continue
            answer = row.get("selected", row.get("answer"))
            if answer not in options:
                mismatches.append((q["id"], row.get("prompt", row.get("statement")), answer))
    return mismatches


def find_group_mismatches(questions: list[dict]) -> list[tuple[str, list[int], list[int]]]:
    """Gruppi in cui "group_members" non combacia con i membri reali di quel
    group_id. Il DB salva solo group_id e ricava i fratelli da li', quindi una
    divergenza qui significa dataset incoerente, non un problema di import."""
    by_group: dict[str, list[int]] = {}
    declared: dict[str, list[int]] = {}
    for q in questions:
        group_id = q.get("group_id")
        if not group_id:
            continue
        by_group.setdefault(group_id, []).append(q["id"])
        declared.setdefault(group_id, sorted(q.get("group_members") or []))

    mismatches = []
    for group_id, actual in by_group.items():
        if sorted(actual) != declared[group_id]:
            mismatches.append((group_id, sorted(actual), declared[group_id]))
    return mismatches


def import_all(conn: psycopg.Connection, questions: list[dict]) -> None:
    with conn, conn.cursor() as cur:
        cur.execute("TRUNCATE questions RESTART IDENTITY CASCADE")
        for q in questions:
            question_id = insert_question(cur, q)
            insert_images(cur, question_id, q)
            if q["type"] == MULTIPLE_CHOICE:
                correct_letters = set(q["correct_answers"])
                items = [(o["letter"], o["text"], o["letter"] in correct_letters) for o in q["options"]]
                insert_option_pool(cur, question_id, items)
            elif q.get("answer_layout") == ORDERED_ANSWER:
                correct_items = set(q["answer_items"])
                items = [(None, text, text in correct_items) for text in q["all_actions"]]
                insert_option_pool(cur, question_id, items)
                insert_ordered_sequence(cur, question_id, q["answer_items"])
            else:
                insert_answer_rows(cur, question_id, q.get("answer_rows", []))


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

    mismatches = find_selection_mismatches(questions)
    if mismatches:
        numbers = ", ".join(str(question_id) for question_id, _, _ in mismatches[:10])
        print(
            f"  attenzione: {len(mismatches)} righe con risposta non presente nel proprio pool di opzioni "
            f"({numbers}...)",
            file=sys.stderr,
        )

    group_mismatches = find_group_mismatches(questions)
    if group_mismatches:
        for group_id, actual, declared in group_mismatches[:10]:
            print(
                f"  attenzione: gruppo {group_id} incoerente - membri reali {actual}, dichiarati {declared}",
                file=sys.stderr,
            )

    if args.dry_run:
        print("dry run: database non toccato")
        return 0

    conn = connect(DATABASE_URL)
    import_all(conn, questions)
    print(f"importate {len(questions)} domande su {DATABASE_URL.rsplit('@', 1)[-1]}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
