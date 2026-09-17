import { createContext, useContext, useEffect, useRef, useState, useReducer, type Dispatch, type ReactNode } from "react";
import { initialSessionState, sessionReducer, type SessionAction, type SessionState } from "./sessionReducer";
import { deleteActiveSession, getActiveSession, saveActiveSession } from "../api/sessions";
import type { ActiveSessionDto, SaveActiveSessionDto } from "../types/session";

interface SessionContextValue {
  state: SessionState;
  dispatch: Dispatch<SessionAction>;
  /** True finche' non si sa se c'e' una sessione da riprendere: le rotte protette devono aspettare. */
  restoring: boolean;
}

const SessionContext = createContext<SessionContextValue | null>(null);

/** Attesa prima di salvare: rispondere a una hotspot riga per riga non deve produrre una PUT per riga. */
const SAVE_DEBOUNCE_MS = 600;

/**
 * Stesso criterio con cui lo storico scarta le sessioni mai giocate: basta una risposta non vuota,
 * anche una sola riga di una hotspot. Un set di domande su cui non si e' ancora toccato nulla non
 * e' qualcosa da riprendere.
 */
function hasAnyAnswer(state: SessionState): boolean {
  return Object.values(state.answers).some((answer) => answer.some((value) => value.trim() !== ""));
}

function toSaveDto(state: SessionState): SaveActiveSessionDto | null {
  if (state.mode === null || state.startedAt === null || state.questions.length === 0) return null;
  return {
    mode: state.mode,
    questionNumbers: state.questions.map((q) => q.number),
    answers: state.answers,
    flaggedIndexes: Object.entries(state.flags)
      .filter(([, on]) => on)
      .map(([index]) => Number(index)),
    currentIndex: state.currentIndex,
    timeLimitSeconds: state.timeLimitSeconds,
    autoReveal: state.autoReveal,
    startedAt: new Date(state.startedAt).toISOString(),
    savedAt: new Date().toISOString(),
  };
}

function fromDto(dto: ActiveSessionDto): SessionState {
  const flags: Record<number, boolean> = {};
  for (const index of dto.flaggedIndexes) flags[index] = true;

  // startedAt e savedAt vengono entrambi dall'orologio di questo client, quindi la loro differenza
  // e' il tempo effettivamente giocato fino all'ultimo salvataggio. Riancorandolo a "adesso" il
  // cronometro riparte da li' invece di contare anche le ore in cui l'app era chiusa: senza questo,
  // riaprire il giorno dopo una sessione a tempo la troverebbe scaduta e la invierebbe da sola.
  const playedMs = Math.max(0, new Date(dto.savedAt).getTime() - new Date(dto.startedAt).getTime());

  return {
    ...initialSessionState,
    mode: dto.mode,
    questions: dto.questions,
    currentIndex: Math.min(dto.currentIndex, Math.max(0, dto.questions.length - 1)),
    answers: dto.answers,
    flags,
    timeLimitSeconds: dto.timeLimitSeconds,
    autoReveal: dto.autoReveal,
    startedAt: Date.now() - playedMs,
    status: "in-progress",
  };
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(sessionReducer, initialSessionState);
  const [restoring, setRestoring] = useState(true);
  // Lo stato piu' recente, per poterlo salvare da un listener senza riagganciarlo a ogni modifica.
  const stateRef = useRef(state);
  stateRef.current = state;
  // Una sessione ripristinata non va risalvata subito con il suo stesso contenuto, e soprattutto
  // non deve far scattare la cancellazione prima ancora di essere ripresa.
  const hadSessionRef = useRef(false);
  /** Se una riga e' gia' finita sul server: serve a farla cancellare se la sessione viene svuotata. */
  const savedOnceRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    getActiveSession()
      .then((dto) => {
        if (cancelled || !dto || dto.questions.length === 0) return;
        hadSessionRef.current = true;
        savedOnceRef.current = true;
        dispatch({ type: "RESTORE_SESSION", state: fromDto(dto) });
      })
      // Best-effort come il resto della persistenza: se l'API non risponde si riparte dalla home,
      // senza sessione, invece di bloccare l'app su una schermata di errore.
      .catch((err) => console.error("Impossibile recuperare la sessione in corso:", err))
      .finally(() => {
        if (!cancelled) setRestoring(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Salvataggio: ogni risposta, spostamento fra domande o flag riscrive la riga. Il debounce accorpa
  // le raffiche (le righe di una hotspot, i tasti di navigazione premuti in sequenza).
  useEffect(() => {
    if (restoring || state.status !== "in-progress") return;
    hadSessionRef.current = true;

    // Finche' non e' stata data nessuna risposta non c'e' niente da riprendere e non si salva nulla.
    // L'unica eccezione e' una sessione gia' salvata e poi svuotata: quella PUT parte lo stesso,
    // perche' e' cio' che dice al server di cancellare la riga rimasta.
    if (!hasAnyAnswer(state) && !savedOnceRef.current) return;

    const dto = toSaveDto(state);
    if (!dto) return;
    const timer = setTimeout(() => {
      savedOnceRef.current = hasAnyAnswer(state);
      saveActiveSession(dto).catch((err) => console.error("Impossibile salvare la sessione in corso:", err));
    }, SAVE_DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [state, restoring]);

  // Il caso che ha motivato tutto questo: coperchio abbassato, scheda chiusa, app in background.
  // Qui il debounce non puo' aspettare, e keepalive lascia partire la richiesta anche mentre la
  // pagina se ne va.
  useEffect(() => {
    if (state.status !== "in-progress") return;

    function flush() {
      if (!hasAnyAnswer(stateRef.current) && !savedOnceRef.current) return;
      const dto = toSaveDto(stateRef.current);
      if (!dto) return;
      saveActiveSession(dto, true).catch(() => {
        // In chiusura di pagina non c'e' piu' nessuno a cui riportare l'errore.
      });
    }
    function handleVisibility() {
      if (document.visibilityState === "hidden") flush();
    }
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pagehide", flush);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pagehide", flush);
    };
  }, [state.status]);

  // Sessione inviata (status "finished") o abbandonata (RESET, che riporta a "idle"): la riga non
  // serve piu' e va tolta, altrimenti la home continuerebbe a proporre di riprenderla.
  useEffect(() => {
    if (restoring || !hadSessionRef.current || state.status === "in-progress") return;
    hadSessionRef.current = false;
    savedOnceRef.current = false;
    deleteActiveSession().catch((err) => console.error("Impossibile cancellare la sessione in corso:", err));
  }, [state.status, restoring]);

  return <SessionContext.Provider value={{ state, dispatch, restoring }}>{children}</SessionContext.Provider>;
}

export function useSession(): SessionContextValue {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession deve essere usato dentro un SessionProvider");
  return ctx;
}
