import { request } from "./client";
import type { AnswerSubmissionDto, AnswerCheckResultDto, ExamScoreDto } from "../types/answer";

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
