import type { OptionDto, QuestionDto } from "../types/question";

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
 * QuestionDto), non la lunghezza della sequenza corretta, che il DTO pre-risposta
 * tace deliberatamente (stesso principio delle multiple choice, dove non si
 * rivela quante risposte servano) — pretendere value.length === draggableItems.length
 * renderebbe "answered" irraggiungibile in tutti i casi (la maggioranza) in cui
 * il pool e' piu' grande della sequenza da comporre.
 */
export function isQuestionAnswered(question: QuestionDto, value: string[]): boolean {
  const shape = getAnswerShape(question);
  if (shape === "options") return value.length > 0;
  if (shape === "draggable") return value.length > 0;
  return value.filter(Boolean).length === question.prompts.length;
}

/**
 * Le "Does the solution meet the goal?" (96 nel banco, tutte con una sola risposta giusta)
 * offrono esattamente Yes e No: sono a scelta singola per costruzione, e poterle segnare
 * entrambe produce una risposta che nell'esame non esiste. E' l'unico caso in cui la forma
 * della domanda basta a saperlo senza rivelare nulla — per tutte le altre il DTO pre-risposta
 * tace su quante risposte servano, ed e' giusto cosi' (vedi MultipleChoiceAnswer).
 */
export function isYesNoChoice(options: OptionDto[]): boolean {
  if (options.length !== 2) return false;
  const texts = options.map((o) => o.text.trim().toLowerCase());
  return texts.includes("yes") && texts.includes("no");
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
