namespace Examinator.Api.Models.Domains;

/// <summary>Letter e' null per il pool di un 'ordered_answer'.</summary>
public sealed class Option
{
    public required int QuestionId { get; init; }
    public required int Ord { get; init; }
    public string? Letter { get; init; }
    public required string Text { get; init; }
    public required bool IsCorrect { get; init; }
}
