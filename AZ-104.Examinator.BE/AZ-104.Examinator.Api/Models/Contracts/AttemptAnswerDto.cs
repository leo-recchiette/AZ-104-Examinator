namespace Examinator.Api.Models.Contracts;

/// <summary>
/// Una domanda di un tentativo storico, pronta per essere riletta: il testo con
/// le sue opzioni (Question), cosa aveva risposto l'utente (UserAnswers) e la
/// soluzione (CorrectAnswer).
///
/// Question e CorrectAnswer sono null - insieme - quando QuestionNumber non
/// esiste piu' nel question bank, cioe' quando il dataset e' stato reimportato
/// cambiando la numerazione: resta comunque leggibile cosa era stato risposto,
/// e il resto del tentativo non viene compromesso.
/// </summary>
public sealed record AttemptAnswerDto(
    int QuestionNumber,
    IReadOnlyList<string> UserAnswers,
    QuestionDto? Question,
    QuestionAnswerDto? CorrectAnswer);
