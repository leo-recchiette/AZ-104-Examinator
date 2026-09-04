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

/**
 * Confronto per lettera, insiemistico e case-insensitive: rispecchia
 * ScoreService.Score per MultipleChoice (una lettera in piu' o in meno non
 * invalida le altre gia' giuste).
 */
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
 * Confronto posizionale e case-insensitive: rispecchia ScoreService.Score per
 * drag&drop/hotspot/hotspot_yes_no (un passo/riga sbagliata non invalida gli
 * altri gia' giusti).
 */
export function gradeRows(submitted: string[], answerRows: AnswerRowDto[]): RowGrade[] {
  return answerRows.map((row, index) => {
    const given = submitted[index] ?? null;
    return {
      index,
      submitted: given,
      correctAnswer: row.answer,
      isCorrect: given !== null && given.toLowerCase() === row.answer.toLowerCase(),
    };
  });
}

/** Punti guadagnati/totali per una domanda, dato il confronto per-componente: usato per la caption "e/tot punti" nella revisione. */
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
