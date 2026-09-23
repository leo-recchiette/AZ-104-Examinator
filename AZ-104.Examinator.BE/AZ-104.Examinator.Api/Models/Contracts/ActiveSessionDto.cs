namespace Examinator.Api.Models.Contracts;

/// <summary>Domande gia' ricostruite, nell'ordine di presentazione.</summary>
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
