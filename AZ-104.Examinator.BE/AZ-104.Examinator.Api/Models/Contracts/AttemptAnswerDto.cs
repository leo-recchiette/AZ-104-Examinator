namespace Examinator.Api.Models.Contracts;

/// <summary>Question e CorrectAnswer sono null se la domanda non esiste piu' dopo un reimport.</summary>
public sealed record AttemptAnswerDto(
    int QuestionNumber,
    IReadOnlyList<string> UserAnswers,
    QuestionDto? Question,
    QuestionAnswerDto? CorrectAnswer);
