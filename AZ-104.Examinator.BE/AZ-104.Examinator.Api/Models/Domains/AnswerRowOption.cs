namespace Examinator.Api.Models.Domains;

/// <summary>Nessun IsCorrect: la risposta della riga e' in AnswerRow.Answer.</summary>
public sealed class AnswerRowOption
{
    public required int AnswerRowId { get; init; }
    public required int Ord { get; init; }
    public required string Text { get; init; }
}
