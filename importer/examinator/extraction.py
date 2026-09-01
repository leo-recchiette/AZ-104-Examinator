"""Stadio 1 - dal PDF a righe di testo pulite e annotate con lo stile.

Il PDF e' un print-to-PDF di Chrome, quindi il layer testuale conserva font,
corpo e colore di ogni frammento. Sono quei metadati, non la posizione o
euristiche sul testo, a reggere tutto il parsing a valle.

Inventario dei font del documento:
    SegoeUI 10.5           corpo di domande, opzioni e spiegazioni
    SegoeUI-Semibold 10.5  grassetto inline (nomi di risorse, "The answer is C.")
    SegoeUI-Semibold 9.0   'QUESTION n', lettere-opzione, 'SUGGESTED ANSWER'
    SegoeUI-Semibold 8.2   marker 'CORRECT'
    SegoeUI(-Semibold) 7.9 filigrana personale ("Issued to", "Personal copy")
    ArialMT 8.0            intestazione/pie' di stampa del browser
    SegoeUI-Semibold 18.0  titolo di copertina
"""

from __future__ import annotations

import pymupdf

from .models import Line, Span

# Il pie' di stampa del browser e' l'unico uso di Arial nel documento.
NOISE_FONT_PREFIXES = ("Arial",)

# La filigrana col nome dell'acquirente sta a 7.9; il marker CORRECT a 8.2 e'
# il testo utile piu' piccolo. La soglia separa i due senza casi speciali.
MIN_USEFUL_SIZE = 8.1


class Document:
    """Righe utili del PDF piu' il conteggio immagini per pagina."""

    def __init__(self, lines: list[Line], images_per_page: list[int], page_count: int):
        self.lines = lines
        self.images_per_page = images_per_page
        self.page_count = page_count

    def images_between(self, page_start: int, page_end: int) -> int:
        """Immagini nelle pagine [page_start, page_end], estremi inclusi, 1-based."""
        return sum(self.images_per_page[page_start - 1 : page_end])


def _is_noise(span: dict) -> bool:
    if span["font"].startswith(NOISE_FONT_PREFIXES):
        return True
    return span["size"] < MIN_USEFUL_SIZE


def load(pdf_path: str) -> Document:
    """Apre il PDF e ne estrae le righe, scartando filigrana e pie' di stampa."""
    lines: list[Line] = []
    images_per_page: list[int] = []

    with pymupdf.open(pdf_path) as doc:
        for page_index in range(doc.page_count):
            page = doc[page_index]
            images_per_page.append(len(page.get_images()))

            for block in page.get_text("dict")["blocks"]:
                # type 1 sono i blocchi immagine: qui interessa solo il testo.
                if block["type"] != 0:
                    continue
                for raw_line in block["lines"]:
                    # Si scartano solo gli span vuoti, non quelli di soli spazi:
                    # a volte lo spazio fra due parole e' uno span a se' stante
                    # (es. '✑', ' ', 'Task1') e toglierlo incollerebbe le parole.
                    spans = tuple(
                        Span(s["text"], s["font"], s["size"], s["color"])
                        for s in raw_line["spans"]
                        if s["text"] and not _is_noise(s)
                    )
                    if not spans:
                        continue
                    line = Line(page=page_index + 1, spans=spans)
                    if line.text:
                        lines.append(line)

        page_count = doc.page_count

    return Document(lines, images_per_page, page_count)
