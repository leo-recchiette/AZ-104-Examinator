namespace Examinator.Api.Models.Domains;

/// <summary>Una scelta del pool row-scoped di una riga 'selection' (Hotspot, e la minoranza di DragAndDrop che sono in realta' selezioni). Nessun IsCorrect: la risposta corretta della riga e' gia' in AnswerRow.Answer.</summary>
public sealed class AnswerRowOption
{
    public required int AnswerRowId { get; init; }
    public required int Ord { get; init; }
    public required string Text { get; init; }
}
