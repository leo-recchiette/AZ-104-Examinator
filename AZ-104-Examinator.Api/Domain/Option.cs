namespace Examinator.Api.Domain;

/// <summary>Una scelta del pool di una MultipleChoice. Gli altri tipi non ne hanno.</summary>
public sealed class Option
{
    public required int QuestionId { get; init; }
    public required int Ord { get; init; }
    public required string Letter { get; init; }
    public required string Text { get; init; }
    public required bool IsCorrect { get; init; }
}
