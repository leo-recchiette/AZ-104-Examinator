namespace Examinator.Api.Models.Contracts;

/// <summary>
/// Risposta di GET /api/sessions/current: lo stato salvato piu' le domande gia' ricostruite, nello
/// stesso ordine in cui erano state proposte, cosi' che il client possa riprendere senza altre chiamate.
/// </summary>
public sealed record ActiveSessionDto(
    string Mode,
    IReadOnlyList<QuestionDto> Questions,
    IReadOnlyDictionary<int, IReadOnlyList<string>> Answers,
    IReadOnlyList<int> FlaggedIndexes,
    int CurrentIndex,
    int? TimeLimitSeconds,
    bool AutoReveal,
    DateTimeOffset StartedAt,
    DateTimeOffset SavedAt);
