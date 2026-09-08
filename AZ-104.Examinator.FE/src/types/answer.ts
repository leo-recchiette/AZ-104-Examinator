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
  /** Screenshot con la risposta corretta gia' compilata, da mostrare solo dopo aver rivelato/inviato. */
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
  /**
   * L'intero set proposto, nell'ordine di presentazione e comprese le domande lasciate
   * in bianco (userAnswers vuoto): e' cio' che rende il tentativo riconsultabile.
   */
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

/**
 * Una domanda di un tentativo storico. question e correctAnswer sono null insieme
 * quando il numero non esiste piu' nel question bank (dataset reimportato dopo il
 * tentativo): resta comunque leggibile cosa era stato risposto.
 */
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
