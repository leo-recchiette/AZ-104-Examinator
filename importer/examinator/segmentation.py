"""Stadio 2 - taglia il flusso di righe nei blocchi delle singole domande.

Il confine e' la riga 'QUESTION n', resa in SegoeUI-Semibold 9.0. Tutto cio'
che precede la prima (il titolo di copertina) viene scartato.
"""

from __future__ import annotations

import re

from .extraction import Document
from .models import Line, QuestionBlock

QUESTION_HEADING = re.compile(r"^QUESTION (\d+)$")
HEADING_SIZE = 9.0
SIZE_TOLERANCE = 0.3


def is_question_heading(line: Line) -> int | None:
    """Restituisce il numero della domanda se la riga e' un'intestazione."""
    lead = line.lead
    if not lead.semibold or abs(lead.size - HEADING_SIZE) > SIZE_TOLERANCE:
        return None
    match = QUESTION_HEADING.match(line.text)
    return int(match.group(1)) if match else None


def split(document: Document) -> list[QuestionBlock]:
    starts: list[tuple[int, int]] = []  # (indice riga, numero domanda)
    for index, line in enumerate(document.lines):
        number = is_question_heading(line)
        if number is not None:
            starts.append((index, number))

    blocks: list[QuestionBlock] = []
    for position, (start, number) in enumerate(starts):
        has_next = position + 1 < len(starts)
        end = starts[position + 1][0] if has_next else len(document.lines)
        lines = document.lines[start:end]
        page_start = lines[0].page

        # L'ultima pagina della domanda non si ricava dall'ultima riga di testo:
        # una pagina che porta solo immagini (tipico di HOTSPOT e DRAG_DROP,
        # dove la risposta e' l'immagine finale) resta senza righe dopo la
        # pulizia, e conteggiarla come esclusa perderebbe proprio quelle
        # immagini. Il confine vero e' la pagina che precede la domanda dopo.
        if has_next:
            next_page_start = document.lines[starts[position + 1][0]].page
            page_end = max(page_start, next_page_start - 1)
        else:
            page_end = document.page_count

        blocks.append(
            QuestionBlock(
                number=number,
                lines=lines,
                page_start=page_start,
                page_end=page_end,
                image_count=document.images_between(page_start, page_end),
            )
        )
    return blocks
