import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSession } from "./session/SessionContext";
import { useTheme } from "./theme/ThemeContext";
import { ModeSelectPage } from "./pages/ModeSelectPage";
import { PracticeSetupPage } from "./pages/PracticeSetupPage";
import { SessionPage } from "./pages/SessionPage";
import { ResultsPage } from "./pages/ResultsPage";

/** Impedisce di arrivare a /session o /results senza una sessione avviata. */
function RequireSession({ children }: { children: ReactNode }) {
  const { state } = useSession();
  if (state.questions.length === 0) return <Navigate to="/" replace />;
  return <>{children}</>;
}

export function App() {
  const { tokens: t } = useTheme();
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: t.bg, color: t.tx, transition: "background .2s, color .2s" }}>
      <Routes>
        <Route path="/" element={<ModeSelectPage />} />
        <Route path="/practice/setup" element={<PracticeSetupPage />} />
        <Route
          path="/session"
          element={
            <RequireSession>
              <SessionPage />
            </RequireSession>
          }
        />
        <Route
          path="/results"
          element={
            <RequireSession>
              <ResultsPage />
            </RequireSession>
          }
        />
      </Routes>
    </div>
  );
}
