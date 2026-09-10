import { useTheme } from "../../theme/ThemeContext";
import { useDisplaySettings } from "../../settings/DisplaySettingsContext";
import type { ReviewUnit } from "../../utils/reviewUnits";
import { groupTypeLabel } from "../../utils/groups";
import { getAnswerShape } from "../../utils/questionShape";
import { pointsEarned } from "../../utils/grading";
import { ReviewQuestionCard } from "./ReviewQuestionCard";

interface ReviewGroupCardProps {
  unit: Extract<ReviewUnit, { kind: "group" }>;
}

/**
 * Le domande di una scenario series riviste insieme: lo scenario che si ripetono identico
 * compare una volta sola in cima, poi ogni parte porta solo la propria soluzione con
 * risposta data, soluzione e spiegazione. Prima erano N card che ripetevano lo stesso
 * scenario, lasciando all'occhio il compito di trovare l'unica frase diversa.
 */
export function ReviewGroupCard({ unit }: ReviewGroupCardProps) {
  const { tokens: t } = useTheme();
  const { questionFontSize } = useDisplaySettings();

  const scored = unit.parts.filter((part) => part.question && part.correct);
  const [earned, total] = scored.reduce<[number, number]>(
    ([sumEarned, sumTotal], part) => {
      const shape = getAnswerShape(part.question!);
      const [partEarned, partTotal] = pointsEarned(
        shape,
        part.submitted,
        part.correct!,
        part.question!.options.map((o) => o.letter),
      );
      return [sumEarned + partEarned, sumTotal + partTotal];
    },
    [0, 0],
  );
  const allCorrect = total > 0 && earned >= total;
  // Mostrando solo le parti sbagliate il gruppo ne espone meno di quante ne ha: va detto,
  // altrimenti "3 parts" con due sole parti sotto sembra un pezzo mancante.
  const partsLabel =
    unit.parts.length === unit.totalParts
      ? `${unit.totalParts} parts`
      : `${unit.parts.length} of ${unit.totalParts} parts`;

  return (
    <div style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: "26px 26px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: t.acs, color: t.ac }}>
          {groupTypeLabel(unit.groupType)}
        </span>
        <span style={{ fontSize: 12, fontWeight: 600, color: t.fa }}>{partsLabel}</span>
        {total > 0 && (
          <span style={{ fontSize: 12, color: allCorrect ? t.ok : t.fa2, marginLeft: "auto", fontVariantNumeric: "tabular-nums" }}>
            {earned} / {total} points
          </span>
        )}
      </div>

      {unit.shared !== "" && (
        <p style={{ margin: "0 0 4px", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: questionFontSize, lineHeight: 1.5 }}>
          {unit.shared}
        </p>
      )}

      {unit.parts.map((part) => (
        <ReviewQuestionCard
          key={part.position}
          position={part.position}
          question={part.question}
          submitted={part.submitted}
          correct={part.correct}
          asPart={{ number: part.partNumber, body: part.body }}
        />
      ))}
    </div>
  );
}
