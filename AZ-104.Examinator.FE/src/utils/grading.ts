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
 * Una riga 'selection' con piu' di una risposta corretta (es. domanda 242, "Allowed
 * permissions" -> Read + List) e' salvata come "{valore1,valore2}": un artefatto di come
 * l'importer scrive una lista Python in una colonna TEXT, riusato qui come marcatore -
 * verificato univoco su tutto il dataset. Torna null se la riga ha un solo valore corretto.
 * Deve restare sincronizzato con ScoreService.RowMatches.
 */
export function parseMultiValueAnswer(raw: string): string[] | null {
  if (raw.length >= 2 && raw.startsWith("{") && raw.endsWith("}")) {
    return raw.slice(1, -1).split(",").map((s) => s.trim());
  }
  return null;
}

/**
 * Confronto posizionale e case-insensitive: rispecchia ScoreService.Score per
 * drag&drop/hotspot/hotspot_yes_no (un passo/riga sbagliata non invalida gli
 * altri gia' giusti). Per una riga a piu' valori il punto richiede l'insieme
 * esatto scelto dall'utente (ne' di piu' ne' di meno) — l'utente separa le
 * scelte multiple con "\n" (vedi RowSelectAnswer.tsx).
 */
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
