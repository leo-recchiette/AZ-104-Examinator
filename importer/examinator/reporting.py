"""Riepilogo a fine import: dice subito se il PDF e' stato letto per intero."""

from __future__ import annotations

from collections import Counter

from .models import Question, QuestionType


def summarize(questions: list[Question]) -> str:
    by_type = Counter(q.type for q in questions)
    mcq = [q for q in questions if q.type is QuestionType.MCQ]
    clean = [q for q in mcq if not q.needs_review]
    flagged = [q for q in mcq if q.needs_review]
    multi = [q for q in clean if len(q.answers) > 1]

    lines = [
        "",
        "=" * 58,
        f"  domande lette          {len(questions)}",
        f"  MCQ                    {by_type[QuestionType.MCQ]}",
        f"  HOTSPOT                {by_type[QuestionType.HOTSPOT]}",
        f"  DRAG_DROP              {by_type[QuestionType.DRAG_DROP]}",
        "-" * 58,
        f"  MCQ senza rilievi      {len(clean)}",
        f"    di cui multi-answer  {len(multi)}",
        f"  MCQ da rivedere        {len(flagged)}",
        f"  in attesa di vision    {by_type[QuestionType.HOTSPOT] + by_type[QuestionType.DRAG_DROP]}",
        "=" * 58,
    ]

    if flagged:
        lines.append("  MCQ segnalate:")
        for q in flagged[:15]:
            lines.append(f"    Q{q.number} (p.{q.page_start}): {q.review_note}")
        if len(flagged) > 15:
            lines.append(f"    ... e altre {len(flagged) - 15}")
        lines.append("")

    return "\n".join(lines)
