"""Entry point unico dell'import.

    python main.py              legge il PDF e popola il database
    python main.py --dry-run    esegue il parsing e stampa il riepilogo, senza DB
    python main.py --show 23    stampa una singola domanda cosi' come e' stata letta
"""

from __future__ import annotations

import argparse
import sys

from examinator import extraction, images, parsing, reporting, segmentation, validation
from examinator.config import Config
from examinator.models import Question


def show(q: Question) -> str:
    correct = {a.option_ord for a in q.answers}
    lines = [
        "",
        f"QUESTION {q.number}  [{q.type.value}]  "
        f"pagine {q.page_start}-{q.page_end}  immagini {q.image_count}",
        "-" * 58,
        q.question,
    ]
    if q.question_attachment:
        lines += ["", q.question_attachment]
    for image in q.images:
        lines.append(f"   [immagine] {image.path}  {image.width}x{image.height}")
    for option in q.options:
        mark = "->" if option.ord in correct else "  "
        lines.append(f"{mark} {option.letter}. {option.text}")
    lines += ["-" * 58, q.explanation or "(nessuna spiegazione testuale)"]
    if q.needs_review:
        lines.append(f"[da rivedere] {q.review_note}")
    return "\n".join(lines)


def main() -> int:
    argp = argparse.ArgumentParser(description="Importa il question bank AZ-104 dal PDF.")
    argp.add_argument("--dry-run", action="store_true", help="non scrivere sul database")
    argp.add_argument("--show", type=int, metavar="N", help="stampa la domanda N ed esci")
    args = argp.parse_args()

    config = Config.from_env(dry_run=args.dry_run)

    print(f"lettura di {config.pdf_path}")
    document = extraction.load(config.pdf_path)
    print(f"  {document.page_count} pagine, {len(document.lines)} righe utili")

    blocks = segmentation.split(document)
    print(f"  {len(blocks)} domande individuate")

    questions = parsing.parse_all(blocks)
    questions = validation.validate_all(questions, blocks)

    if not config.dry_run:
        written = images.export(config.pdf_path, questions, config.images_dir)
        print(f"  {written} immagini salvate in {config.images_dir}")

    if args.show is not None:
        match = next((q for q in questions if q.number == args.show), None)
        if match is None:
            print(f"domanda {args.show} non trovata", file=sys.stderr)
            return 1
        print(show(match))
        return 0

    print(reporting.summarize(questions))

    if config.dry_run:
        print("dry run: database non toccato")
        return 0

    # Importato qui e non in testa al file: il dry run non deve dipendere dal
    # driver del database.
    from examinator import persistence

    print(f"scrittura su {config.database_url.rsplit('@', 1)[-1]}")
    conn = persistence.connect(config.database_url)
    persistence.write_all(conn, questions)
    print(f"importate {len(questions)} domande")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
