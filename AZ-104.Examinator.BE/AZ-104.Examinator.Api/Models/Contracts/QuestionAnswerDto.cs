namespace Examinator.Api.Models.Contracts;

/// <summary>
/// La risposta corretta di una domanda: da richiedere solo dopo che l'utente
/// ha gia' risposto. CorrectLetters e' valorizzato per MultipleChoice,
/// AnswerRows per gli altri tre tipi: mai insieme. Images e' lo screenshot
/// (se presente) con la risposta corretta gia' compilata - da mostrare solo
/// ora, insieme alla spiegazione, mai prima.
/// </summary>
public sealed record QuestionAnswerDto(
    int Number,
    string Explanation,
    string AnswerText,
    string? Note,
    IReadOnlyList<string> CorrectLetters,
    IReadOnlyList<AnswerRowDto> AnswerRows,
    IReadOnlyList<string> Images);
