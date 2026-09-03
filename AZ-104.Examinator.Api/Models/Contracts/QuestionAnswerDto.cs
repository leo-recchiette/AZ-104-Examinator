namespace Examinator.Api.Models.Contracts;

/// <summary>
/// La risposta corretta di una domanda: da richiedere solo dopo che l'utente
/// ha gia' risposto. CorrectLetters e' valorizzato per MultipleChoice,
/// AnswerRows per gli altri tre tipi: mai insieme.
/// </summary>
public sealed record QuestionAnswerDto(
    int Number,
    string Explanation,
    string AnswerText,
    string? Note,
    IReadOnlyList<string> CorrectLetters,
    IReadOnlyList<AnswerRowDto> AnswerRows);
