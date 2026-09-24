import { useTheme } from "../../theme/ThemeContext";
import { useDisplaySettings } from "../../settings/DisplaySettingsContext";
import type { QuestionDto } from "../../types/question";
import type { QuestionAnswerDto } from "../../types/answer";
import { getAnswerShape, questionTypeLabel, formatYourAnswer, correctAnswerLines, correctLineOutcomes, needsBullets } from "../../utils/questionShape";
import { pointsEarned } from "../../utils/grading";
import { splitPreamble } from "../../utils/preamble";
import { reviewAnchorId } from "../../utils/reviewUnits";
import { QuestionBody } from "../QuestionBody";
import { ImageStack } from "../session/ImageStack";
import { PlaceholderText } from "../PlaceholderText";
import { ExplanationText } from "../ExplanationText";

interface ReviewQuestionCardProps {
  position: number;
  question: QuestionDto | null;
  submitted: string[];
  correct: QuestionAnswerDto | null;

  asPart?: { number: number; body: string };
}

export function ReviewQuestionCard({ position, question, submitted, correct, asPart }: ReviewQuestionCardProps) {
  const { tokens: t } = useTheme();
  const { questionFontSize } = useDisplaySettings();

  const frame = asPart
    ? { borderTop: `1px solid ${t.bd2}`, paddingTop: 20, marginTop: 20 }
    : { background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14 };
  const label = asPart ? `Part ${asPart.number}` : `Question ${position}`;

  if (!question || !correct) {
    return (
      <div id={reviewAnchorId(position)} style={{ ...frame, padding: asPart ? "20px 0 0" : "22px 26px", scrollMarginTop: 80 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: t.fa, marginBottom: 8 }}>{label}</div>
        <div style={{ fontSize: 14, color: t.mu, lineHeight: 1.5 }}>
          This question is no longer in the question bank, so its text and solution cannot be shown.
        </div>
        <div style={{ fontSize: 14, color: t.tx2, marginTop: 10, whiteSpace: "pre-line" }}>
          Your answer: {submitted.length ? submitted.join(" · ") : "Not answered"}
        </div>
      </div>
    );
  }

  const shape = getAnswerShape(question);
  const [earned, pointsTotal] = pointsEarned(shape, submitted, correct, question.options.map((o) => o.letter));
  const allCorrect = earned >= pointsTotal;
  
  const sameAsCorrect =
    allCorrect && submitted.length === (shape === "options" ? correct.correctLetters.length : correct.answerRows.length);
  const correctLines = correctAnswerLines(correct.answerText);
  // Spunta/croce solo accanto a "Your answer": da sola la card della soluzione non ha nulla da confrontare.
  const outcomes = sameAsCorrect ? null : correctLineOutcomes(question, submitted, correct, correctLines);
  const yourLines = formatYourAnswer(question, submitted);

  return (
    <div id={reviewAnchorId(position)} style={{ ...frame, padding: asPart ? "20px 0 0" : "26px 26px 24px", scrollMarginTop: 80 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: t.fa }}>{label}</span>
        <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: t.bg, color: t.mu }}>
          {questionTypeLabel(question, shape)}
        </span>
        <span style={{ fontSize: 12, color: allCorrect ? t.ok : t.fa2, marginLeft: "auto", fontVariantNumeric: "tabular-nums" }}>
          {earned} / {pointsTotal} points
        </span>
      </div>
      
      <QuestionBody text={asPart ? asPart.body : splitPreamble(question.text).body} fontSize={questionFontSize} marginBottom={20} />
      
      <ImageStack filenames={[...question.images, ...correct.images]} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginBottom: 18 }}>
        {!sameAsCorrect && (
          <div style={{ border: `1px solid ${allCorrect ? t.okbd : t.erbd}`, background: allCorrect ? t.okbg : t.erbg, borderRadius: 10, padding: "14px 15px" }}>
            <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: allCorrect ? t.ok : t.er, marginBottom: 7 }}>
              Your answer
            </div>
            <div style={{ display: "grid", gap: 5, fontSize: 14, lineHeight: 1.5, color: t.tx2 }}>
              {yourLines.map((line, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                  {needsBullets(yourLines) && <span style={{ flex: "none", color: allCorrect ? t.ok : t.er }}>•</span>}
                  <span style={{ whiteSpace: "pre-line" }}>{line}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div style={{ border: `1px solid ${t.okbd}`, background: t.okbg, borderRadius: 10, padding: "14px 15px" }}>
          <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.ok, marginBottom: 7 }}>
            Correct answer
          </div>
          {/* Pallino in colonna propria: la riga che va a capo resta allineata al testo. */}
          <div style={{ display: "grid", gap: 5, fontSize: 14, lineHeight: 1.5, color: t.tx2 }}>
            {correctLines.map((line, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                {outcomes ? (
                  <span
                    aria-label={outcomes[i] ? "Answered correctly" : "Answered wrong"}
                    style={{ flex: "none", width: 12, textAlign: "center", fontWeight: 700, color: outcomes[i] ? t.ok : t.er }}
                  >
                    {outcomes[i] ? "✓" : "✗"}
                  </span>
                ) : (
                  needsBullets(correctLines) && <span style={{ flex: "none", color: t.ok }}>•</span>
                )}
                <span style={{ whiteSpace: "pre-line" }}>
                  <PlaceholderText text={line} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {correct.explanation.trim() !== "" && (
        <>
          <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.mu, marginBottom: 7 }}>
            Explanation
          </div>
          <div lang="en" style={{ fontSize: 14.5, lineHeight: 1.6, color: t.tx2, textAlign: "justify", hyphens: "auto" }}>
            <ExplanationText text={correct.explanation} />
          </div>
        </>
      )}
    </div>
  );
}
