namespace Examinator.Api.Contracts;

/// <summary>
/// Una risposta data dall'utente a una domanda. UserAnswers e' posizionale e
/// dipende dal tipo di domanda:
///   MultipleChoice          -> le lettere selezionate, in qualsiasi ordine (es. ["C"] o ["B","D"])
///   DragAndDrop (sequenza)  -> gli elementi nell'ordine scelto dall'utente
///   Hotspot / HotspotYesNo / DragAndDrop (selezione)
///                            -> una risposta per riga, nello stesso ordine dei
///                               Prompts restituiti da GET /api/questions/random
/// </summary>
public sealed record AnswerSubmissionDto(int QuestionNumber, IReadOnlyList<string> UserAnswers);
