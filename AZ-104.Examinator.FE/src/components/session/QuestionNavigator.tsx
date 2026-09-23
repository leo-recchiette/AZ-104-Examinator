import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../theme/ThemeContext";
import type { QuestionDto } from "../../types/question";
import { isQuestionAnswered } from "../../utils/questionShape";
import { groupTypeLabel, type SessionUnits } from "../../utils/groups";
import { NavigatorEntry, NavigatorFilter, NavigatorPanel } from "../NavigatorPanel";

interface QuestionNavigatorProps {
  open: boolean;
  focusUnanswered: boolean;
  questions: QuestionDto[];
  units: SessionUnits;
  unitAnswered: boolean[];
  answers: Record<number, string[]>;
  flags: Record<number, boolean>;
  currentIndex: number;
  onOpen: () => void;
  onClose: () => void;
  onSelect: (index: number) => void;
}

/** Elenco delle domande per unita', con le sotto-domande annidate, per saltare ai buchi. */
export function QuestionNavigator({
  open, focusUnanswered, questions, units, unitAnswered, answers, flags, currentIndex,
  onOpen, onClose, onSelect,
}: QuestionNavigatorProps) {
  const { tokens: t } = useTheme();
  const [onlyUnanswered, setOnlyUnanswered] = useState(false);
  const currentRef = useRef<HTMLButtonElement | null>(null);

  // Il pannello resta montato da chiuso: il filtro va riallineato a ogni apertura.
  useEffect(() => {
    if (open) setOnlyUnanswered(focusUnanswered);
  }, [open, focusUnanswered]);

  // Con 80 voci la domanda corrente sarebbe quasi sempre fuori schermo all'apertura.
  useEffect(() => {
    if (open) currentRef.current?.scrollIntoView({ block: "center" });
  }, [open]);

  const totalUnits = units.members.length;
  const answeredUnits = unitAnswered.filter(Boolean).length;
  const missing = totalUnits - answeredUnits;

  const visibleUnits = units.members
    .map((memberIndexes, unit) => ({ unit, memberIndexes }))
    .filter(({ unit }) => !onlyUnanswered || !unitAnswered[unit]);

  return (
    <NavigatorPanel
      id="question-navigator"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      title="All questions"
      subtitle={`${answeredUnits} of ${totalUnits} answered${missing > 0 ? ` · ${missing} left` : ""}`}
      filter={
        <NavigatorFilter active={onlyUnanswered} onClick={() => setOnlyUnanswered((v) => !v)} label="Only unanswered" />
      }
      tabBadge={
        missing > 0 ? (
          <span
            role="img"
            aria-label={`${missing} unanswered`}
            title={`${missing} unanswered`}
            style={{ fontSize: 10, lineHeight: 1, color: t.er }}
          >
            ●
          </span>
        ) : undefined
      }
    >
      {visibleUnits.length === 0 && (
        <p style={{ margin: "10px 2px", fontSize: 13.5, color: t.mu, lineHeight: 1.55 }}>
          Every question has an answer.
        </p>
      )}

      {visibleUnits.map(({ unit, memberIndexes }) => {
        const answered = unitAnswered[unit];

        if (memberIndexes.length === 1) {
          const index = memberIndexes[0];
          const current = index === currentIndex;
          return (
            <NavigatorEntry
              key={unit}
              buttonRef={current ? currentRef : undefined}
              label={`Question ${unit + 1}`}
              current={current}
              marks={
                <>
                  <Flag flagged={!!flags[index]} />
                  <Dot answered={answered} />
                </>
              }
              onClick={() => onSelect(index)}
            />
          );
        }

        const answeredMembers = memberIndexes.filter((i) =>
          isQuestionAnswered(questions[i], answers[questions[i].number] ?? []),
        ).length;
        const groupCurrent = memberIndexes.includes(currentIndex);
        // Porta alla prima sotto-domanda senza risposta, non alla prima in assoluto.
        const entryIndex =
          memberIndexes.find((i) => !isQuestionAnswered(questions[i], answers[questions[i].number] ?? [])) ??
          memberIndexes[0];

        return (
          <div
            key={unit}
            style={{
              border: `1.5px solid ${groupCurrent ? t.ac : t.bd3}`, borderRadius: 11,
              background: groupCurrent ? t.acs : t.sub, padding: 6,
            }}
          >
            <button
              onClick={() => onSelect(entryIndex)}
              style={{
                display: "flex", alignItems: "center", gap: 9, width: "100%", padding: "6px 6px 8px",
                border: "none", background: "transparent", textAlign: "left",
                color: groupCurrent ? t.ac : t.tx2, fontSize: 13.5, fontWeight: 600,
              }}
            >
              <span style={{ flex: 1, minWidth: 0 }}>
                Question {unit + 1}
                <span style={{ display: "block", fontSize: 11, fontWeight: 500, color: t.fa, marginTop: 2 }}>
                  {groupTypeLabel(questions[memberIndexes[0]].groupType)} · {answeredMembers}/{memberIndexes.length}
                </span>
              </span>
              <Dot answered={answered} />
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {memberIndexes.map((index, position) => {
                const current = index === currentIndex;
                return (
                  <NavigatorEntry
                    key={index}
                    buttonRef={current ? currentRef : undefined}
                    label={`Part ${position + 1}`}
                    current={current}
                    marks={
                      <>
                        <Flag flagged={!!flags[index]} />
                        <Dot answered={isQuestionAnswered(questions[index], answers[questions[index].number] ?? [])} />
                      </>
                    }
                    onClick={() => onSelect(index)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </NavigatorPanel>
  );
}

function Flag({ flagged }: { flagged: boolean }) {
  const { tokens: t } = useTheme();
  if (!flagged) return null;
  return (
    <span role="img" aria-label="Flagged for review" title="Flagged for review" style={{ flex: "none", fontSize: 11, lineHeight: 1, color: t.warn }}>
      ⚑
    </span>
  );
}

/** Verde = risposta data, non giusta. */
function Dot({ answered }: { answered: boolean }) {
  const { tokens: t } = useTheme();
  return (
    <span
      role="img"
      aria-label={answered ? "Answered" : "Not answered"}
      title={answered ? "Answered" : "Not answered"}
      style={{ flex: "none", fontSize: 10, lineHeight: 1, color: answered ? t.ok : t.er }}
    >
      ●
    </span>
  );
}
