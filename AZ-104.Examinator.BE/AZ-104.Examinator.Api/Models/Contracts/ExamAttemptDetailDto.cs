namespace Examinator.Api.Models.Contracts;

public sealed record ExamAttemptDetailDto(ExamAttemptDto Attempt, IReadOnlyList<AttemptAnswerDto> Answers);
