import { useState } from "react";
import { useTheme } from "../../theme/ThemeContext";
import type { QuestionDto } from "../../types/question";
import type { AnswerCheckResultDto } from "../../types/answer";
import { getAnswerShape, questionTypeLabel } from "../../utils/questionShape";
import { MultipleChoiceAnswer } from "./MultipleChoiceAnswer";
import { SequenceAnswer } from "./SequenceAnswer";
import { RowSelectAnswer } from "./RowSelectAnswer";
import { ImageStack } from "./ImageStack";
import { PlaceholderText } from "../PlaceholderText";

interface QuestionCardProps {
  question: QuestionDto;
  value: string[];
  onChange: (next: string[]) => void;
  flagged: boolean;
  onToggleFlag: () => void;
  isPractice: boolean;
  checkResult?: AnswerCheckResultDto;
  onReveal: () => void | Promise<void>;
  onRequestExit: () => void;
}

export function QuestionCard({ question, value, onChange, flagged, onToggleFlag, isPractice, checkResult, onReveal, onRequestExit }: QuestionCardProps) {
  const { tokens: t } = useTheme();
  const [panelOpen, setPanelOpen] = useState(false);
  const shape = getAnswerShape(question);
  const revealed = panelOpen && !!checkResult;
  const correct = checkResult?.correctAnswer;
  const multiHint = revealed && correct && correct.correctLetters.length > 1 ? `Select ${correct.correctLetters.length} answers` : "";

  async function handleToggleReveal() {
    if (!checkResult) {
      await onReveal();
      setPanelOpen(true);
    } else {
      setPanelOpen((p) => !p);
    }
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 16, background: t.sub, border: `1px solid ${t.bd2}`, borderRadius: 14, padding: "14px 18px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600, color: t.fa }}>
            {questionTypeLabel(question, shape)}
          </span>
          {multiHint && (
            <span style={{ fontSize: 12, color: t.ac, background: t.acs, padding: "3px 9px", borderRadius: 6, fontWeight: 500 }}>
              {multiHint}
            </span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <button
            onClick={onToggleFlag}
            style={{
              display: "flex", alignItems: "center", gap: 7, padding: "7px 13px", borderRadius: 9, fontSize: 13, fontWeight: 500,
              border: `1px solid ${flagged ? t.warnbd : t.bd3}`, background: flagged ? t.warnbg : t.card,
              color: flagged ? t.warn : t.mu, whiteSpace: "nowrap", font: "inherit",
            }}
          >
            {flagged ? "◆" : "◇"} {flagged ? "Flagged for review" : "Flag for review"}
          </button>
          <button
            onClick={onRequestExit}
            style={{
              background: "#e5484d", border: "1px solid #e5484d", borderRadius: 9, padding: "7px 13px",
              color: "#fff", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", font: "inherit",
            }}
          >
            Exit &amp; submit
          </button>
        </div>
      </div>

      <div style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 16, padding: "32px 30px", boxShadow: `0 1px 3px ${t.sh}` }}>
        <p style={{ margin: "0 0 18px", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 20.5, lineHeight: 1.5, letterSpacing: "-.003em" }}>
          {question.text}
        </p>
        <ImageStack filenames={question.images} />

        {shape === "options" && (
          <MultipleChoiceAnswer options={question.options} value={value} onChange={onChange} correctLetters={revealed ? correct?.correctLetters : undefined} />
        )}
        {shape === "draggable" && (
          <SequenceAnswer draggableItems={question.draggableItems} value={value} onChange={onChange} answerRows={revealed ? correct?.answerRows : undefined} />
        )}
        {shape === "prompts" && (
          <RowSelectAnswer prompts={question.prompts} value={value} onChange={onChange} answerRows={revealed ? correct?.answerRows : undefined} />
        )}

        {isPractice && (
          <div style={{ marginTop: 26, paddingTop: 22, borderTop: `1px solid ${t.bd2}` }}>
            <button
              onClick={handleToggleReveal}
              style={{
                padding: "11px 18px", borderRadius: 10, fontSize: 14, fontWeight: 600, font: "inherit",
                border: `1px solid ${revealed ? t.okbd : t.bd3}`, background: revealed ? t.okbg : t.card,
                color: revealed ? t.ok : t.tx2,
              }}
            >
              {revealed ? "Hide solution" : "Show solution"}
            </button>
            {revealed && correct && (
              <div style={{ marginTop: 18, border: `1px solid ${t.okbd}`, background: t.okbg, borderRadius: 12, padding: "20px 22px" }}>
                <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.ok, marginBottom: 10 }}>
                  Correct answer
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.55, fontWeight: 500, marginBottom: 16, whiteSpace: "pre-line" }}>
                  <PlaceholderText text={correct.answerText} />
                </div>
                <ImageStack filenames={correct.images} />
                <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.mu, marginBottom: 8 }}>
                  Explanation
                </div>
                <div style={{ fontSize: 14.5, lineHeight: 1.6, color: t.tx2 }}>{correct.explanation}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
