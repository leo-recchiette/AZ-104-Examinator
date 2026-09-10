import type { QuestionDto } from "../types/question";
import type { AnswerCheckResultDto, ExamScoreDto } from "../types/answer";

export type SessionMode = "practice" | "exam";

export interface SessionState {
  mode: SessionMode | null;
  questions: QuestionDto[];
  currentIndex: number;
  /** questionNumber -> risposta data dall'utente. */
  answers: Record<number, string[]>;
  /** Cache della "verifica"/reveal per domanda: se una entry esiste, la domanda e' stata rivelata. */
  checkResults: Record<number, AnswerCheckResultDto>;
  /** Domande marcate per la revisione (indice nell'array questions, non questionNumber). */
  flags: Record<number, boolean>;
  /** null = nessun limite, quindi nessuna barra di progresso. */
  timeLimitSeconds: number | null;
  /** Timestamp fisso (Date.now()), scritto una sola volta all'avvio. */
  startedAt: number | null;
  status: "idle" | "in-progress" | "finished";
  score: ExamScoreDto | null;
  /** Tempo trascorso al momento dell'invio, congelato (non ricalcolato da Date.now() sulla pagina risultati). */
  timeUsedSeconds: number | null;
  /**
   * Come e' andata la registrazione nello storico, quando c'e' qualcosa da dire: "discarded" per
   * una sessione senza nemmeno una risposta (scartata di proposito, non registrata), "failed" per
   * un salvataggio andato storto. null quando e' filato tutto liscio. Il salvataggio e'
   * best-effort e non blocca i risultati, ma restare senza saperlo e' peggio: la pagina risultati
   * lo dice.
   */
  historyOutcome: "discarded" | "failed" | null;
}

export type SessionAction =
  | { type: "START_SESSION"; mode: SessionMode; questions: QuestionDto[]; timeLimitSeconds: number | null }
  | { type: "SET_ANSWER"; questionNumber: number; answer: string[] }
  | { type: "GO_NEXT" }
  | { type: "GO_PREVIOUS" }
  | { type: "GO_TO"; index: number }
  | { type: "SET_CHECK_RESULT"; questionNumber: number; result: AnswerCheckResultDto }
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
        startedAt: Date.now(),
        status: "in-progress",
      };

    case "SET_ANSWER": {
      // Cambiare risposta invalida un'eventuale rivelazione gia' mostrata: la
      // ricolorazione non deve sopravvivere a un cambio di risposta.
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

    // Salto diretto: lo usa l'elenco delle sotto-domande di uno scenario, che
    // deve poter raggiungere un fratello senza passare per Next/Previous.
    case "GO_TO":
      return { ...state, currentIndex: Math.min(Math.max(action.index, 0), state.questions.length - 1) };

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

    // "failed" arriva dopo che SessionPage e' gia' smontata (la POST e' fire-and-forget): il
    // dispatch e' valido lo stesso, il context vive sopra le rotte.
    case "SET_HISTORY_OUTCOME":
      return { ...state, historyOutcome: action.outcome };

    case "RESET":
      return initialSessionState;

    default:
      return state;
  }
}
