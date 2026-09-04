import type { QuestionDto } from "../types/question";

export type AnswerShape = "options" | "draggable" | "prompts";

/**
 * Decide la forma del widget di risposta guardando quale campo del DTO e'
 * popolato, MAI "type": una minoranza di domande drag_and_drop sono in
 * realta' a selezione per riga (prompts popolato, draggableItems vuoto),
 * indistinguibili da un hotspot lato contratto.
 */
export function getAnswerShape(question: QuestionDto): AnswerShape {
  if (question.options.length > 0) return "options";
  if (question.draggableItems.length > 0) return "draggable";
  return "prompts";
}

/**
 * "Risposta data" richiede il completamento pieno per sequenza/righe (ogni
 * riga valorizzata, sequenza completa), non solo l'aver iniziato — altrimenti
 * il conteggio "N answered" del footer sarebbe fuorviante.
 */
export function isQuestionAnswered(question: QuestionDto, value: string[]): boolean {
  const shape = getAnswerShape(question);
  if (shape === "options") return value.length > 0;
  if (shape === "draggable") return value.length === question.draggableItems.length;
  return value.filter(Boolean).length === question.prompts.length;
}

/** Etichetta del tipo per l'header della card domanda e i tag della revisione: segue la forma, non "type" grezzo. */
export function questionTypeLabel(question: QuestionDto, shape: AnswerShape = getAnswerShape(question)): string {
  if (shape === "options") return "Multiple choice";
  if (shape === "draggable") return "Drag and drop · sequence";
  return question.type === "hotspot_yes_no" ? "Hotspot · Yes/No" : "Hotspot";
}

/** Testo "la tua risposta", formattato come farebbe l'utente leggendolo — usato solo nella revisione (le righe non hanno un "answerText" pronto lato client come le domande). */
export function formatYourAnswer(question: QuestionDto, submitted: string[]): string {
  if (submitted.length === 0) return "Not answered";
  const shape = getAnswerShape(question);
  if (shape === "options") {
    return submitted
      .slice()
      .sort()
      .map((letter) => `${letter} — ${question.options.find((o) => o.letter === letter)?.text ?? "?"}`)
      .join("\n");
  }
  if (shape === "draggable") {
    return submitted.map((v, i) => `${i + 1}. ${v}`).join("\n");
  }
  return question.prompts.map((_, i) => submitted[i] || "—").join(" · ");
}
