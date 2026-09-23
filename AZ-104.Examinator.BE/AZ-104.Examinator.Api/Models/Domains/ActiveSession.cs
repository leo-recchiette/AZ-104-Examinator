namespace Examinator.Api.Models.Domains;

/// <summary>Solo i numeri delle domande: il testo si rilegge al ripristino.</summary>
public sealed record ActiveSession
{
    /// <summary>"practice" | "exam".</summary>
    public required string Mode { get; init; }

    public required IReadOnlyList<int> QuestionNumbers { get; init; }

    /// <summary>Per questionNumber.</summary>
    public required IReadOnlyDictionary<int, IReadOnlyList<string>> Answers { get; init; }

    /// <summary>Indici in QuestionNumbers.</summary>
    public required IReadOnlyList<int> FlaggedIndexes { get; init; }

    public required int CurrentIndex { get; init; }
    public int? TimeLimitSeconds { get; init; }
    public required bool AutoReveal { get; init; }

    /// <summary>Orologio del client: la differenza e' il tempo giocato.</summary>
    public required DateTimeOffset StartedAt { get; init; }

    public required DateTimeOffset SavedAt { get; init; }
}
