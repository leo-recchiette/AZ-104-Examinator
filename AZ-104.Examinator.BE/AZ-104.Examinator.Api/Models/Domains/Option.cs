namespace Examinator.Api.Models.Domains;

/// <summary>
/// Una scelta del pool question-scoped: le opzioni A..H di una MultipleChoice
/// (Letter valorizzata), o il pool trascinabile di un DragAndDrop
/// 'ordered_answer' (Letter null, non ha lettere).
/// </summary>
public sealed class Option
{
    public required int QuestionId { get; init; }
    public required int Ord { get; init; }
    public string? Letter { get; init; }
    public required string Text { get; init; }
    public required bool IsCorrect { get; init; }
}
