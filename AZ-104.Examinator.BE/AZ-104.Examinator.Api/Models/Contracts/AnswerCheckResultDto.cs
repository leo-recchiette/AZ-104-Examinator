namespace Examinator.Api.Models.Contracts;

/// <summary>CorrectAnswer e' null se QuestionNumber non esiste: non fa fallire l'intera batch.</summary>
public sealed record AnswerCheckResultDto(int QuestionNumber, IReadOnlyList<string> UserAnswers, QuestionAnswerDto? CorrectAnswer);
