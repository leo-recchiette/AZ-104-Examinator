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

export interface SessionUnits {
  /** Per ogni domanda, l'indice dell'unita' a cui appartiene. */
  unitOf: number[];
  /** Per ogni unita', gli indici delle domande che la compongono. */
  members: number[][];
}

/**
 * Le unita' della sessione: una domanda sciolta vale un'unita', un gruppo intero pure.
 * Serve per i conteggi mostrati all'utente ("Question 4 of 80", "12 of 80 answered"),
 * che devono contare cio' che e' stato chiesto in fase di setup — dove un gruppo conta 1 —
 * e non le singole sotto-domande, che sono di piu'.
 *
 * La navigazione Next/Previous continua invece a passare per ogni sotto-domanda: saltarle
 * significherebbe poterle lasciare senza risposta senza accorgersene.
 */
export function sessionUnits(questions: QuestionDto[]): SessionUnits {
  const unitOf: number[] = [];
  const members: number[][] = [];
  const indexByKey = new Map<string, number>();

  questions.forEach((question, i) => {
    const key = question.groupId ?? `#${question.number}`;
    let unit = indexByKey.get(key);
    if (unit === undefined) {
      unit = members.length;
      indexByKey.set(key, unit);
      members.push([]);
    }
    members[unit].push(i);
    unitOf[i] = unit;
  });

  return { unitOf, members };
}
