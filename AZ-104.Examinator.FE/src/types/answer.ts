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
}

export interface AnswerCheckResultDto {
  questionNumber: number;
  userAnswers: string[];
  correctAnswer: QuestionAnswerDto | null;
}

export interface ExamScoreDto {
  percentage: number;
}
