import { request } from "./client";
import type { QuestionDto, QuestionType } from "../types/question";

export function getExam(count: number, type?: QuestionType): Promise<QuestionDto[]> {
  const params = new URLSearchParams({ count: String(count) });
  if (type) params.set("type", type);
  return request<QuestionDto[]>(`/api/questions/getExam?${params}`);
}
