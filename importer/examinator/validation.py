"""Stadio 5 - riscontro incrociato prima di scrivere sul database.

Il PDF codifica la risposta corretta in tre modi indipendenti fra loro:

  1. il colore bianco della lettera-opzione (usato dal parser come sorgente)
  2. il marker testuale 'CORRECT' sotto l'opzione giusta
  3. la frase "The suggested answer is C." in apertura di spiegazione

Il parser si fida del segnale 1; qui si verifica che gli altri due concordino.
Una domanda che non supera il controllo viene comunque importata, ma marcata
needs_review invece di essere scartata in silenzio.
"""

from __future__ import annotations

import re

from .models import Question, QuestionBlock, QuestionType
from .parsing import CORRECT_MARKER, _is_correct_marker

SUGGESTED_LETTERS = re.compile(
    r"suggested answers?\s+(?:is|are)\s+([A-H](?:\s*(?:,|and|&)\s*[A-H])*)",
    re.IGNORECASE,
)


def _letters_from_text(explanation: str) -> list[str]:
    match = SUGGESTED_LETTERS.search(explanation)
    return sorted(set(re.findall(r"[A-H]", match.group(1)))) if match else []


def _count_correct_markers(block: QuestionBlock) -> int:
    return sum(1 for line in block.lines if _is_correct_marker(line))


def validate(question: Question, block: QuestionBlock) -> Question:
    """Annota la domanda con l'esito dei controlli. Muta e restituisce l'oggetto."""
    problems: list[str] = []

    if question.type is not QuestionType.MCQ:
        # Opzioni e risposta esistono solo come pixel: in attesa della vision.
        question.needs_review = True
        question.review_note = f"{question.type.value}: opzioni e risposta solo in immagine"
        return question

    if len(question.options) < 2:
        problems.append(f"solo {len(question.options)} opzioni")

    by_color = sorted(question.options[a.option_ord].letter for a in question.answers)
    if not by_color:
        problems.append("nessuna opzione marcata corretta")

    markers = _count_correct_markers(block)
    if markers != len(by_color):
        problems.append(f"marker CORRECT {markers} != lettere bianche {len(by_color)}")

    by_text = _letters_from_text(question.explanation)
    if by_text and by_text != by_color:
        problems.append(f"spiegazione indica {by_text}, colore indica {by_color}")

    if not question.explanation:
        problems.append("spiegazione vuota")

    if problems:
        question.needs_review = True
        question.review_note = "; ".join(problems)
    return question


def validate_all(questions: list[Question], blocks: list[QuestionBlock]) -> list[Question]:
    return [validate(q, b) for q, b in zip(questions, blocks)]
