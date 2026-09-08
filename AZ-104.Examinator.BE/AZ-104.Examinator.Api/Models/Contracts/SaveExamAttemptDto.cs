namespace Examinator.Api.Models.Contracts;

/// <summary>
/// Corpo di POST /api/results/saveAttempt: la sessione appena conclusa lato client, da registrare nello storico.
/// Answers porta l'intero set di domande proposte (anche quelle lasciate in bianco, con UserAnswers vuoto):
/// e' quello che rende il tentativo riconsultabile domanda per domanda, non solo come percentuale.
///
/// E' pero' facoltativo: un client che non lo manda (una scheda del browser ferma a una versione
/// precedente, per dirne una) registra comunque il tentativo, con la sola intestazione. Rifiutarlo
/// trasformerebbe un client disallineato in una perdita silenziosa di storico, che e' un danno
/// peggiore del dettaglio mancante - lo storico sa gia' mostrare i tentativi che ne sono privi.
/// </summary>
public sealed record SaveExamAttemptDto(
    string Mode,
    int QuestionCount,
    double Percentage,
    DateTimeOffset StartTime,
    DateTimeOffset EndTime,
    IReadOnlyList<AnswerSubmissionDto>? Answers);
