namespace Examinator.Api.Models.Contracts;

/// <summary>Upsert dell'intera sessione, non un merge. Solo i numeri delle domande, non il testo.</summary>
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
