namespace Examinator.Api.Models.Contracts;

/// <summary>Un tentativo dello storico: alimenta il grafico "Your progress" della mode-select.</summary>
public sealed record ExamAttemptDto(
    int Id,
    string Mode,
    int QuestionCount,
    double Percentage,
    DateTimeOffset StartTime,
    DateTimeOffset EndTime,
    DateTimeOffset CompletedAt);
