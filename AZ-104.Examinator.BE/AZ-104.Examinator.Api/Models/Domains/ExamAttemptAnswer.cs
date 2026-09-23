namespace Examinator.Api.Models.Domains;

/// <summary>QuestionNumber non e' una FK, per sopravvivere al TRUNCATE dell'importer: puo' non esistere piu'.</summary>
public sealed record ExamAttemptAnswer
{
    public required int QuestionNumber { get; init; }

    /// <summary>Vuota se la domanda e' rimasta in bianco.</summary>
    public required IReadOnlyList<string> UserAnswers { get; init; }
}
