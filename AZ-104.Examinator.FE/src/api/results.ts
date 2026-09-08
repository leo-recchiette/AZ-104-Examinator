import { request } from "./client";
import type {
  AnswerSubmissionDto,
  AnswerCheckResultDto,
  ExamScoreDto,
  ExamAttemptDto,
  ExamAttemptDetailDto,
  SaveExamAttemptDto,
} from "../types/answer";

export function checkAnswers(submissions: AnswerSubmissionDto[]): Promise<AnswerCheckResultDto[]> {
  return request<AnswerCheckResultDto[]>("/api/results/checkAnswers", {
    method: "POST",
    body: JSON.stringify(submissions),
  });
}

export function getScore(submissions: AnswerSubmissionDto[]): Promise<ExamScoreDto> {
  return request<ExamScoreDto>("/api/results/getScore", {
    method: "POST",
    body: JSON.stringify(submissions),
  });
}

export function saveAttempt(attempt: SaveExamAttemptDto): Promise<ExamAttemptDto> {
  return request<ExamAttemptDto>("/api/results/saveAttempt", {
    method: "POST",
    body: JSON.stringify(attempt),
  });
}

export function getAllAttempts(): Promise<ExamAttemptDto[]> {
  return request<ExamAttemptDto[]>("/api/results/getAllAttempts");
}

/** Un tentativo dello storico con domande, risposte date e soluzioni: tutto quello che serve per rileggerlo. */
export function getAttempt(id: number): Promise<ExamAttemptDetailDto> {
  return request<ExamAttemptDetailDto>(`/api/results/getAttempt/${id}`);
}
