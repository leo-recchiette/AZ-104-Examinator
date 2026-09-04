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
