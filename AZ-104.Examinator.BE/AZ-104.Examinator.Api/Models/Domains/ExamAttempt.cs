namespace Examinator.Api.Models.Domains;

public sealed record ExamAttempt
{
    public int Id { get; init; }

    /// <summary>"practice" | "exam".</summary>
    public required string Mode { get; init; }

    public required int QuestionCount { get; init; }
    public required double Percentage { get; init; }
    public required DateTimeOffset StartTime { get; init; }
    public required DateTimeOffset EndTime { get; init; }
    public DateTimeOffset CompletedAt { get; init; }
}
