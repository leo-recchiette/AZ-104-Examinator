import { useTheme } from "../../theme/ThemeContext";
import { groupTypeLabel } from "../../utils/groups";
import type { ReviewUnit } from "../../utils/reviewUnits";
import { NavigatorEntry, NavigatorPanel } from "../NavigatorPanel";

/** "unknown" e' la domanda sparita dal question bank dopo il tentativo: non si puo' dire com'e' andata. */
export type ReviewOutcome = "correct" | "wrong" | "unknown";

interface ReviewNavigatorProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  units: ReviewUnit[];
  outcomeOf: (position: number) => ReviewOutcome;
  onSelect: (position: number) => void;
}

export function ReviewNavigator({ open, onOpen, onClose, units, outcomeOf, onSelect }: ReviewNavigatorProps) {
  const { tokens: t } = useTheme();

  const positions = units.flatMap((unit) => (unit.kind === "single" ? [unit.entry.position] : unit.parts.map((p) => p.position)));
  const correct = positions.filter((position) => outcomeOf(position) === "correct").length;
  const wrong = positions.filter((position) => outcomeOf(position) === "wrong").length;

  return (
    <NavigatorPanel
      id="review-navigator"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      title="All questions"
      subtitle={`${correct} of ${positions.length} correct${wrong > 0 ? ` · ${wrong} wrong` : ""}`}
      tabBadge={
        wrong > 0 ? (
          <span
            role="img"
            aria-label={`${wrong} incorrectly answered`}
            title={`${wrong} incorrectly answered`}
            style={{ fontSize: 10, lineHeight: 1, color: t.er }}
          >
            ●
          </span>
        ) : undefined
      }
    >
      {units.map((unit) => {
        if (unit.kind === "single") {
          return (
            <NavigatorEntry
              key={unit.entry.position}
              label={`Question ${unit.entry.position}`}
              current={false}
              marks={<Mark outcome={outcomeOf(unit.entry.position)} />}
              onClick={() => onSelect(unit.entry.position)}
            />
          );
        }

        const outcomes = unit.parts.map((part) => outcomeOf(part.position));
        const groupOutcome: ReviewOutcome = outcomes.includes("wrong")
          ? "wrong"
          : outcomes.every((o) => o === "correct")
            ? "correct"
            : "unknown";
        const correctParts = outcomes.filter((o) => o === "correct").length;

        return (
          <div
            key={unit.groupId}
            style={{ border: `1.5px solid ${t.bd3}`, borderRadius: 11, background: t.sub, padding: 6 }}
          >
            <button
              onClick={() => onSelect(unit.parts[0].position)}
              style={{
                display: "flex", alignItems: "center", gap: 9, width: "100%", padding: "6px 6px 8px",
                border: "none", background: "transparent", textAlign: "left",
                color: t.tx2, fontSize: 13.5, fontWeight: 600,
              }}
            >
              <span style={{ flex: 1, minWidth: 0 }}>
                Question {unit.parts[0].position}
                <span style={{ display: "block", fontSize: 11, fontWeight: 500, color: t.fa, marginTop: 2 }}>
                  {groupTypeLabel(unit.groupType)} · {correctParts}/{unit.totalParts} correct
                </span>
              </span>
              <Mark outcome={groupOutcome} />
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {unit.parts.map((part) => (
                <NavigatorEntry
                  key={part.position}
                  label={`Part ${part.partNumber}`}
                  current={false}
                  marks={<Mark outcome={outcomeOf(part.position)} />}
                  onClick={() => onSelect(part.position)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </NavigatorPanel>
  );
}

/** Il simbolo porta gia' l'informazione anche senza colore: serve a chi non distingue verde e rosso. */
function Mark({ outcome }: { outcome: ReviewOutcome }) {
  const { tokens: t } = useTheme();
  const { symbol, color, label } =
    outcome === "correct"
      ? { symbol: "✓", color: t.ok, label: "Correct" }
      : outcome === "wrong"
        ? { symbol: "✗", color: t.er, label: "Incorrect" }
        : { symbol: "–", color: t.fa, label: "Result not available" };

  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      style={{ flex: "none", fontSize: 13, lineHeight: 1, fontWeight: 700, color }}
    >
      {symbol}
    </span>
  );
}
