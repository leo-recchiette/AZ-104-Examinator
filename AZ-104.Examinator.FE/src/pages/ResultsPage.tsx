import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../session/SessionContext";
import { useTheme } from "../theme/ThemeContext";
import { checkAnswers } from "../api/results";
import { ApiError } from "../api/client";
import type { AnswerCheckResultDto } from "../types/answer";
import { getAnswerShape, questionTypeLabel, formatYourAnswer } from "../utils/questionShape";
import { pointsEarned } from "../utils/grading";
import { ThemeIconButton } from "../components/ThemeIconButton";
import { ImageStack } from "../components/session/ImageStack";
import { PASS_MARK_PERCENT } from "../constants";
import { HEADER_GRADIENT } from "../theme/tokens";

interface WrongEntry {
  no: number;
  tag: string;
  text: string;
  pointsLabel: string;
  yours: string;
  correct: string;
  explanation: string;
  images: string[];
}

function fmt(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function ResultsPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useSession();
  const { theme, tokens: t } = useTheme();
  const headerGradient = theme === "dark" ? HEADER_GRADIENT.dark : HEADER_GRADIENT.light;
  const [review, setReview] = useState<AnswerCheckResultDto[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    if (state.questions.length === 0) return;
    const submissions = state.questions.map((q) => ({
      questionNumber: q.number,
      userAnswers: state.answers[q.number] ?? [],
    }));
    checkAnswers(submissions)
      .then(setReview)
      .catch((err) => setError(err instanceof ApiError ? err.message : "Impossibile caricare la revisione."));
    // Va eseguito una sola volta all'arrivo su questa pagina.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRestart() {
    dispatch({ type: "RESET" });
    navigate("/");
  }

  const percentage = state.score?.percentage ?? 0;
  const passed = percentage >= PASS_MARK_PERCENT;
  const isPractice = state.mode === "practice";
  const modeLabel = isPractice ? "Practice" : "Simulation";

  const wrong: WrongEntry[] = [];
  let fullyCorrectCount = 0;
  if (review) {
    state.questions.forEach((q, i) => {
      const result = review[i];
      const correct = result?.correctAnswer;
      if (!correct) return;
      const shape = getAnswerShape(q);
      const submitted = state.answers[q.number] ?? [];
      const [earned, pointsTotal] = pointsEarned(shape, submitted, correct, q.options.map((o) => o.letter));
      if (earned >= pointsTotal) {
        fullyCorrectCount++;
        return;
      }
      wrong.push({
        no: i + 1,
        tag: questionTypeLabel(q, shape),
        text: q.text,
        pointsLabel: `${earned} / ${pointsTotal} points`,
        yours: formatYourAnswer(q, submitted),
        correct: correct.answerText,
        explanation: correct.explanation,
        images: correct.images,
      });
    });
  }

  if (showReview) {
    return (
      <div style={{ flex: 1 }}>
        <div style={{ position: "sticky", top: 0, zIndex: 5, background: headerGradient, backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,.18)" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", gap: 14 }}>
            <button onClick={() => setShowReview(false)} style={{ background: "none", border: "none", padding: 0, color: "#e4e7ee", fontSize: 13.5, font: "inherit" }}>
              ← Result
            </button>
            <div style={{ flex: 1 }} />
            <span style={{ fontSize: 13.5, color: "#e4e7ee" }}>
              {wrong.length} of {state.questions.length} questions lost points
            </span>
            <ThemeIconButton variant="onDark" />
          </div>
        </div>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px 80px" }}>
          <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: 30, margin: "0 0 26px" }}>
            What you got wrong
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {wrong.map((w) => (
              <div key={w.no} style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: "26px 26px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: t.fa }}>Question {w.no}</span>
                  <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: t.bg, color: t.mu }}>
                    {w.tag}
                  </span>
                  <span style={{ fontSize: 12, color: t.fa2, marginLeft: "auto", fontVariantNumeric: "tabular-nums" }}>{w.pointsLabel}</span>
                </div>
                <p style={{ margin: "0 0 20px", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 17.5, lineHeight: 1.5 }}>{w.text}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginBottom: 18 }}>
                  <div style={{ border: `1px solid ${t.erbd}`, background: t.erbg, borderRadius: 10, padding: "14px 15px" }}>
                    <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.er, marginBottom: 7 }}>Your answer</div>
                    <div style={{ fontSize: 14, lineHeight: 1.5, whiteSpace: "pre-line", color: t.tx2 }}>{w.yours}</div>
                  </div>
                  <div style={{ border: `1px solid ${t.okbd}`, background: t.okbg, borderRadius: 10, padding: "14px 15px" }}>
                    <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.ok, marginBottom: 7 }}>Correct answer</div>
                    <div style={{ fontSize: 14, lineHeight: 1.5, whiteSpace: "pre-line", color: t.tx2 }}>{w.correct}</div>
                  </div>
                </div>
                <ImageStack filenames={w.images} />
                <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.mu, marginBottom: 7 }}>Explanation</div>
                <div style={{ fontSize: 14.5, lineHeight: 1.6, color: t.tx2 }}>{w.explanation}</div>
              </div>
            ))}
            {review && wrong.length === 0 && (
              <div style={{ background: t.card, border: `1px solid ${t.okbd}`, borderRadius: 14, padding: 40, textAlign: "center" }}>
                <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>Nothing to review</div>
                <div style={{ fontSize: 14, color: t.mu }}>Every component was answered correctly.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
      <div style={{ width: "100%", maxWidth: 680 }}>
        <div style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 16, padding: "36px 32px", boxShadow: `0 2px 10px ${t.sh}` }}>
          <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: t.fa, fontWeight: 600 }}>
            {modeLabel} · result
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 16, margin: "14px 0 4px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 64, fontWeight: 600, lineHeight: 1, letterSpacing: "-.02em" }}>
              {percentage.toFixed(1)}%
            </span>
            <span style={{ fontSize: 15, fontWeight: 600, padding: "6px 13px", borderRadius: 8, background: passed ? t.okbg : t.erbg, color: passed ? t.ok : t.er, marginBottom: 8 }}>
              {passed ? "Pass" : "Fail"}
            </span>
          </div>
          <div style={{ height: 8, borderRadius: 4, background: t.track, margin: "20px 0 12px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${percentage}%`, background: passed ? t.ok : t.er }} />
          </div>
          {error && <p style={{ margin: "0 0 12px", color: t.er, fontSize: 14 }}>{error}</p>}
          <p style={{ margin: "0 0 26px", color: t.mu, fontSize: 14 }}>
            Pass mark {PASS_MARK_PERCENT}% · Time used {fmt(state.timeUsedSeconds ?? 0)}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: t.bd2, border: `1px solid ${t.bd2}`, borderRadius: 12, overflow: "hidden", marginBottom: 26 }}>
            <SummaryRow label="Questions" value={String(state.questions.length)} fg={t.tx} />
            <SummaryRow label="Fully correct" value={String(fullyCorrectCount)} fg={t.ok} />
            <SummaryRow label="Lost points" value={String(wrong.length)} fg={wrong.length ? t.er : t.tx} />
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button onClick={() => setShowReview(true)} disabled={!review} style={wideButtonStyle("none", t.ac, "#fff")}>
              {wrong.length ? `Review ${wrong.length} questions` : "Review answers"}
            </button>
            <button onClick={handleRestart} style={wideButtonStyle(`1px solid ${t.bd3}`, t.card, t.tx2)}>
              New session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, fg }: { label: string; value: string; fg: string }) {
  const { tokens: t } = useTheme();
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: t.card }}>
      <span style={{ fontSize: 14, color: t.tx2 }}>{label}</span>
      <span style={{ fontSize: 15, fontWeight: 600, fontVariantNumeric: "tabular-nums", color: fg }}>{value}</span>
    </div>
  );
}

function wideButtonStyle(border: string, bg: string, fg: string) {
  return {
    flex: 1, minWidth: 170, padding: 14, borderRadius: 11, border, background: bg,
    fontSize: 14.5, fontWeight: 600, color: fg, font: "inherit",
  } as const;
}
