"""Stadio 6 - scrittura su PostgreSQL.

L'import e' idempotente per ricarica completa: il PDF e' una sorgente statica,
quindi svuotare e riscrivere dentro un'unica transazione costa poco ed evita
tutta la logica di upsert. O passa tutto, o il database resta com'era.
"""

from __future__ import annotations

import time

import psycopg

from .models import Question

CONNECT_ATTEMPTS = 15
CONNECT_BACKOFF_SECONDS = 2


def connect(database_url: str) -> psycopg.Connection:
    """Si collega al database, riprovando finche' non accetta connessioni."""
    last_error: Exception | None = None
    for attempt in range(1, CONNECT_ATTEMPTS + 1):
        try:
            return psycopg.connect(database_url)
        except psycopg.OperationalError as error:
            last_error = error
            print(f"  database non pronto (tentativo {attempt}/{CONNECT_ATTEMPTS})")
            time.sleep(CONNECT_BACKOFF_SECONDS)
    raise RuntimeError(f"database irraggiungibile: {last_error}")


def write_all(conn: psycopg.Connection, questions: list[Question]) -> None:
    with conn, conn.cursor() as cur:
        cur.execute("TRUNCATE questions RESTART IDENTITY CASCADE")

        for q in questions:
            cur.execute(
                """
                INSERT INTO questions (number, type, question, question_attachment,
                                       explanation, source_page_start, source_page_end,
                                       image_count, needs_review, review_note)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id
                """,
                (
                    q.number,
                    q.type.value,
                    q.question,
                    q.question_attachment,
                    q.explanation or None,
                    q.page_start,
                    q.page_end,
                    q.image_count,
                    q.needs_review,
                    q.review_note,
                ),
            )
            question_id = cur.fetchone()[0]

            # Serve la mappa ord -> id per collegare la answer key alle opzioni.
            option_ids: dict[int, int] = {}
            for option in q.options:
                cur.execute(
                    """
                    INSERT INTO options (question_id, slot, letter, text, ord)
                    VALUES (%s, %s, %s, %s, %s)
                    RETURNING id
                    """,
                    (question_id, option.slot, option.letter, option.text, option.ord),
                )
                option_ids[option.ord] = cur.fetchone()[0]

            for image in q.images:
                cur.execute(
                    """
                    INSERT INTO question_images (question_id, ord, path,
                                                 width, height, source_page)
                    VALUES (%s, %s, %s, %s, %s, %s)
                    """,
                    (question_id, image.ord, image.path,
                     image.width, image.height, image.page),
                )

            for answer in q.answers:
                cur.execute(
                    """
                    INSERT INTO answer_keys (question_id, option_id, slot, position)
                    VALUES (%s, %s, %s, %s)
                    """,
                    (question_id, option_ids[answer.option_ord], answer.slot, answer.position),
                )
