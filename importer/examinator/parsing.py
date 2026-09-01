"""Stadio 4 - dal blocco grezzo alla domanda strutturata.

Layout di una domanda a scelta multipla, dopo la pulizia dello stadio 1:

    QUESTION 1                 <- Semibold 9.0
    Your company has ...       <- corpo, una riga per paragrafo
    What should you do?
    A                          <- Semibold 9.0, colore normale
    Create Azure Management Groups for each department.
    C                          <- Semibold 9.0, colore BIANCO = corretta
    Assign tags to the virtual machines.
    CORRECT                    <- Semibold 8.2, segue il testo dell'opzione
    SUGGESTED ANSWER           <- Semibold 9.0
    The suggested answer is C.
    To associate each virtual machine ...

HOTSPOT e DRAG_DROP hanno lo stesso involucro ma senza opzioni: le scelte e la
risposta vivono solo dentro le immagini, quindi qui se ne estraggono testo e
spiegazione e il resto lo completera' la passata vision.
"""

from __future__ import annotations

import re

from .classification import classify, is_type_marker
from .models import AnswerKey, Option, Question, QuestionBlock, QuestionType

OPTION_LETTER = re.compile(r"^[A-H]$")
OPTION_LETTER_SIZE = 9.0
SIZE_TOLERANCE = 0.3

# Le lettere-opzione sono rese bianche su pastiglia colorata quando l'opzione e'
# quella corretta: e' il segnale piu' affidabile, indipendente dal testo.
WHITE = 16777215

SUGGESTED_ANSWER = "SUGGESTED ANSWER"
CORRECT_MARKER = "CORRECT"


def _is_option_letter(line) -> bool:
    lead = line.lead
    return (
        lead.semibold
        and abs(lead.size - OPTION_LETTER_SIZE) < SIZE_TOLERANCE
        and OPTION_LETTER.match(line.text) is not None
    )


def _is_correct_marker(line) -> bool:
    return line.text == CORRECT_MARKER and line.lead.semibold


def _join(lines) -> str:
    return "\n".join(l.text for l in lines).strip()


def parse(block: QuestionBlock) -> Question:
    lines = block.lines
    qtype = classify(block)

    # Confine tra la parte "domanda" e la parte "risposta ufficiale".
    answer_at = next(
        (i for i, l in enumerate(lines) if l.text == SUGGESTED_ANSWER),
        len(lines),
    )

    letter_positions = [i for i in range(1, answer_at) if _is_option_letter(lines[i])]
    question_end = letter_positions[0] if letter_positions else answer_at

    # lines[0] e' l'intestazione 'QUESTION n'; il marker di tipo non fa testo.
    question_text = _join([l for l in lines[1:question_end] if not is_type_marker(l.text)])
    explanation = _join(lines[answer_at + 1 :])

    options: list[Option] = []
    answers: list[AnswerKey] = []

    for ord_, start in enumerate(letter_positions):
        end = letter_positions[ord_ + 1] if ord_ + 1 < len(letter_positions) else answer_at
        letter_line = lines[start]
        body = [l for l in lines[start + 1 : end] if not _is_correct_marker(l)]

        options.append(Option(text=_join(body), ord=ord_, letter=letter_line.text))
        if letter_line.lead.color == WHITE:
            answers.append(AnswerKey(option_ord=ord_))

    return Question(
        number=block.number,
        type=qtype,
        question=question_text,
        explanation=explanation,
        page_start=block.page_start,
        page_end=block.page_end,
        image_count=block.image_count,
        options=options,
        answers=answers,
    )


def parse_all(blocks: list[QuestionBlock]) -> list[Question]:
    return [parse(b) for b in blocks]
