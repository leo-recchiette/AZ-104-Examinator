namespace Examinator.Api.Models.Contracts;

/// <summary>
/// CorrectLetters solo per MultipleChoice, AnswerRows per gli altri. Images ha la soluzione
/// compilata: da mostrare solo dopo la risposta.
/// </summary>
public sealed record QuestionAnswerDto(
    int Number,
    string Explanation,
    string AnswerText,
    string? Note,
    IReadOnlyList<string> CorrectLetters,
    IReadOnlyList<AnswerRowDto> AnswerRows,
    IReadOnlyList<string> Images);
