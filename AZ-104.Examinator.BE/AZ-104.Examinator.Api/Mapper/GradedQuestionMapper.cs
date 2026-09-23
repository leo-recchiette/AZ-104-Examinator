using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;

namespace Examinator.Api.Mapper;

/// <summary>Traduce una GradedQuestion nella risposta corretta esposta dall'API (QuestionAnswerDto).</summary>
internal static class GradedQuestionMapper
{
    private const string AnswerImageKind = "answer";

    internal static QuestionAnswerDto ToAnswerDto(this GradedQuestion question) => new(
        Number: question.Number,
        Explanation: question.Explanation,
        AnswerText: question.AnswerText,
        Note: question.Note,
        // Options e' non vuota anche per 'ordered_answer', ma li' e' il pool, non la risposta.
        CorrectLetters: question.Type == QuestionType.MultipleChoice
            ? question.Options.Where(o => o.IsCorrect).Select(o => o.Letter!).ToList()
            : [],
        AnswerRows: question.AnswerRows.Select(r => new AnswerRowDto(r.Prompt, r.Answer)).ToList(),
        Images: question.Images.Where(i => i.Kind == AnswerImageKind).OrderBy(i => i.Ord).Select(i => i.Filename).ToList());
}
