namespace Examinator.Api.Models.Domains;

/// <summary>
/// Una domanda proposta durante un tentativo, con la risposta data dall'utente,
/// cosi' com'e' salvata in exam_attempt_answers.
///
/// QuestionNumber e' il "number" della domanda (1..606), non un id di riga: la
/// tabella non ha una FK verso questions apposta, per sopravvivere al TRUNCATE
/// dell'importer (vedi il commento nello schema). Di conseguenza il numero puo'
/// anche non corrispondere piu' a nulla, se il dataset e' cambiato.
/// </summary>
public sealed record ExamAttemptAnswer
{
    public required int QuestionNumber { get; init; }

    /// <summary>Posizionale come in AnswerSubmissionDto.UserAnswers: vuota se la domanda e' rimasta in bianco.</summary>
    public required IReadOnlyList<string> UserAnswers { get; init; }
}
