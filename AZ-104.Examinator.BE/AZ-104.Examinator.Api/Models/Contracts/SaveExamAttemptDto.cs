namespace Examinator.Api.Models.Contracts;

/// <summary>
/// Answers e' facoltativo: un client vecchio registra comunque il tentativo, senza dettaglio,
/// invece di perderlo.
/// </summary>
public sealed record SaveExamAttemptDto(
    string Mode,
    int QuestionCount,
    double Percentage,
    DateTimeOffset StartTime,
    DateTimeOffset EndTime,
    IReadOnlyList<AnswerSubmissionDto>? Answers);
