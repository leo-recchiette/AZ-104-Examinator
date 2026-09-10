import type { QuestionDto } from "../types/question";
import type { QuestionAnswerDto } from "../types/answer";
import { splitPreamble, splitSharedScenario } from "./preamble";

/** Una domanda da rivedere, nella forma comune alle due schermate di revisione. */
export interface ReviewEntry {
  /** Posizione nella sessione, 1-based: e' il "Question N" dell'intestazione. */
  position: number;
  /** null se il numero non esiste piu' nel question bank (dataset reimportato dopo il tentativo). */
  question: QuestionDto | null;
  submitted: string[];
  correct: QuestionAnswerDto | null;
}

export interface ReviewGroupPart extends ReviewEntry {
  /** 1-based dentro il gruppo: resta stabile anche mostrando solo le parti sbagliate. */
  partNumber: number;
  /** Corpo della domanda senza lo scenario condiviso, che sta gia' in cima al gruppo. */
  body: string;
}

export type ReviewUnit =
  | { kind: "single"; entry: ReviewEntry }
  | {
      kind: "group";
      groupId: string;
      groupType: string | null;
      /** Quante parti ha il gruppo in tutto: puo' essere piu' di parts.length quando si filtra. */
      totalParts: number;
      shared: string;
      parts: ReviewGroupPart[];
    };

/**
 * Raggruppa le domande da rivedere: una domanda sciolta resta una card, i membri di una
 * scenario series confluiscono in una sola card che mostra lo scenario condiviso una volta
 * e poi ogni parte con la propria soluzione.
 *
 * `allQuestions` e' l'intero set della sessione, non solo cio' che si sta mostrando: serve
 * a ricavare lo scenario condiviso (che si ottiene confrontando i corpi di TUTTI i fratelli)
 * e a numerare le parti in modo stabile anche quando si filtrano solo quelle sbagliate —
 * senza, "Part 2 of 3" diventerebbe "Part 1 of 1" appena la prima parte risulta corretta.
 */
export function reviewUnits(entries: ReviewEntry[], allQuestions: QuestionDto[]): ReviewUnit[] {
  const membersByGroup = new Map<string, QuestionDto[]>();
  for (const question of allQuestions) {
    if (!question.groupId) continue;
    const members = membersByGroup.get(question.groupId);
    if (members) members.push(question);
    else membersByGroup.set(question.groupId, [question]);
  }

  const scenarioByGroup = new Map<string, { shared: string; bodyByNumber: Map<number, string> }>();
  for (const [groupId, members] of membersByGroup) {
    const { shared, parts } = splitSharedScenario(members.map((m) => splitPreamble(m.text).body));
    scenarioByGroup.set(groupId, {
      shared,
      bodyByNumber: new Map(members.map((m, i) => [m.number, parts[i]])),
    });
  }

  const units: ReviewUnit[] = [];
  const groupUnits = new Map<string, Extract<ReviewUnit, { kind: "group" }>>();

  for (const entry of entries) {
    const question = entry.question;
    if (!question?.groupId) {
      units.push({ kind: "single", entry });
      continue;
    }

    const members = membersByGroup.get(question.groupId) ?? [question];
    const scenario = scenarioByGroup.get(question.groupId);
    let unit = groupUnits.get(question.groupId);
    if (!unit) {
      // Il gruppo prende il posto del suo primo membro mostrato: l'ordine della sessione resta.
      unit = {
        kind: "group",
        groupId: question.groupId,
        groupType: question.groupType,
        totalParts: members.length,
        shared: scenario?.shared ?? "",
        parts: [],
      };
      groupUnits.set(question.groupId, unit);
      units.push(unit);
    }

    unit.parts.push({
      ...entry,
      partNumber: members.findIndex((m) => m.number === question.number) + 1,
      body: scenario?.bodyByNumber.get(question.number) ?? splitPreamble(question.text).body,
    });
  }

  return units;
}
