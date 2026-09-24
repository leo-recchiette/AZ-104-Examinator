import { useEffect, useState } from "react";
import { useTheme } from "../../theme/ThemeContext";
import { useDisplaySettings } from "../../settings/DisplaySettingsContext";
import type { QuestionDto } from "../../types/question";
import type { AnswerCheckResultDto } from "../../types/answer";
import { getAnswerShape, isAnswerComplete, questionTypeLabel, correctAnswerLines, needsBullets } from "../../utils/questionShape";
import { MultipleChoiceAnswer } from "./MultipleChoiceAnswer";
import { SequenceAnswer } from "./SequenceAnswer";
import { RowSelectAnswer } from "./RowSelectAnswer";
import { ImageStack } from "./ImageStack";
import { PlaceholderText } from "../PlaceholderText";
import { ExamNotice } from "./ExamNotice";
import { QuestionBody } from "../QuestionBody";
import { splitPreamble } from "../../utils/preamble";

interface QuestionCardProps {
  question: QuestionDto;
  value: string[];
  onChange: (next: string[]) => void;
  flagged: boolean;
  onToggleFlag: () => void;
  isPractice: boolean;
  autoReveal: boolean;
  checkResult?: AnswerCheckResultDto;
  onReveal: () => void | Promise<void>;
  onRequestExit: () => void;
}

export function QuestionCard({ question, value, onChange, flagged, onToggleFlag, isPractice, autoReveal, checkResult, onReveal, onRequestExit }: QuestionCardProps) {
  const { tokens: t } = useTheme();
  const { questionFontSize } = useDisplaySettings();
  const [panelOpen, setPanelOpen] = useState(false);
  const shape = getAnswerShape(question);
  const { preamble, body } = splitPreamble(question.text);
  const revealed = panelOpen && !!checkResult;
  const correct = checkResult?.correctAnswer;
  const multiHint = revealed && correct && correct.correctLetters.length > 1 ? `Select ${correct.correctLetters.length} answers` : "";
  // Con l'auto-reveal le righe si correggono una alla volta; il pannello si apre a domanda completa.
  const rowsPreview = autoReveal && !revealed ? correct?.answerRows : undefined;

  // Vista la correzione la risposta non si cambia piu' (solo Practice). Ricalcolato a ogni render,
  // non in stato locale, che si perderebbe al rimontaggio della card. Le righe si bloccano una per
  // una, quando si colorano; il resto a risposta completa.
  const answerLocked = isPractice && !!correct && (revealed || isAnswerComplete(question, value, correct));
  const lockedRows =
    isPractice && !!correct
      ? question.prompts.map((_, ri) => revealed || (value[ri] ?? "").trim() !== "")
      : undefined;

  // Il risultato lo chiede SessionPage; resta nascosto finche' la risposta non e' completa.
  useEffect(() => {
    if (!autoReveal || !checkResult?.correctAnswer) return;
    setPanelOpen(isAnswerComplete(question, value, checkResult.correctAnswer));
  }, [autoReveal, checkResult, question, value]);

  // A senso unico: richiuderla sbloccherebbe le risposte, che dipendono da "revealed".
  async function handleReveal() {
    if (revealed) return;
    if (!checkResult) await onReveal();
    setPanelOpen(true);
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 12, background: t.sub, border: `1px solid ${t.bd2}`, borderRadius: 14, padding: "12px 16px", flexWrap: "wrap" }}>
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

      <div style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 16, padding: "26px 28px", boxShadow: `0 1px 3px ${t.sh}` }}>
        {preamble && <ExamNotice text={preamble} />}
        <QuestionBody text={body} fontSize={questionFontSize} marginBottom={14} />
        <ImageStack filenames={question.images} />

        {shape === "options" && (
          <MultipleChoiceAnswer options={question.options} value={value} onChange={onChange} correctLetters={revealed ? correct?.correctLetters : undefined} locked={answerLocked} />
        )}
        {shape === "draggable" && (
          <SequenceAnswer draggableItems={question.draggableItems} sequenceLength={question.sequenceLength} value={value} onChange={onChange} answerRows={revealed ? correct?.answerRows : undefined} locked={answerLocked} />
        )}
        {shape === "prompts" && (
          <RowSelectAnswer
            prompts={question.prompts}
            value={value}
            onChange={onChange}
            answerRows={revealed ? correct?.answerRows : rowsPreview}
            answeredRowsOnly={!revealed}
            lockedRows={lockedRows}
          />
        )}

        {isPractice && (
          <div style={{ marginTop: 20, paddingTop: 18, borderTop: `1px solid ${t.bd2}` }}>
            <button
              onClick={handleReveal}
              aria-disabled={revealed || undefined}
              style={{
                padding: "11px 18px", borderRadius: 10, fontSize: 14, fontWeight: 600, font: "inherit",
                border: `1px solid ${revealed ? t.okbd : t.bd3}`, background: revealed ? t.okbg : t.card,
                color: revealed ? t.ok : t.tx2,
                cursor: revealed ? "default" : "pointer",
              }}
            >
              {revealed ? "Solution shown" : "Show solution"}
            </button>
            {revealed && correct && (
              <div style={{ marginTop: 18, border: `1px solid ${t.okbd}`, background: t.okbg, borderRadius: 12, padding: "20px 22px" }}>
                <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.ok, marginBottom: 10 }}>
                  Correct answer
                </div>
                <div style={{ display: "grid", gap: 6, fontSize: 15, lineHeight: 1.55, fontWeight: 500, marginBottom: 16 }}>
                  {correctAnswerLines(correct.answerText).map((line, i, lines) => (
                    <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
                      {needsBullets(lines) && <span style={{ flex: "none", color: t.ok }}>•</span>}
                      <span style={{ whiteSpace: "pre-line" }}>
                        <PlaceholderText text={line} />
                      </span>
                    </div>
                  ))}
                </div>
                <ImageStack filenames={correct.images} />
                {correct.explanation.trim() !== "" && (
                  <>
                    <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.mu, marginBottom: 8 }}>
                      Explanation
                    </div>
                    <div lang="en" style={{ fontSize: 14.5, lineHeight: 1.6, color: t.tx2, textAlign: "justify", hyphens: "auto" }}>
                      {correct.explanation}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
