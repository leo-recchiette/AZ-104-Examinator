namespace Examinator.Api.Models.Domains;

/// <summary>
/// Una riga della risposta corretta di DragAndDrop, Hotspot e HotspotYesNo.
/// Prompt e' null quando la domanda e' un drag&amp;drop in sequenza: li' la
/// risposta e' l'ordine stesso, dato da Ord.
/// </summary>
public sealed class AnswerRow
{
    public int Id { get; init; }
    public required int QuestionId { get; init; }
    public required int Ord { get; init; }
    public string? Prompt { get; init; }
    public required string Answer { get; init; }
}
