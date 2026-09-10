namespace Examinator.Api.Models.Contracts;

/// <summary>Corpo di GET /api/results/getAttempt/{id}: l'intestazione del tentativo e tutte le sue domande, nell'ordine in cui erano state proposte.</summary>
public sealed record ExamAttemptDetailDto(ExamAttemptDto Attempt, IReadOnlyList<AttemptAnswerDto> Answers);
