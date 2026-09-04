import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";
import { initialSessionState, sessionReducer, type SessionAction, type SessionState } from "./sessionReducer";

interface SessionContextValue {
  state: SessionState;
  dispatch: Dispatch<SessionAction>;
}

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(sessionReducer, initialSessionState);
  return <SessionContext.Provider value={{ state, dispatch }}>{children}</SessionContext.Provider>;
}

export function useSession(): SessionContextValue {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession deve essere usato dentro un SessionProvider");
  return ctx;
}
