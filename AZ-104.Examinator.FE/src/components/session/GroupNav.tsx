import { useTheme } from "../../theme/ThemeContext";
import { isQuestionAnswered } from "../../utils/questionShape";
import { groupTypeLabel, type GroupMember } from "../../utils/groups";

interface GroupNavProps {
  members: GroupMember[];
  currentIndex: number;
  answers: Record<number, string[]>;
  onSelect: (index: number) => void;
}

/** Elenco laterale per saltare fra le sotto-domande di uno scenario. */
export function GroupNav({ members, currentIndex, answers, onSelect }: GroupNavProps) {
  const { tokens: t } = useTheme();
  const label = groupTypeLabel(members[0]?.question.groupType ?? null);

  return (
    <nav
      aria-label={`${label} sub-questions`}
      style={{ flex: "0 0 176px", background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: "16px 14px" }}
    >
      <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600, color: t.fa }}>
        {label}
      </div>
      <div style={{ fontSize: 12, color: t.mu, margin: "6px 0 14px" }}>
        {members.length} linked questions
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {members.map((member, position) => {
          const current = member.index === currentIndex;
          const answered = isQuestionAnswered(member.question, answers[member.question.number] ?? []);
          return (
            <button
              key={member.question.number}
              onClick={() => onSelect(member.index)}
              aria-current={current ? "true" : undefined}
              style={{
                display: "flex", alignItems: "center", gap: 9, padding: "9px 11px", borderRadius: 9,
                border: `1.5px solid ${current ? t.ac : t.bd3}`, background: current ? t.acs : t.card,
                color: current ? t.ac : t.tx2, textAlign: "left",
                // Niente font:"inherit": la shorthand azzererebbe fontSize/fontWeight.
                fontSize: 13.5, fontWeight: current ? 600 : 500,
              }}
            >
              <span style={{ flex: 1 }}>Question {position + 1}</span>
              {/* Verde = risposta data, non giusta. */}
              <span
                role="img"
                aria-label={answered ? "Answered" : "Not answered"}
                title={answered ? "Answered" : "Not answered"}
                style={{ flex: "none", fontSize: 10, lineHeight: 1, color: answered ? t.ok : t.er }}
              >
                ●
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
