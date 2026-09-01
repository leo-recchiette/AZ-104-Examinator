"""Stadio 3 - riconosce il tipo di domanda.

Le domande interattive si annunciano con un marker su riga propria, con o
senza trattino finale: 'HOTSPOT -', 'HOTSPOT', 'DRAG DROP -'. In assenza di
marker la domanda e' a scelta multipla.
"""

from __future__ import annotations

import re

from .models import QuestionBlock, QuestionType

TYPE_MARKER = re.compile(r"^(HOTSPOT|DRAG DROP)\s*-?\s*$")

_BY_MARKER = {
    "HOTSPOT": QuestionType.HOTSPOT,
    "DRAG DROP": QuestionType.DRAG_DROP,
}


def classify(block: QuestionBlock) -> QuestionType:
    for line in block.lines:
        match = TYPE_MARKER.match(line.text)
        if match:
            return _BY_MARKER[match.group(1)]
    return QuestionType.MCQ


def is_type_marker(text: str) -> bool:
    return TYPE_MARKER.match(text) is not None
