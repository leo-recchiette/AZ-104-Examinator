import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { getAttempt } from "../api/results";
import { ApiError } from "../api/client";
import type { ExamAttemptDetailDto } from "../types/answer";
import { OptionsMenu } from "../components/OptionsMenu";
import { ReviewQuestionCard } from "../components/review/ReviewQuestionCard";
import { getAnswerShape } from "../utils/questionShape";
import { pointsEarned } from "../utils/grading";
import { formatDateTime, formatDuration } from "../utils/format";
import { PASS_MARK_PERCENT } from "../constants";
import { HEADER_GRADIENT } from "../theme/tokens";

/** Rilettura di un tentativo dello storico: le domande di quella sessione con quanto era stato risposto. */
export function AttemptDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { theme, tokens: t } = useTheme();
  const headerGradient = theme === "dark" ? HEADER_GRADIENT.dark : HEADER_GRADIENT.light;
  const [detail, setDetail] = useState<ExamAttemptDetailDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [onlyWrong, setOnlyWrong] = useState(false);

  useEffect(() => {
    const attemptId = Number(id);
    if (!Number.isInteger(attemptId)) {
      setError("Identificativo del tentativo non valido.");
      return;
    }
    getAttempt(attemptId)
      .then(setDetail)
      .catch((err) =>
        setError(err instanceof ApiError && err.status === 404 ? "Questo tentativo non esiste." : "Impossibile caricare il tentativo."),
      );
  }, [id]);

  // Il punteggio per domanda si ricalcola qui con le stesse regole della revisione di
  // fine sessione: il tentativo salva le risposte, non quanti punti avevano fruttato.
  const graded = useMemo(() => {
    if (!detail) return [];
    return detail.answers.map((a, index) => {
      if (!a.question || !a.correctAnswer) return { answer: a, position: index + 1, lostPoints: false };
      const shape = getAnswerShape(a.question);
      const [earned, total] = pointsEarned(shape, a.userAnswers, a.correctAnswer, a.question.options.map((o) => o.letter));
      return { answer: a, position: index + 1, lostPoints: earned < total };
    });
  }, [detail]);

  const lostCount = graded.filter((g) => g.lostPoints).length;
  const shown = onlyWrong ? graded.filter((g) => g.lostPoints) : graded;
  const attempt = detail?.attempt;
  const passed = (attempt?.percentage ?? 0) >= PASS_MARK_PERCENT;

  return (
    <div style={{ flex: 1 }}>
      <div style={{ position: "sticky", top: 0, zIndex: 5, background: headerGradient, backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,.18)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", gap: 14 }}>
          <button onClick={() => navigate("/history")} style={{ background: "none", border: "none", padding: 0, color: "#e4e7ee", fontSize: 13.5, font: "inherit" }}>
            ← History
          </button>
          <div style={{ flex: 1 }} />
          {attempt && <span style={{ fontSize: 13.5, color: "#e4e7ee" }}>{formatDateTime(attempt.endTime)}</span>}
          <OptionsMenu variant="onDark" />
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 24px 80px" }}>
        {error && <p style={{ margin: 0, color: t.er, fontSize: 14 }}>{error}</p>}
        {!detail && !error && <p style={{ margin: 0, color: t.mu, fontSize: 14 }}>Loading...</p>}

        {attempt && (
          <>
            <div style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: "24px 26px", marginBottom: 26, boxShadow: `0 1px 2px ${t.sh}` }}>
              <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: t.fa, fontWeight: 600 }}>
                {attempt.mode === "practice" ? "Practice" : "Simulation"} · {formatDateTime(attempt.endTime)}
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 14, margin: "12px 0 0", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: 46, fontWeight: 600, lineHeight: 1, letterSpacing: "-.02em" }}>
                  {attempt.percentage.toFixed(1)}%
                </span>
                <span style={{ fontSize: 14, fontWeight: 600, padding: "5px 11px", borderRadius: 8, background: passed ? t.okbg : t.erbg, color: passed ? t.ok : t.er, marginBottom: 5 }}>
                  {passed ? "Pass" : "Fail"}
                </span>
                <span style={{ fontSize: 13.5, color: t.mu, marginBottom: 8, marginLeft: "auto" }}>
                  {attempt.questionCount} questions · {formatDuration(attempt.startTime, attempt.endTime)} · {lostCount} lost points
                </span>
              </div>
            </div>

            {detail.answers.length === 0 ? (
              // Tentativi registrati prima che il dettaglio venisse salvato: c'e' il punteggio, non le domande.
              <div style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: 40, textAlign: "center" }}>
                <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>No question detail for this session</div>
                <div style={{ fontSize: 14, color: t.mu }}>It was recorded before answers started being saved, so only its score is available.</div>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
                  <FilterPill active={!onlyWrong} onClick={() => setOnlyWrong(false)} label={`All ${graded.length} questions`} />
                  <FilterPill active={onlyWrong} onClick={() => setOnlyWrong(true)} label={`Lost points (${lostCount})`} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {shown.map((g) => (
                    <ReviewQuestionCard
                      key={g.position}
                      position={g.position}
                      question={g.answer.question}
                      submitted={g.answer.userAnswers}
                      correct={g.answer.correctAnswer}
                    />
                  ))}
                  {shown.length === 0 && (
                    <div style={{ background: t.card, border: `1px solid ${t.okbd}`, borderRadius: 14, padding: 40, textAlign: "center" }}>
                      <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>Nothing to review</div>
                      <div style={{ fontSize: 14, color: t.mu }}>Every component was answered correctly in this session.</div>
                    </div>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function FilterPill({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  const { tokens: t } = useTheme();
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 15px", borderRadius: 999, font: "inherit", fontSize: 13.5, fontWeight: 600,
        border: `1px solid ${active ? "transparent" : t.bd3}`,
        background: active ? t.ac : t.card, color: active ? "#fff" : t.tx2,
      }}
    >
      {label}
    </button>
  );
}
