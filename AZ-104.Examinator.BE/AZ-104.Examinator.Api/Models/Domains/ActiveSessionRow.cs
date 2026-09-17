namespace Examinator.Api.Models.Domains;

/// <summary>
/// Riga grezza di active_session cosi' come la restituisce Dapper da Postgres: answers resta il
/// testo JSON della colonna jsonb (Dapper non sa farne un dizionario da solo) e gli array arrivano
/// come int[], non come IReadOnlyList. ActiveSessionRepository la converte in ActiveSession.
/// </summary>
internal sealed record ActiveSessionRow
{
    public required string Mode { get; init; }
    public required int[] QuestionNumbers { get; init; }
    public required string Answers { get; init; }
    public required int[] FlaggedIndexes { get; init; }
    public required int CurrentIndex { get; init; }
    public int? TimeLimitSeconds { get; init; }
    public required bool AutoReveal { get; init; }
    public required DateTimeOffset StartedAt { get; init; }
    public required DateTimeOffset SavedAt { get; init; }
}
