"""Configurazione via ambiente, con i default usati nel compose."""

from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(frozen=True, slots=True)
class Config:
    pdf_path: str
    images_dir: str
    database_url: str
    dry_run: bool

    @classmethod
    def from_env(cls, dry_run: bool = False) -> "Config":
        return cls(
            pdf_path=os.environ.get("PDF_PATH", "/data/questions.pdf"),
            images_dir=os.environ.get("IMAGES_DIR", "/data/images"),
            database_url=os.environ.get(
                "DATABASE_URL",
                "postgresql://examinator:examinator@db:5432/examinator",
            ),
            dry_run=dry_run or os.environ.get("DRY_RUN", "").lower() in {"1", "true", "yes"},
        )
