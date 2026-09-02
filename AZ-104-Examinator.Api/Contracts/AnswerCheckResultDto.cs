namespace Examinator.Api.Contracts;

/// <summary>
/// Esito di una singola domanda dopo la correzione in blocco: la risposta data
/// dall'utente accanto a quella corretta. CorrectAnswer e' null quando
/// QuestionNumber non corrisponde a nessuna domanda esistente: un id sbagliato
/// in mezzo a una batch non fa fallire l'intera richiesta.
/// </summary>
public sealed record AnswerCheckResultDto(int QuestionNumber, IReadOnlyList<string> UserAnswers, QuestionAnswerDto? CorrectAnswer);
