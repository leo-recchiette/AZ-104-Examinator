import type { QuestionDto } from "../types/question";

export interface GroupMember {
  /** Posizione nell'array delle domande della sessione: e' l'indice con cui si naviga. */
  index: number;
  question: QuestionDto;
}

/**
 * Le domande che condividono lo scenario con quella in posizione `index`, in ordine di sessione
 * (la stessa domanda inclusa). Vuoto se la domanda non appartiene a nessun gruppo.
 *
 * Il backend restituisce gia' i fratelli contigui, ma qui si filtra sull'intera sessione:
 * l'elenco resta corretto anche se un giorno l'ordinamento cambiasse.
 */
export function groupMembers(questions: QuestionDto[], index: number): GroupMember[] {
  const groupId = questions[index]?.groupId;
  if (!groupId) return [];
  return questions
    .map((question, i) => ({ index: i, question }))
    .filter((member) => member.question.groupId === groupId);
}

/** Etichetta leggibile del tipo di gruppo. */
export function groupTypeLabel(groupType: string | null): string {
  return groupType === "case_study" ? "Case study" : "Scenario series";
}
