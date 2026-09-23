import type { QuestionDto } from "../types/question";
import type { QuestionAnswerDto } from "../types/answer";
import { splitPreamble, splitSharedScenario } from "./preamble";

export const reviewAnchorId = (position: number) => `review-q${position}`;

export interface ReviewEntry {
  /** 1-based. */
  position: number;
  /** null se la domanda non esiste piu' dopo un reimport. */
  question: QuestionDto | null;
  submitted: string[];
  correct: QuestionAnswerDto | null;
}

export interface ReviewGroupPart extends ReviewEntry {
  /** 1-based, stabile anche filtrando le parti. */
  partNumber: number;
  body: string;
}

export type ReviewUnit =
  | { kind: "single"; entry: ReviewEntry }
  | {
      kind: "group";
      groupId: string;
      groupType: string | null;
      /** Anche quelle filtrate via. */
      totalParts: number;
      shared: string;
      parts: ReviewGroupPart[];
    };

/**
 * I membri di un gruppo confluiscono in una card sola. `allQuestions` e' l'intero set: serve per
 * lo scenario condiviso e per numerare le parti anche quando se ne mostra solo una parte.
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
