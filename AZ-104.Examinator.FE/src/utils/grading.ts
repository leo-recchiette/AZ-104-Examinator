import type { AnswerRowDto } from "../types/answer";

export interface LetterGrade {
  letter: string;
  selected: boolean;
  correct: boolean;
}

export interface RowGrade {
  index: number;
  submitted: string | null;
  correctAnswer: string;
  isCorrect: boolean;
}

/** Deve restare allineato a ScoreService.Score. */
export function gradeMultipleChoice(submitted: string[], correctLetters: string[], allLetters: string[]): LetterGrade[] {
  const correctSet = new Set(correctLetters.map((l) => l.toUpperCase()));
  const givenSet = new Set(submitted.map((l) => l.toUpperCase()));
  return allLetters.map((letter) => ({
    letter,
    selected: givenSet.has(letter.toUpperCase()),
    correct: correctSet.has(letter.toUpperCase()),
  }));
}

/**
 * Riga con piu' valori corretti, salvata come "{valore1,valore2}" (domanda 242). Null se il
 * valore e' uno solo. Allineato a ScoreService.RowMatches.
 */
export function parseMultiValueAnswer(raw: string): string[] | null {
  if (raw.length >= 2 && raw.startsWith("{") && raw.endsWith("}")) {
    return raw.slice(1, -1).split(",").map((s) => s.trim());
  }
  return null;
}

/** Posizionale. Una riga a piu' valori (separati da "\n") vuole l'insieme esatto. */
export function gradeRows(submitted: string[], answerRows: AnswerRowDto[]): RowGrade[] {
  return answerRows.map((row, index) => {
    const given = submitted[index] ?? null;
    const multiCorrect = parseMultiValueAnswer(row.answer);
    let isCorrect: boolean;
    if (multiCorrect) {
      const correctSet = new Set(multiCorrect.map((s) => s.toLowerCase()));
      const givenSet = new Set((given ?? "").split("\n").map((s) => s.trim().toLowerCase()).filter(Boolean));
      isCorrect = given !== null && givenSet.size === correctSet.size && [...correctSet].every((c) => givenSet.has(c));
    } else {
      isCorrect = given !== null && given.toLowerCase() === row.answer.toLowerCase();
    }
    return { index, submitted: given, correctAnswer: row.answer, isCorrect };
  });
}

export function pointsEarned(shape: "options" | "draggable" | "prompts", submitted: string[], correct: { correctLetters: string[]; answerRows: AnswerRowDto[] }, allLetters: string[]): [number, number] {
  if (shape === "options") {
    const grades = gradeMultipleChoice(submitted, correct.correctLetters, allLetters);
    const correctCount = grades.filter((g) => g.correct).length;
    const earned = grades.filter((g) => g.correct && g.selected).length;
    return [earned, correctCount];
  }
  const grades = gradeRows(submitted, correct.answerRows);
  return [grades.filter((g) => g.isCorrect).length, grades.length];
}
