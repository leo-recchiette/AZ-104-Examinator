import { request } from "./client";
import type {
  AnswerSubmissionDto,
  AnswerCheckResultDto,
  ExamScoreDto,
  ExamAttemptDto,
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
  return request<ExamAttemptDto>("/api/results/attempts", {
    method: "POST",
    body: JSON.stringify(attempt),
  });
}

export function getAttempts(): Promise<ExamAttemptDto[]> {
  return request<ExamAttemptDto[]>("/api/results/attempts");
}
