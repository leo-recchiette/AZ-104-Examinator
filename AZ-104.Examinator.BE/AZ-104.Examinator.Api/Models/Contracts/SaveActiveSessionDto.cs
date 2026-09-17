namespace Examinator.Api.Models.Contracts;

/// <summary>
/// Corpo di PUT /api/sessions/current: la fotografia della sessione in corso, riscritta per intero a
/// ogni salvataggio (l'endpoint e' un upsert su riga unica, non un merge parziale).
/// Non contiene il testo delle domande, solo i loro numeri nell'ordine di presentazione: il resto
/// si rilegge dal question bank quando serve ricostruirla.
/// </summary>
public sealed record SaveActiveSessionDto(
    string Mode,
    IReadOnlyList<int> QuestionNumbers,
    IReadOnlyDictionary<int, IReadOnlyList<string>> Answers,
    IReadOnlyList<int> FlaggedIndexes,
    int CurrentIndex,
    int? TimeLimitSeconds,
    bool AutoReveal,
    DateTimeOffset StartedAt,
    DateTimeOffset SavedAt);
