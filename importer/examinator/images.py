"""Stadio 4b - ritaglia le immagini dal PDF e le salva su disco.

Il PDF porta 856 immagini: tabelle di supporto per le MCQ, e per HOTSPOT e
DRAG_DROP le opzioni e la risposta stessa. Nessuna di queste e' recuperabile
come testo in modo affidabile, quindi si conservano come file e si mostrano
cosi' come sono.

Sul disco finiscono i binari, nel database solo il percorso relativo: il DB
resta leggero e il backend serve le immagini come file statici.

    /data/images/q0380/1.png   <- questo file
    question_images.path = 'q0380/1.png'   <- questa riga
"""

from __future__ import annotations

import shutil
from pathlib import Path

import pymupdf

from .models import Question, QuestionImage


def _question_dir(number: int) -> str:
    return f"q{number:04d}"


def export(pdf_path: str, questions: list[Question], out_dir: str) -> int:
    """Estrae le immagini di ogni domanda e ne popola la lista `images`.

    La cartella di destinazione viene ricreata da zero a ogni import, cosi' da
    non lasciare in giro file di una passata precedente.
    """
    root = Path(out_dir)
    root.mkdir(parents=True, exist_ok=True)
    # Si svuota il contenuto, non si cancella la cartella: e' il punto di mount
    # del volume, e rimuoverla darebbe "Device or resource busy".
    for leftover in root.iterdir():
        shutil.rmtree(leftover) if leftover.is_dir() else leftover.unlink()

    written = 0
    with pymupdf.open(pdf_path) as doc:
        for question in questions:
            if question.image_count == 0:
                continue

            target = root / _question_dir(question.number)
            target.mkdir(exist_ok=True)

            ord_ = 0
            seen: set[int] = set()
            for page_number in range(question.page_start, question.page_end + 1):
                for image in doc[page_number - 1].get_images(full=True):
                    xref = image[0]
                    # La stessa immagine puo' essere piazzata piu' volte sulla
                    # pagina: il binario e' uno solo, si salva una volta sola.
                    if xref in seen:
                        continue
                    seen.add(xref)

                    extracted = doc.extract_image(xref)
                    ord_ += 1
                    name = f"{ord_}.{extracted['ext']}"
                    (target / name).write_bytes(extracted["image"])
                    written += 1

                    question.images.append(
                        QuestionImage(
                            ord=ord_,
                            path=f"{_question_dir(question.number)}/{name}",
                            width=extracted["width"],
                            height=extracted["height"],
                            page=page_number,
                        )
                    )
    return written
