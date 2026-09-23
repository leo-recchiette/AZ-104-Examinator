import type { OptionDto, QuestionDto } from "../types/question";
import type { QuestionAnswerDto } from "../types/answer";

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
 * "Risposta data" richiede il completamento pieno per le righe (ogni riga
 * valorizzata), non solo l'aver iniziato — altrimenti il conteggio "N answered"
 * del footer sarebbe fuorviante. Per "draggable" invece basta un elemento
 * posizionato: draggableItems e' l'intero pool CON i distrattori (vedi
 * QuestionDto) — pretendere value.length === draggableItems.length renderebbe
 * "answered" irraggiungibile in tutti i casi (la maggioranza) in cui il pool e'
 * piu' grande della sequenza da comporre. sequenceLength ne da' la lunghezza, ma
 * serve solo a dimensionare gli slot in SequenceAnswer.
 */
export function isQuestionAnswered(question: QuestionDto, value: string[]): boolean {
  const shape = getAnswerShape(question);
  if (shape === "options") return value.length > 0;
  if (shape === "draggable") return value.length > 0;
  return value.filter(Boolean).length === question.prompts.length;
}

/**
 * Se c'e' abbastanza risposta perche' valga la pena chiedere la soluzione. Per le domande a
 * righe basta una riga: la correzione compare riga per riga, appena quella riga e' risposta
 * (vedi RowSelectAnswer), senza aspettare le altre. Per le altre forme coincide con
 * isQuestionAnswered, che e' gia' il momento giusto.
 */
export function isAnswerStarted(question: QuestionDto, value: string[]): boolean {
  if (getAnswerShape(question) === "prompts") return value.some((v) => v && v.trim() !== "");
  return isQuestionAnswered(question, value);
}

/**
 * Se la risposta e' completa quanto la soluzione richiede. Serve solo all'auto-reveal, che
 * altrimenti scoprirebbe la soluzione al primo click di una domanda che ne vuole tre.
 * isQuestionAnswered non basta: prima di rivelare, il numero di scelte attese e' ignoto per
 * costruzione (il DTO pre-risposta lo tace), e lo si scopre solo dalla soluzione stessa —
 * che infatti viene chiesta subito ma tenuta nascosta finche' questa non e' vera.
 */
export function isAnswerComplete(question: QuestionDto, value: string[], correct: QuestionAnswerDto): boolean {
  const shape = getAnswerShape(question);
  if (shape === "options") return value.length >= correct.correctLetters.length;
  if (shape === "draggable") return value.filter(Boolean).length >= correct.answerRows.length;
  return isQuestionAnswered(question, value);
}

/**
 * Un pool di esattamente Yes e No e' a scelta singola per costruzione, e poterli segnare
 * entrambi produce una risposta che nell'esame non esiste. E' l'unico caso in cui la forma
 * basta a saperlo senza rivelare nulla — per tutti gli altri il DTO pre-risposta tace su
 * quante risposte servano, ed e' giusto cosi' (vedi MultipleChoiceAnswer e RowSelectAnswer).
 */
export function isYesNoPool(labels: string[]): boolean {
  if (labels.length !== 2) return false;
  const texts = labels.map((l) => l.trim().toLowerCase());
  return texts.includes("yes") && texts.includes("no");
}

export function isYesNoChoice(options: OptionDto[]): boolean {
  return isYesNoPool(options.map((o) => o.text));
}

/** Etichetta del tipo per l'header della card domanda e i tag della revisione: segue la forma, non "type" grezzo. */
export function questionTypeLabel(question: QuestionDto, shape: AnswerShape = getAnswerShape(question)): string {
  if (shape === "options") return "Multiple choice";
  if (shape === "draggable") return "Drag and drop · sequence";
  return question.type === "hotspot_yes_no" ? "Hotspot · Yes/No" : "Hotspot";
}

/**
 * L'answerText del backend infila tutte le righe su una riga sola separandole con " | "
 * ("prompt -> valore | prompt -> valore | ..."): oltre le due righe diventa illeggibile,
 * quindi in fase di render ognuna va a capo per suo conto.
 *
 * Non basta spezzare su ogni " | ": in una risposta il pipe fa parte del VALORE (domanda
 * 545, l'operatore KQL "| project"). Quando il testo e' a righe — riconoscibile dal " ->" —
 * si va a capo solo dove comincia davvero una riga nuova, cioe' su un pezzo che ha la
 * freccia; il resto viene riattaccato alla riga precedente. Sulle liste senza freccia
 * (multiple choice: "B. ... | D. ...") ogni pipe e' invece una voce a se'.
 *
 * Verificato sul dataset: 190 answerText a righe, tutti spezzati nel numero esatto di righe.
 * Trasformazione di sola presentazione, il dataset resta ground truth.
 *
 * Torna le righe separate invece del testo gia' unito perche' chi rende le impagina come
 * elenco puntato, con il pallino in colonna propria (vedi ReviewQuestionCard).
 */
export function correctAnswerLines(answerText: string): string[] {
  const chunks = answerText.split(" | ");
  if (chunks.length < 2 || !answerText.includes(" ->")) return chunks.map(prettyArrow);

  const lines: string[] = [];
  for (const chunk of chunks) {
    if (lines.length === 0 || chunk.includes(" ->")) lines.push(chunk);
    else lines[lines.length - 1] += ` | ${chunk}`;
  }
  return lines.map(prettyArrow);
}

/**
 * La "->" del dataset diventa una freccia vera a schermo. L'ancora agli spazi evita di
 * toccare un "->" attaccato al testo, che sarebbe codice e non un separatore: verificato
 * sul dataset, tutte e 210 le risposte con freccia la usano spaziata e ne hanno esattamente
 * una per riga. Come sopra, si riscrive solo cio' che si mostra.
 */
function prettyArrow(line: string): string {
  return line.replace(/ ->(?= |$)/g, " →");
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
  return question.prompts.map((_, i) => (submitted[i] ? submitted[i].split("\n").join(", ") : "—")).join(" · ");
}
