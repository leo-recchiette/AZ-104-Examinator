namespace Examinator.Api.Models.Contracts;

/// <summary>Corpo di POST /api/results/attempts: la sessione appena conclusa lato client, da registrare nello storico.</summary>
public sealed record SaveExamAttemptDto(
    string Mode,
    int QuestionCount,
    double Percentage,
    DateTimeOffset StartTime,
    DateTimeOffset EndTime);
