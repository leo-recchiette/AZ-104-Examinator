import type { QuestionDto } from "../types/question";
import type { AnswerCheckResultDto, ExamScoreDto } from "../types/answer";

export type SessionMode = "practice" | "exam";

export interface SessionState {
  mode: SessionMode | null;
  questions: QuestionDto[];
  currentIndex: number;
  /** Per questionNumber. */
  answers: Record<number, string[]>;
  /** Se una entry esiste, la domanda e' stata rivelata. */
  checkResults: Record<number, AnswerCheckResultDto>;
  /** Per indice in questions, non per questionNumber. */
  flags: Record<number, boolean>;
  timeLimitSeconds: number | null;
  /** Sempre false in Simulation. */
  autoReveal: boolean;
  startedAt: number | null;
  status: "idle" | "in-progress" | "finished";
  score: ExamScoreDto | null;
  /** Congelato all'invio: la pagina risultati non lo ricalcola. */
  timeUsedSeconds: number | null;
  /** Esito del salvataggio nello storico da mostrare nei risultati; null se e' andato bene. */
  historyOutcome: "discarded" | "failed" | null;
}

export type SessionAction =
  | { type: "START_SESSION"; mode: SessionMode; questions: QuestionDto[]; timeLimitSeconds: number | null; autoReveal?: boolean }
  | { type: "RESTORE_SESSION"; state: SessionState }
  | { type: "SET_ANSWER"; questionNumber: number; answer: string[] }
  | { type: "GO_NEXT" }
  | { type: "GO_PREVIOUS" }
  | { type: "GO_TO"; index: number }
  | { type: "SET_CHECK_RESULT"; questionNumber: number; result: AnswerCheckResultDto }
  | { type: "SET_AUTO_REVEAL"; autoReveal: boolean }
  | { type: "TOGGLE_FLAG"; index: number }
  | { type: "FINISH_SESSION"; score: ExamScoreDto; timeUsedSeconds: number }
  | { type: "SET_HISTORY_OUTCOME"; outcome: "discarded" | "failed" }
  | { type: "RESET" };

export const initialSessionState: SessionState = {
  mode: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  checkResults: {},
  flags: {},
  timeLimitSeconds: null,
  autoReveal: false,
  startedAt: null,
  status: "idle",
  score: null,
  timeUsedSeconds: null,
  historyOutcome: null,
};

export function sessionReducer(state: SessionState, action: SessionAction): SessionState {
  switch (action.type) {
    case "START_SESSION":
      return {
        ...initialSessionState,
        mode: action.mode,
        questions: action.questions,
        timeLimitSeconds: action.timeLimitSeconds,
        autoReveal: action.mode === "practice" && !!action.autoReveal,
        startedAt: Date.now(),
        status: "in-progress",
      };

    case "RESTORE_SESSION":
      return action.state;

    case "SET_ANSWER": {
      // Una rivelazione non sopravvive a un cambio di risposta.
      const checkResults = { ...state.checkResults };
      delete checkResults[action.questionNumber];
      return {
        ...state,
        answers: { ...state.answers, [action.questionNumber]: action.answer },
        checkResults,
      };
    }

    case "GO_NEXT":
      return { ...state, currentIndex: Math.min(state.currentIndex + 1, state.questions.length - 1) };

    case "GO_PREVIOUS":
      return { ...state, currentIndex: Math.max(state.currentIndex - 1, 0) };

    case "GO_TO":
      return { ...state, currentIndex: Math.min(Math.max(action.index, 0), state.questions.length - 1) };

    case "SET_AUTO_REVEAL":
      return { ...state, autoReveal: state.mode === "practice" && action.autoReveal };

    case "SET_CHECK_RESULT":
      return {
        ...state,
        checkResults: { ...state.checkResults, [action.questionNumber]: action.result },
      };

    case "TOGGLE_FLAG":
      return {
        ...state,
        flags: { ...state.flags, [action.index]: !state.flags[action.index] },
      };

    case "FINISH_SESSION":
      return { ...state, status: "finished", score: action.score, timeUsedSeconds: action.timeUsedSeconds };

    // Puo' arrivare a SessionPage gia' smontata: il context vive sopra le rotte.
    case "SET_HISTORY_OUTCOME":
      return { ...state, historyOutcome: action.outcome };

    case "RESET":
      return initialSessionState;

    default:
      return state;
  }
}
