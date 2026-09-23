import type { QuestionDto } from "../types/question";
import { isQuestionAnswered } from "./questionShape";

export interface GroupMember {
  index: number;
  question: QuestionDto;
}

/** I fratelli di gruppo della domanda in `index`, lei inclusa; vuoto se non e' in un gruppo. */
export function groupMembers(questions: QuestionDto[], index: number): GroupMember[] {
  const groupId = questions[index]?.groupId;
  if (!groupId) return [];
  return questions
    .map((question, i) => ({ index: i, question }))
    .filter((member) => member.question.groupId === groupId);
}

export function groupTypeLabel(groupType: string | null): string {
  return groupType === "case_study" ? "Case study" : "Scenario series";
}

export interface SessionUnits {
  unitOf: number[];
  members: number[][];
}

/** Un gruppo vale un'unita', come al setup: i conteggi mostrati vanno per unita'. */
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

/** Un gruppo e' risposto solo quando lo sono tutte le sue sotto-domande. */
export function unitsAnswered(
  questions: QuestionDto[],
  units: SessionUnits,
  answers: Record<number, string[]>,
): boolean[] {
  return units.members.map((memberIndexes) =>
    memberIndexes.every((i) => isQuestionAnswered(questions[i], answers[questions[i].number] ?? [])),
  );
}
