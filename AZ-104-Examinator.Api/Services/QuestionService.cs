using Examinator.Api.Contracts;
using Examinator.Api.Domain;
using Examinator.Api.Repositories;

namespace Examinator.Api.Services;

public sealed class QuestionService(IQuestionRepository repository) : IQuestionService
{
    public async Task<IReadOnlyList<QuestionDto>> GetRandomSetAsync(int count, QuestionType? type, CancellationToken cancellationToken)
    {
        var questions = await repository.GetRandomAsync(count, type, cancellationToken);
        if (questions.Count == 0)
            return [];

        // Un'unica query per tutte le opzioni/righe del set, invece che una per
        // domanda: evita N+1 query su un set che puo' arrivare a decine di domande.
        var ids = questions.Select(q => q.Id).ToList();
        var options = await repository.GetOptionsAsync(ids, cancellationToken);
        var answerRows = await repository.GetAnswerRowsAsync(ids, cancellationToken);

        var optionsByQuestion = options.ToLookup(o => o.QuestionId);
        var rowsByQuestion = answerRows.ToLookup(r => r.QuestionId);

        return questions
            .Select(q => ToQuestionDto(q, optionsByQuestion[q.Id], rowsByQuestion[q.Id]))
            .ToList();
    }

    public async Task<QuestionAnswerDto?> GetAnswerAsync(int number, CancellationToken cancellationToken)
    {
        var question = await repository.GetByNumberAsync(number, cancellationToken);
        if (question is null)
            return null;

        var options = await repository.GetOptionsAsync([question.Id], cancellationToken);
        var answerRows = await repository.GetAnswerRowsAsync([question.Id], cancellationToken);

        return new QuestionAnswerDto(
            Number: question.Number,
            Explanation: question.Explanation,
            AnswerText: question.AnswerText,
            Note: question.Note,
            CorrectLetters: options.Where(o => o.IsCorrect).Select(o => o.Letter).ToList(),
            AnswerRows: answerRows.Select(r => new AnswerRowDto(r.Prompt, r.Answer)).ToList());
    }

    private static QuestionDto ToQuestionDto(Question question, IEnumerable<Option> options, IEnumerable<AnswerRow> answerRows) => new(
        Number: question.Number,
        Type: QuestionTypeMapper.ToDb(question.Type),
        Text: question.Text,
        Options: options.Select(o => new OptionDto(o.Letter, o.Text)).ToList(),
        // Solo i prompt, senza rivelare la risposta: da' la struttura della
        // domanda (es. gli statement di uno hotspot) prima che l'utente la riveli.
        Prompts: answerRows.Where(r => r.Prompt is not null).Select(r => r.Prompt!).ToList());
}
