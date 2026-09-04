import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { useSession } from "../session/SessionContext";
import { getExam } from "../api/questions";
import { ApiError } from "../api/client";
import { FloatingThemeToggle } from "../components/FloatingThemeToggle";
import { EXAM_QUESTION_COUNT, EXAM_TIME_LIMIT_MINUTES, EXAM_TIME_LIMIT_SECONDS, PASS_MARK_PERCENT } from "../constants";
import { getHistory } from "../utils/history";
import { MODE_BG_GRADIENT } from "../theme/tokens";

export function ModeSelectPage() {
  const navigate = useNavigate();
  const { theme, tokens: t } = useTheme();
  const { dispatch } = useSession();
  const [startingSimulation, setStartingSimulation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const history = useMemo(() => getHistory(), []);

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

  const modeBgGrad = theme === "dark" ? MODE_BG_GRADIENT.dark : MODE_BG_GRADIENT.light;

  const progress = useMemo(() => {
    if (history.length === 0) return null;
    const scores = history.map((h) => h.pct);
    const worst = Math.min(...scores);
    const best = Math.max(...scores);
    const gain = Math.round((scores[scores.length - 1] - scores[0]) * 10) / 10;
    const n = history.length;
    const px = (pct: number) => 40 + (pct / 100) * 580;
    const py = (i: number) => (n === 1 ? 85 : 160 - (i / (n - 1)) * 150);
    const points = history.map((h, i) => ({ x: px(h.pct), y: py(i) }));
    return {
      worst, best, gain,
      gainColor: gain > 0 ? t.ok : gain < 0 ? t.er : t.mu,
      points,
      polyline: points.map((p) => `${p.x},${p.y}`).join(" "),
    };
  }, [history, t.ok, t.er, t.mu]);

  return (
    <>
      <FloatingThemeToggle />
      <div style={{ flex: 1, position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px", background: `${modeBgGrad}, ${t.bg}` }}>
        <div style={{ position: "absolute", top: -180, left: -120, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,120,212,.32), transparent 70%)", filter: "blur(10px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -220, right: -160, width: 640, height: 640, borderRadius: "50%", background: "radial-gradient(circle, rgba(80,230,255,.18), transparent 70%)", filter: "blur(10px)", pointerEvents: "none" }} />
        <div style={{ width: "100%", maxWidth: 760, position: "relative" }}>
          <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: t.fa, fontWeight: 600 }}>
            Microsoft Certified: Azure Administrator Associate
          </div>
          <h1 style={{
            fontFamily: "Roboto, 'IBM Plex Sans', sans-serif", fontWeight: 700, fontSize: 46, lineHeight: 1.1,
            margin: "14px 0 10px", letterSpacing: "-.01em", background: "linear-gradient(90deg,#0078d4,#50e6ff)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}>
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
                <span style={{ width: 30, height: 30, borderRadius: 8, background: t.acs, color: t.ac, display: "grid", placeItems: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 4a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H7a1 1 0 0 0 0 2h12a1 1 0 1 1 0 2H6a2 2 0 0 1-2-2V4Zm2 0v13.09A2 2 0 0 1 7 17h12V4H6Z" />
                    <path d="M9 2h4v8l-2-1.4L9 10V2Z" />
                  </svg>
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
                <span style={{ width: 30, height: 30, borderRadius: 8, background: t.tx, color: t.card, display: "grid", placeItems: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                    <path d="M8.8 11.6 6 21l6-3 6 3-2.8-9.4 1.7-1.2-2.9.6-2 1.8-2-1.8-2.9-.6 1.7 1.2Z" />
                  </svg>
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

          {progress && (
            <div style={{ marginTop: 32, background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: "24px 26px", boxShadow: `0 1px 2px ${t.sh}` }}>
              <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600, color: t.fa, marginBottom: 16 }}>
                Your progress
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 22 }}>
                <div>
                  <div style={{ fontSize: 11.5, color: t.mu, marginBottom: 4 }}>Worst score</div>
                  <div style={{ fontSize: 24, fontWeight: 600, color: t.er }}>{progress.worst}%</div>
                </div>
                <div>
                  <div style={{ fontSize: 11.5, color: t.mu, marginBottom: 4 }}>Best score</div>
                  <div style={{ fontSize: 24, fontWeight: 600, color: t.ok }}>{progress.best}%</div>
                </div>
                <div>
                  <div style={{ fontSize: 11.5, color: t.mu, marginBottom: 4 }}>Gain</div>
                  <div style={{ fontSize: 24, fontWeight: 600, color: progress.gainColor }}>
                    {progress.gain > 0 ? "+" : ""}{progress.gain}%
                  </div>
                </div>
              </div>
              <svg width="100%" height="180" viewBox="0 0 640 180" preserveAspectRatio="none" style={{ display: "block", overflow: "visible" }}>
                <line x1={40} y1={10} x2={40} y2={160} stroke={t.bd2} strokeWidth={1} />
                <line x1={40} y1={160} x2={620} y2={160} stroke={t.bd2} strokeWidth={1} />
                <text x={0} y={164} fontSize={10} fill={t.fa}>Time</text>
                <text x={600} y={176} fontSize={10} fill={t.fa}>Score</text>
                <polyline points={progress.polyline} fill="none" stroke={t.ac} strokeWidth={2} />
                {progress.points.map((p, i) => (
                  <circle key={i} cx={p.x} cy={p.y} r={4} fill={t.ac} />
                ))}
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
