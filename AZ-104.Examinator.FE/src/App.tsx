import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSession } from "./session/SessionContext";
import { useTheme } from "./theme/ThemeContext";
import { ModeSelectPage } from "./pages/ModeSelectPage";
import { PracticeSetupPage } from "./pages/PracticeSetupPage";
import { SessionPage } from "./pages/SessionPage";
import { ResultsPage } from "./pages/ResultsPage";
import { HistoryPage } from "./pages/HistoryPage";
import { AttemptDetailPage } from "./pages/AttemptDetailPage";

/**
 * Impedisce di arrivare a /session o /results senza una sessione avviata. Finche' il recupero di
 * quella salvata sul server e' in corso non decide nulla: rimbalzare subito sulla home vorrebbe
 * dire buttare fuori chi ha appena ricaricato la pagina proprio mentre la sua sessione sta tornando.
 */
function RequireSession({ children }: { children: ReactNode }) {
  const { state, restoring } = useSession();
  if (restoring) return <RestoringScreen />;
  if (state.questions.length === 0) return <Navigate to="/" replace />;
  return <>{children}</>;
}

function RestoringScreen() {
  const { tokens: t } = useTheme();
  return (
    <div style={{ flex: 1, display: "grid", placeItems: "center", padding: 48, color: t.mu, fontSize: 14 }}>
      Restoring your session...
    </div>
  );
}

export function App() {
  const { tokens: t } = useTheme();
  return (
    <div style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", background: t.bg, color: t.tx, transition: "background .2s, color .2s" }}>
      <Routes>
        <Route path="/" element={<ModeSelectPage />} />
        <Route path="/practice/setup" element={<PracticeSetupPage />} />
        {/* Fuori da RequireSession: lo storico si legge dal database, non dalla sessione in corso. */}
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/:id" element={<AttemptDetailPage />} />
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
