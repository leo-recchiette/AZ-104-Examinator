namespace Examinator.Api.Models.Domains;

/// <summary>Prompt e' null per le sequenze: la risposta e' l'ordine stesso.</summary>
public sealed class AnswerRow
{
    public int Id { get; init; }
    public required int QuestionId { get; init; }
    public required int Ord { get; init; }
    public string? Prompt { get; init; }
    public required string Answer { get; init; }
}
