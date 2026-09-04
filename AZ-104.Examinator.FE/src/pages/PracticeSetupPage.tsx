import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { useSession } from "../session/SessionContext";
import { getExam } from "../api/questions";
import { ApiError } from "../api/client";
import { FloatingThemeToggle } from "../components/FloatingThemeToggle";

const COUNT_OPTIONS = [5, 10, 20, 30, 55];
const MINUTE_OPTIONS = [15, 30, 45, 60, 90, 120];

export function PracticeSetupPage() {
  const navigate = useNavigate();
  const { tokens: t } = useTheme();
  const { dispatch } = useSession();

  const [count, setCount] = useState(20);
  const [timed, setTimed] = useState(false);
  const [minutes, setMinutes] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleStart() {
    setError(null);
    setLoading(true);
    try {
      const questions = await getExam(count);
      dispatch({ type: "START_SESSION", mode: "practice", questions, timeLimitSeconds: timed ? minutes * 60 : null });
      navigate("/session");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Impossibile caricare le domande.");
      setLoading(false);
    }
  }

  const startLabel = loading
    ? "Loading..."
    : `Start ${count} questions${timed ? ` · ${minutes} min` : " · untimed"}`;

  return (
    <>
      <FloatingThemeToggle />
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px" }}>
        <div style={{ width: "100%", maxWidth: 620, background: t.card, border: `1px solid ${t.bd}`, borderRadius: 16, padding: "34px 32px", boxShadow: `0 2px 10px ${t.sh}` }}>
          <button onClick={() => navigate("/")} style={{ background: "none", border: "none", padding: 0, color: t.mu, fontSize: 13, marginBottom: 18, font: "inherit" }}>
            ← Back
          </button>
          <h2 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: 28, margin: "0 0 6px" }}>
            Practice session
          </h2>
          <p style={{ margin: "0 0 28px", color: t.mu, fontSize: 14.5 }}>
            Nothing is scored until you submit. Solutions stay available throughout.
          </p>

          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>How many questions?</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {COUNT_OPTIONS.map((n) => {
              const on = count === n;
              return (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  style={{
                    padding: "9px 16px", borderRadius: 9, fontSize: 14, fontWeight: 500, font: "inherit",
                    border: `1px solid ${on ? t.ac : t.bd3}`, background: on ? t.acs : t.card, color: on ? t.ac : t.tx2,
                  }}
                >
                  {n} questions
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "16px 0", borderTop: `1px solid ${t.bd2}` }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Time limit</div>
              <div style={{ fontSize: 12.5, color: t.fa, marginTop: 2 }}>Maximum 120 minutes</div>
            </div>
            <button
              onClick={() => setTimed((p) => !p)}
              style={{
                width: 52, height: 30, borderRadius: 16, border: `1px solid ${timed ? t.ac : t.bd3}`,
                background: timed ? t.ac : t.track, position: "relative", padding: 0, transition: "background .18s",
              }}
            >
              <span style={{ position: "absolute", top: 3, left: timed ? 26 : 3, width: 22, height: 22, borderRadius: "50%", background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,.25)", transition: "left .18s" }} />
            </button>
          </div>

          {timed && (
            <div style={{ padding: "4px 0 20px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {MINUTE_OPTIONS.map((m) => {
                  const on = minutes === m;
                  return (
                    <button
                      key={m}
                      onClick={() => setMinutes(m)}
                      style={{
                        padding: "8px 14px", borderRadius: 9, fontSize: 13.5, fontWeight: 500, font: "inherit",
                        border: `1px solid ${on ? t.ac : t.bd3}`, background: on ? t.acs : t.card, color: on ? t.ac : t.tx2,
                      }}
                    >
                      {m} min
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {error && <p style={{ margin: "0 0 12px", color: t.er, fontSize: 14 }}>{error}</p>}

          <button
            onClick={handleStart}
            disabled={loading}
            style={{
              width: "100%", marginTop: 12, padding: 15, border: "none", borderRadius: 11,
              background: t.ac, color: "#fff", fontSize: 15.5, fontWeight: 600, font: "inherit",
              opacity: loading ? 0.8 : 1,
            }}
          >
            {startLabel}
          </button>
        </div>
      </div>
    </>
  );
}
