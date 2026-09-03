using Examinator.Api.Contracts;
using Examinator.Api.Domain;

namespace Examinator.Api.Mapper;

/// <summary>Traduce una GradedQuestion nella risposta corretta esposta dall'API (QuestionAnswerDto).</summary>
internal static class GradedQuestionMapper
{
    internal static QuestionAnswerDto ToAnswerDto(this GradedQuestion question) => new(
        Number: question.Number,
        Explanation: question.Explanation,
        AnswerText: question.AnswerText,
        Note: question.Note,
        CorrectLetters: question.Options.Where(o => o.IsCorrect).Select(o => o.Letter).ToList(),
        AnswerRows: question.AnswerRows.Select(r => new AnswerRowDto(r.Prompt, r.Answer)).ToList());
}
