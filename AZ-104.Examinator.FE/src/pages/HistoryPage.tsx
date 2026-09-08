import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { getAllAttempts } from "../api/results";
import { ApiError } from "../api/client";
import type { ExamAttemptDto } from "../types/answer";
import { OptionsMenu } from "../components/OptionsMenu";
import { formatDateTime, formatDuration } from "../utils/format";
import { PASS_MARK_PERCENT } from "../constants";
import { HEADER_GRADIENT } from "../theme/tokens";

/** Elenco dei tentativi conclusi, dal piu' recente: da qui se ne apre uno per rileggerlo domanda per domanda. */
export function HistoryPage() {
  const navigate = useNavigate();
  const { theme, tokens: t } = useTheme();
  const headerGradient = theme === "dark" ? HEADER_GRADIENT.dark : HEADER_GRADIENT.light;
  const [attempts, setAttempts] = useState<ExamAttemptDto[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllAttempts()
      // L'API li restituisce dal piu' vecchio (ordine che serve al grafico "Your progress"):
      // in elenco interessa prima l'ultima sessione fatta.
      .then((all) => setAttempts(all.slice().reverse()))
      .catch((err) => setError(err instanceof ApiError ? err.message : "Impossibile caricare lo storico."));
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <div style={{ position: "sticky", top: 0, zIndex: 5, background: headerGradient, backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,.18)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", gap: 14 }}>
          <button onClick={() => navigate("/")} style={{ background: "none", border: "none", padding: 0, color: "#e4e7ee", fontSize: 13.5, font: "inherit" }}>
            ← Home
          </button>
          <div style={{ flex: 1 }} />
          {attempts && (
            <span style={{ fontSize: 13.5, color: "#e4e7ee" }}>
              {attempts.length} {attempts.length === 1 ? "session" : "sessions"}
            </span>
          )}
          <OptionsMenu variant="onDark" />
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 80px" }}>
        <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: 30, margin: "0 0 6px" }}>
          Session history
        </h2>
        <p style={{ margin: "0 0 26px", color: t.mu, fontSize: 14 }}>
          Every session you have submitted. Open one to go through its questions and answers again.
        </p>

        {error && <p style={{ margin: "0 0 16px", color: t.er, fontSize: 14 }}>{error}</p>}

        {attempts === null && !error && <p style={{ color: t.mu, fontSize: 14 }}>Loading...</p>}

        {attempts?.length === 0 && (
          <div style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: 40, textAlign: "center" }}>
            <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>No sessions yet</div>
            <div style={{ fontSize: 14, color: t.mu }}>Finish and submit a Practice or Simulation session to see it here.</div>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {attempts?.map((a) => {
            const passed = a.percentage >= PASS_MARK_PERCENT;
            return (
              <button
                key={a.id}
                onClick={() => navigate(`/history/${a.id}`)}
                style={{
                  display: "flex", alignItems: "center", gap: 16, textAlign: "left", width: "100%",
                  background: t.card, border: `1px solid ${t.bd}`, borderRadius: 12, padding: "16px 18px",
                  color: "inherit", font: "inherit", boxShadow: `0 1px 2px ${t.sh}`,
                }}
              >
                <span style={{
                  minWidth: 74, textAlign: "center", padding: "8px 6px", borderRadius: 9,
                  background: passed ? t.okbg : t.erbg, color: passed ? t.ok : t.er,
                  fontSize: 18, fontWeight: 600, fontVariantNumeric: "tabular-nums",
                }}>
                  {a.percentage.toFixed(1)}%
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: "block", fontSize: 15, fontWeight: 600, marginBottom: 4 }}>
                    {formatDateTime(a.endTime)}
                  </span>
                  <span style={{ display: "block", fontSize: 13, color: t.mu }}>
                    {a.mode === "practice" ? "Practice" : "Simulation"} · {a.questionCount} questions ·{" "}
                    {formatDuration(a.startTime, a.endTime)}
                  </span>
                </span>
                <span aria-hidden style={{ color: t.fa, fontSize: 18 }}>›</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
