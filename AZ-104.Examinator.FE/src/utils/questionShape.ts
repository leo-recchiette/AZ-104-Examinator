import type { OptionDto, QuestionDto } from "../types/question";
import type { QuestionAnswerDto } from "../types/answer";
import { gradeMultipleChoice, gradeRows } from "./grading";

export type AnswerShape = "options" | "draggable" | "prompts";

/** Decide dal campo popolato, mai da "type": alcune drag_and_drop sono in realta' a righe. */
export function getAnswerShape(question: QuestionDto): AnswerShape {
  if (question.options.length > 0) return "options";
  if (question.draggableItems.length > 0) return "draggable";
  return "prompts";
}

/** Le domande a righe contano come risposte solo con tutte le righe valorizzate. */
export function isQuestionAnswered(question: QuestionDto, value: string[]): boolean {
  const shape = getAnswerShape(question);
  if (shape === "options") return value.length > 0;
  if (shape === "draggable") return value.length > 0;
  return value.filter(Boolean).length === question.prompts.length;
}

/** Basta una riga per chiedere la soluzione: la correzione compare riga per riga. */
export function isAnswerStarted(question: QuestionDto, value: string[]): boolean {
  if (getAnswerShape(question) === "prompts") return value.some((v) => v && v.trim() !== "");
  return isQuestionAnswered(question, value);
}

/** Solo per l'auto-reveal: il numero di scelte attese si conosce solo dalla soluzione. */
export function isAnswerComplete(question: QuestionDto, value: string[], correct: QuestionAnswerDto): boolean {
  const shape = getAnswerShape(question);
  if (shape === "options") return value.length >= correct.correctLetters.length;
  if (shape === "draggable") return value.filter(Boolean).length >= correct.answerRows.length;
  return isQuestionAnswered(question, value);
}

/** Un pool Yes/No e' a scelta singola: l'unico caso in cui lo si sa senza rivelare nulla. */
export function isYesNoPool(labels: string[]): boolean {
  if (labels.length !== 2) return false;
  const texts = labels.map((l) => l.trim().toLowerCase());
  return texts.includes("yes") && texts.includes("no");
}

export function isYesNoChoice(options: OptionDto[]): boolean {
  return isYesNoPool(options.map((o) => o.text));
}

export function questionTypeLabel(question: QuestionDto, shape: AnswerShape = getAnswerShape(question)): string {
  if (shape === "options") return "Multiple choice";
  if (shape === "draggable") return "Drag and drop · sequence";
  return question.type === "hotspot_yes_no" ? "Hotspot · Yes/No" : "Hotspot";
}

/** Separatore fra i passi di una sequenza: "1. A -> 2. B -> 3. C". */
const SEQUENCE_STEP = / -> (?=\d+\. )/;


export function correctAnswerLines(answerText: string): string[] {
  if (/^1\. /.test(answerText) && SEQUENCE_STEP.test(answerText)) return answerText.split(SEQUENCE_STEP);

  const chunks = answerText.split(" | ");
  if (chunks.length < 2 || !answerText.includes(" ->")) return chunks.map(prettyArrow);

  const lines: string[] = [];
  for (const chunk of chunks) {
    if (lines.length === 0 || chunk.includes(" ->")) lines.push(chunk);
    else lines[lines.length - 1] += ` | ${chunk}`;
  }
  return lines.map(prettyArrow);
}

/** Le righe gia' numerate ("1. ...") non vogliono anche il pallino. */
export function needsBullets(lines: string[]): boolean {
  return lines.length > 1 && !/^\d+\. /.test(lines[0]);
}

/** Solo il "->" spaziato e' un separatore; attaccato al testo sarebbe codice. */
function prettyArrow(line: string): string {
  return line.replace(/ ->(?= |$)/g, " →");
}

/** "La tua risposta" nella revisione: il backend fornisce il testo solo per la soluzione. */
export function formatYourAnswer(question: QuestionDto, submitted: string[]): string[] {
  if (submitted.length === 0) return ["Not answered"];
  const shape = getAnswerShape(question);
  if (shape === "options") {
    return submitted
      .slice()
      .sort()
      .map((letter) => `${letter} — ${question.options.find((o) => o.letter === letter)?.text ?? "?"}`);
  }
  if (shape === "draggable") {
    return submitted.map((v, i) => `${i + 1}. ${v}`);
  }
  return question.prompts.map((_, i) => (submitted[i] ? submitted[i].split("\n").join(", ") : "—"));
}

/**
 * Esito di ogni riga della soluzione, nello stesso ordine di correctAnswerLines. Null quando le
 * righe del testo non corrispondono una a una ai componenti valutati: meglio il pallino neutro
 * che una spunta sulla riga sbagliata.
 */
export function correctLineOutcomes(
  question: QuestionDto,
  submitted: string[],
  correct: QuestionAnswerDto,
  lines: string[],
): boolean[] | null {
  const shape = getAnswerShape(question);
  if (shape === "options") {
    const grades = gradeMultipleChoice(submitted, correct.correctLetters, question.options.map((o) => o.letter));
    const outcomes = lines.map((line) => {
      const letter = /^([A-Z])\. /.exec(line)?.[1];
      return letter ? (grades.find((g) => g.letter.toUpperCase() === letter)?.selected ?? null) : null;
    });
    return outcomes.every((o) => o !== null) ? (outcomes as boolean[]) : null;
  }
  const grades = gradeRows(submitted, correct.answerRows);
  return grades.length === lines.length ? grades.map((g) => g.isCorrect) : null;
}
