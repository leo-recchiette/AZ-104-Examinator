import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { useSession } from "../session/SessionContext";
import { getExam } from "../api/questions";
import { ApiError } from "../api/client";
import { FloatingThemeToggle } from "../components/FloatingThemeToggle";
import { EXAM_QUESTION_COUNT, EXAM_TIME_LIMIT_MINUTES, EXAM_TIME_LIMIT_SECONDS, PASS_MARK_PERCENT } from "../constants";

export function ModeSelectPage() {
  const navigate = useNavigate();
  const { tokens: t } = useTheme();
  const { dispatch } = useSession();
  const [startingSimulation, setStartingSimulation] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function goSimulation() {
    setError(null);
    setStartingSimulation(true);
    try {
      const questions = await getExam(EXAM_QUESTION_COUNT);
      dispatch({ type: "START_SESSION", mode: "exam", questions, timeLimitSeconds: EXAM_TIME_LIMIT_SECONDS });
      navigate("/session");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Impossibile caricare le domande.");
      setStartingSimulation(false);
    }
  }

  return (
    <>
      <FloatingThemeToggle />
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
        <div style={{ width: "100%", maxWidth: 760 }}>
          <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: t.fa, fontWeight: 600 }}>
            Microsoft Certified: Azure Administrator Associate
          </div>
          <h1 style={{ fontFamily: "Roboto, 'IBM Plex Sans', sans-serif", fontWeight: 600, fontSize: 44, lineHeight: 1.1, margin: "14px 0 10px", letterSpacing: "-.01em" }}>
            AZ-104 Examinator
          </h1>
          <p style={{ margin: "0 0 36px", color: t.mu, fontSize: 16, lineHeight: 1.55, maxWidth: "52ch" }}>
            Question bank of 606 items. Choose how you want to work: practise at your own pace with solutions
            available, or sit a timed simulation under exam conditions.
          </p>

          {error && (
            <p style={{ margin: "0 0 20px", color: t.er, fontSize: 14 }}>{error}</p>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            <button
              onClick={() => navigate("/practice/setup")}
              style={{
                textAlign: "left", background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14,
                padding: "26px 24px 24px", boxShadow: `0 1px 2px ${t.sh}`, color: "inherit",
                transition: "box-shadow .18s, border-color .18s, transform .18s", font: "inherit",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, background: t.acs, color: t.ac, display: "grid", placeItems: "center", fontSize: 15, fontWeight: 700 }}>
                  P
                </span>
                <span style={{ fontSize: 19, fontWeight: 600 }}>Practice</span>
              </div>
              <p style={{ margin: 0, color: t.mu, fontSize: 14, lineHeight: 1.5 }}>
                Pick how many questions you want and whether to run a clock. Reveal the correct answer and the
                explanation on any question.
              </p>
            </button>

            <button
              onClick={goSimulation}
              disabled={startingSimulation}
              style={{
                textAlign: "left", background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14,
                padding: "26px 24px 24px", boxShadow: `0 1px 2px ${t.sh}`, color: "inherit",
                transition: "box-shadow .18s, border-color .18s, transform .18s", font: "inherit",
                opacity: startingSimulation ? 0.7 : 1,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <span style={{ width: 30, height: 30, borderRadius: 8, background: t.tx, color: t.card, display: "grid", placeItems: "center", fontSize: 15, fontWeight: 700 }}>
                  S
                </span>
                <span style={{ fontSize: 19, fontWeight: 600 }}>Simulation</span>
              </div>
              <p style={{ margin: 0, color: t.mu, fontSize: 14, lineHeight: 1.5 }}>
                {startingSimulation
                  ? "Loading questions..."
                  : `${EXAM_QUESTION_COUNT} questions drawn at random from the pool, ${EXAM_TIME_LIMIT_MINUTES} minutes on the clock, no solutions until you submit.`}
              </p>
            </button>
          </div>

          <p style={{ margin: "28px 0 0", fontSize: 12.5, color: t.fa2 }}>
            Passing score {PASS_MARK_PERCENT}%. One point per correct component, no deductions for wrong answers.
          </p>
        </div>
      </div>
    </>
  );
}
