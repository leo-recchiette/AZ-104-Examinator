"""Tipi di dominio condivisi da tutti gli stadi della pipeline."""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum


class QuestionType(str, Enum):
    MCQ = "MCQ"
    HOTSPOT = "HOTSPOT"
    DRAG_DROP = "DRAG_DROP"


@dataclass(frozen=True, slots=True)
class Span:
    """Frammento di testo con il suo stile: font, corpo e colore."""

    text: str
    font: str
    size: float
    color: int

    @property
    def semibold(self) -> bool:
        return "Semibold" in self.font


@dataclass(frozen=True, slots=True)
class Line:
    """Riga di testo ricostruita unendo gli span che la compongono."""

    page: int
    spans: tuple[Span, ...]

    @property
    def text(self) -> str:
        return "".join(s.text for s in self.spans).strip()

    @property
    def lead(self) -> Span:
        """Primo span con del testo: e' il suo stile a qualificare la riga.

        Si salta l'eventuale span di soli spazi in testa, che non porta uno
        stile significativo e falserebbe il riconoscimento di intestazioni e
        lettere-opzione.
        """
        return next((s for s in self.spans if s.text.strip()), self.spans[0])


@dataclass(slots=True)
class QuestionBlock:
    """Righe grezze di una singola domanda, gia' isolate dal resto del PDF."""

    number: int
    lines: list[Line]
    page_start: int
    page_end: int
    image_count: int

    @property
    def text(self) -> str:
        return "\n".join(l.text for l in self.lines)


@dataclass(slots=True)
class Option:
    text: str
    ord: int
    letter: str | None = None
    slot: str | None = None


@dataclass(slots=True)
class AnswerKey:
    """Riferisce un'opzione tramite il suo ord dentro la stessa domanda."""

    option_ord: int
    slot: str | None = None
    position: int | None = None


@dataclass(slots=True)
class QuestionImage:
    """Immagine estratta dal PDF e salvata su disco accanto al container.

    Nel DB finisce solo il percorso relativo: i binari stanno su volume, cosi'
    il database resta leggero e il backend puo' servirli come file statici.
    """

    ord: int
    path: str
    width: int
    height: int
    page: int


@dataclass(slots=True)
class Question:
    number: int
    type: QuestionType
    question: str
    explanation: str
    page_start: int
    page_end: int
    image_count: int
    options: list[Option] = field(default_factory=list)
    answers: list[AnswerKey] = field(default_factory=list)
    images: list[QuestionImage] = field(default_factory=list)
    question_attachment: str | None = None
    needs_review: bool = False
    review_note: str | None = None
