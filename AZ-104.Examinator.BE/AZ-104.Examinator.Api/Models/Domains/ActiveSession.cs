namespace Examinator.Api.Models.Domains;

/// <summary>
/// La sessione in corso cosi' com'e' salvata in active_session: i numeri delle domande nell'ordine
/// di presentazione e cio' che l'utente ha fatto finora, senza il testo delle domande (si rilegge dal
/// question bank al momento del ripristino, come per il dettaglio di un tentativo storico).
/// </summary>
public sealed record ActiveSession
{
    /// <summary>"practice" | "exam".</summary>
    public required string Mode { get; init; }

    public required IReadOnlyList<int> QuestionNumbers { get; init; }

    /// <summary>questionNumber -> risposta data, nella forma posizionale di AnswerSubmissionDto.</summary>
    public required IReadOnlyDictionary<int, IReadOnlyList<string>> Answers { get; init; }

    /// <summary>Indici (in QuestionNumbers) delle domande marcate per la revisione.</summary>
    public required IReadOnlyList<int> FlaggedIndexes { get; init; }

    public required int CurrentIndex { get; init; }
    public int? TimeLimitSeconds { get; init; }
    public required bool AutoReveal { get; init; }

    /// <summary>
    /// StartedAt e SavedAt vengono entrambi dall'orologio del client: la loro differenza e' il tempo
    /// giocato fino all'ultimo salvataggio ed e' cio' che permette al cronometro di ripartire da li'.
    /// </summary>
    public required DateTimeOffset StartedAt { get; init; }

    public required DateTimeOffset SavedAt { get; init; }
}
