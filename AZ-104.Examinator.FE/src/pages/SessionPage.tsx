import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../session/SessionContext";
import { useTheme } from "../theme/ThemeContext";
import { useElapsedTime } from "../hooks/useElapsedTime";
import { checkAnswers, getScore, saveAttempt } from "../api/results";
import { ApiError } from "../api/client";
import { isQuestionAnswered } from "../utils/questionShape";
import { QuestionCard } from "../components/session/QuestionCard";
import { OptionsMenu } from "../components/OptionsMenu";
import { HEADER_GRADIENT } from "../theme/tokens";

function fmt(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function SessionPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useSession();
  const { theme, tokens: t } = useTheme();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const firedRef = useRef(false);
  // Letto da handleFinish al momento dell'invio, senza dover ricreare la
  // callback (e quindi l'effect del timer) a ogni tick del secondo.
  const elapsedSecRef = useRef(0);

  const question = state.questions[state.currentIndex];
  const value = question ? (state.answers[question.number] ?? []) : [];
  const total = state.questions.length;
  const isPractice = state.mode === "practice";

  const handleFinish = useCallback(async () => {
    setError(null);
    setSubmitting(true);
    try {
      // Sempre l'intero set di domande caricate, non solo quelle a cui e'
      // stata data risposta: ExamResultService.ScoreAsync itera solo sulle
      // submission ricevute, quindi una domanda omessa non conterebbe ne' a
      // numeratore ne' a denominatore, gonfiando la percentuale.
      const submissions = state.questions.map((q) => ({
        questionNumber: q.number,
        userAnswers: state.answers[q.number] ?? [],
      }));
      const score = await getScore(submissions);
      dispatch({ type: "FINISH_SESSION", score, timeUsedSeconds: elapsedSecRef.current });
      navigate("/results");

      // Registrazione dello storico best-effort: un errore qui non deve bloccare la
      // navigazione ai risultati, il punteggio e' gia' stato calcolato e mostrato.
      if (state.mode && state.startedAt) {
        const endTime = new Date();
        saveAttempt({
          mode: state.mode,
          questionCount: state.questions.length,
          percentage: score.percentage,
          startTime: new Date(state.startedAt).toISOString(),
          endTime: endTime.toISOString(),
        }).catch((err) => console.error("Impossibile salvare il tentativo nello storico:", err));
      }
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Impossibile calcolare il punteggio.");
      setSubmitting(false);
    }
  }, [dispatch, navigate, state.answers, state.questions, state.mode, state.startedAt]);

  const elapsedMs = useElapsedTime(state.startedAt);
  const elapsedSec = Math.floor(elapsedMs / 1000);
  elapsedSecRef.current = elapsedSec;
  const limit = state.timeLimitSeconds;
  const remaining = limit ? Math.max(0, limit - elapsedSec) : 0;

  // Il timer resta attivo sia sulla domanda corrente sia sulla schermata di
  // conferma (showConfirm) e puo' auto-inviare da entrambe.
  useEffect(() => {
    if (!limit) return;
    if (remaining === 0 && !firedRef.current) {
      firedRef.current = true;
      handleFinish();
    }
  }, [remaining, limit, handleFinish]);

  useEffect(() => {
    if (!question) navigate("/", { replace: true });
  }, [question, navigate]);

  if (!question) return null;

  async function handleReveal() {
    const [result] = await checkAnswers([{ questionNumber: question.number, userAnswers: value }]);
    dispatch({ type: "SET_CHECK_RESULT", questionNumber: question.number, result });
  }

  const answeredCount = state.questions.reduce(
    (acc, q) => acc + (isQuestionAnswered(q, state.answers[q.number] ?? []) ? 1 : 0),
    0,
  );
  const flagCount = Object.values(state.flags).filter(Boolean).length;
  const flagged = !!state.flags[state.currentIndex];
  const isLast = state.currentIndex === total - 1;

  const timerCaption = limit ? "Time remaining" : "Elapsed";
  const timeLabel = fmt(limit ? remaining : elapsedSec);
  // Verde di default, giallo dopo 30 minuti trascorsi, rosso sotto i 10 minuti rimanenti (solo se a tempo).
  let clockColor = "#3ddc84";
  if (limit) {
    if (remaining <= 600) clockColor = "#ff6b6b";
    else if (elapsedSec > 1800) clockColor = "#ffd23f";
  }
  const timeColor = elapsedSec <= 1800 ? "#ffffff" : clockColor;
  const timePct = limit ? (elapsedSec / limit) * 100 : (answeredCount / total) * 100;

  const modeChipBg = isPractice ? "rgba(255,255,255,.22)" : "rgba(255,255,255,.92)";
  const modeChipFg = isPractice ? "#fff" : "#0b3fae";
  const modeLabel = isPractice ? "Practice" : "Simulation";
  const headerGradient = theme === "dark" ? HEADER_GRADIENT.dark : HEADER_GRADIENT.light;

  return (
    <div style={{ height: "100dvh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* position/zIndex non servono piu' per lo sticky, ma per far uscire il popover di Options sopra l'area che scorre. */}
      <div style={{ flexShrink: 0, position: "relative", zIndex: 5, background: headerGradient, backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,.18)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "14px 24px 12px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
            <span style={{ fontSize: 14.5, fontWeight: 600, whiteSpace: "nowrap", color: "#fff" }}>AZ-104</span>
            <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, padding: "4px 8px", borderRadius: 6, background: modeChipBg, color: modeChipFg }}>
              {modeLabel}
            </span>
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 12.5, color: "#e4e7ee" }}>{timerCaption}</span>
            <span style={{ fontSize: 20, fontWeight: 600, fontVariantNumeric: "tabular-nums", color: timeColor }}>{timeLabel}</span>
          </div>
          <div style={{ width: 1, height: 22, background: "rgba(255,255,255,.3)" }} />
          <div style={{ fontSize: 13.5, color: "#e4e7ee", fontVariantNumeric: "tabular-nums" }}>
            Question <strong style={{ color: "#fff" }}>{state.currentIndex + 1}</strong> of {total}
          </div>
          <OptionsMenu variant="onDark" />
        </div>
        <div style={{ height: 4, background: "rgba(255,255,255,.25)" }}>
          <div style={{ height: "100%", width: `${timePct}%`, background: clockColor, transition: "width 1s linear" }} />
        </div>
      </div>

      {/* minHeight 0: senza, un flex item non scende sotto l'altezza del proprio contenuto e lo scroll tornerebbe sulla pagina. */}
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%", padding: "22px 24px" }}>
          {error && <p style={{ margin: "0 0 20px", color: t.er, fontSize: 14 }}>{error}</p>}

          {showConfirm ? (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 0" }}>
              <div style={{ width: "100%", maxWidth: 560, background: t.card, border: `1px solid ${t.bd}`, borderRadius: 16, padding: "34px 32px", boxShadow: `0 2px 10px ${t.sh}` }}>
                <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: 27, margin: "0 0 8px" }}>
                  Submit your exam?
                </h2>
                <p style={{ margin: "0 0 24px", color: t.mu, fontSize: 14.5, lineHeight: 1.55 }}>
                  Once submitted you cannot change your answers. Unanswered questions score zero.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 1, background: t.bd2, border: `1px solid ${t.bd2}`, borderRadius: 12, overflow: "hidden", marginBottom: 26 }}>
                  <SummaryRow label="Questions answered" value={`${answeredCount} / ${total}`} fg={t.tx} />
                  <SummaryRow label="Unanswered" value={String(total - answeredCount)} fg={total - answeredCount ? t.er : t.tx} />
                  <SummaryRow label="Flagged for review" value={String(flagCount)} fg={flagCount ? t.warn : t.tx} />
                  <SummaryRow label="Time used" value={fmt(elapsedSec)} fg={t.tx} />
                </div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button onClick={() => setShowConfirm(false)} style={wideButtonStyle(`1px solid ${t.bd3}`, t.card, t.tx2)}>
                    Keep working
                  </button>
                  <button onClick={handleFinish} disabled={submitting} style={wideButtonStyle("none", t.ac, "#fff")}>
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <QuestionCard
              key={question.number}
              question={question}
              value={value}
              onChange={(next) => dispatch({ type: "SET_ANSWER", questionNumber: question.number, answer: next })}
              flagged={flagged}
              onToggleFlag={() => dispatch({ type: "TOGGLE_FLAG", index: state.currentIndex })}
              isPractice={isPractice}
              checkResult={state.checkResults[question.number]}
              onReveal={handleReveal}
              onRequestExit={() => setShowExitConfirm(true)}
            />
          )}
        </div>
      </div>

      {showExitConfirm && (
        <div style={{ position: "fixed", inset: 0, zIndex: 30, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(10,12,16,.5)" }}>
          <div style={{ width: "100%", maxWidth: 480, background: t.card, border: `1px solid ${t.bd}`, borderRadius: 16, padding: "30px 28px", boxShadow: "0 10px 30px rgba(0,0,0,.25)" }}>
            <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: 23, margin: "0 0 8px" }}>
              Uscire ora?
            </h2>
            <p style={{ margin: "0 0 24px", color: t.mu, fontSize: 14.5, lineHeight: 1.55 }}>
              L'esame verrà terminato subito. Tutte le domande senza risposta saranno contrassegnate come tali e
              contate come errate.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button onClick={() => setShowExitConfirm(false)} style={wideButtonStyle(`1px solid ${t.bd3}`, t.card, t.tx2)}>
                Annulla
              </button>
              <button
                onClick={() => {
                  setShowExitConfirm(false);
                  handleFinish();
                }}
                disabled={submitting}
                style={wideButtonStyle("none", "#e5484d", "#fff")}
              >
                Esci e invia
              </button>
            </div>
          </div>
        </div>
      )}

      {!showConfirm && (
        <div style={{ flexShrink: 0, background: t.head, backdropFilter: "blur(8px)", borderTop: `1px solid ${t.bd}` }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", gap: 12 }}>
            <button
              onClick={() => dispatch({ type: "GO_PREVIOUS" })}
              disabled={state.currentIndex === 0}
              style={{
                display: "flex", alignItems: "center", gap: 8, padding: "12px 20px", borderRadius: 10,
                border: `1px solid ${t.bd3}`, background: t.card, fontSize: 14.5, fontWeight: 500, font: "inherit",
                color: state.currentIndex === 0 ? t.dis : t.tx2, opacity: state.currentIndex === 0 ? 0.55 : 1,
              }}
            >
              ← Previous
            </button>
            <div style={{ flex: 1, textAlign: "center", fontSize: 12.5, color: t.fa }}>
              {answeredCount} of {total} answered{flagCount ? ` · ${flagCount} flagged` : ""}
            </div>
            <button
              onClick={() => (isLast ? setShowConfirm(true) : dispatch({ type: "GO_NEXT" }))}
              style={primaryButtonStyle(t.ac)}
            >
              {isLast ? "Review & submit" : "Next →"}
            </button>
          </div>
        </div>
      )}
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

function primaryButtonStyle(ac: string) {
  return {
    display: "flex", alignItems: "center", gap: 8, padding: "12px 22px", borderRadius: 10, border: "none",
    background: ac, color: "#fff", fontSize: 14.5, fontWeight: 600, font: "inherit",
  } as const;
}

function wideButtonStyle(border: string, bg: string, fg: string) {
  return {
    flex: 1, minWidth: 150, padding: 14, borderRadius: 11, border, background: bg,
    fontSize: 14.5, fontWeight: 600, color: fg, font: "inherit",
  } as const;
}
