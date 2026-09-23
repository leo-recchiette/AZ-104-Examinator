import type { QuestionDto } from "./question";

export interface AnswerSubmissionDto {
  questionNumber: number;
  userAnswers: string[];
}

export interface AnswerRowDto {
  prompt: string | null;
  answer: string;
}

export interface QuestionAnswerDto {
  number: number;
  explanation: string;
  answerText: string;
  note: string | null;
  correctLetters: string[];
  answerRows: AnswerRowDto[];
  /** Solo dopo la rivelazione. */
  images: string[];
}

export interface AnswerCheckResultDto {
  questionNumber: number;
  userAnswers: string[];
  correctAnswer: QuestionAnswerDto | null;
}

export interface ExamScoreDto {
  percentage: number;
}

export interface SaveExamAttemptDto {
  mode: "practice" | "exam";
  questionCount: number;
  percentage: number;
  /** ISO 8601. */
  startTime: string;
  /** ISO 8601. */
  endTime: string;
  /** Tutte le domande, in ordine, anche quelle lasciate in bianco. */
  answers: AnswerSubmissionDto[];
}

export interface ExamAttemptDto {
  id: number;
  mode: "practice" | "exam";
  questionCount: number;
  percentage: number;
  startTime: string;
  endTime: string;
  completedAt: string;
}

/** question e correctAnswer sono null se la domanda non esiste piu' dopo un reimport. */
export interface AttemptAnswerDto {
  questionNumber: number;
  userAnswers: string[];
  question: QuestionDto | null;
  correctAnswer: QuestionAnswerDto | null;
}

export interface ExamAttemptDetailDto {
  attempt: ExamAttemptDto;
  answers: AttemptAnswerDto[];
}
