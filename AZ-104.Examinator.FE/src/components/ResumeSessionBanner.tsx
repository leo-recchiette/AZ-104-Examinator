import type { CSSProperties } from "react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme/ThemeContext";
import { useSession } from "../session/SessionContext";
import { sessionUnits, unitsAnswered } from "../utils/groups";

interface ResumeSessionBannerProps {
  style?: CSSProperties;
}

/** Va su ogni pagina che puo' avviare una sessione: START_SESSION sovrascrive quella in corso. */
export function ResumeSessionBanner({ style }: ResumeSessionBannerProps) {
  const navigate = useNavigate();
  const { tokens: t } = useTheme();
  const { state, dispatch, restoring } = useSession();

  const resumable = useMemo(() => {
    if (restoring || state.status !== "in-progress" || state.questions.length === 0) return null;
    const units = sessionUnits(state.questions);
    const answered = unitsAnswered(state.questions, units, state.answers).filter(Boolean).length;
    return { total: units.members.length, answered, mode: state.mode };
  }, [restoring, state.status, state.questions, state.answers, state.mode]);

  if (!resumable) return null;

  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 18,
      background: t.acs, border: `1px solid ${t.ac}`, borderRadius: 14, padding: "16px 20px",
      ...style,
    }}>
      <div style={{ flex: "1 1 260px", minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: t.ac, marginBottom: 3 }}>
          You have a session in progress
        </div>
        <div style={{ fontSize: 13.5, color: t.tx2 }}>
          {resumable.mode === "practice" ? "Practice" : "Simulation"} · {resumable.answered} of{" "}
          {resumable.total} answered · the clock stopped while you were away
        </div>
      </div>
      <button
        onClick={() => navigate("/session")}
        style={{
          padding: "11px 20px", borderRadius: 10, border: "none", background: t.ac, color: "#fff",
          font: "inherit", fontSize: 14.5, fontWeight: 600,
        }}
      >
        Resume
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        style={{
          padding: "11px 16px", borderRadius: 10, border: `1px solid ${t.bd3}`, background: t.card,
          color: t.tx2, font: "inherit", fontSize: 14.5, fontWeight: 600,
        }}
      >
        Discard
      </button>
    </div>
  );
}
