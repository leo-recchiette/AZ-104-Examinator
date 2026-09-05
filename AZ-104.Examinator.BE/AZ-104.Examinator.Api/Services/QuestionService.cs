using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Mapper;
using Examinator.Api.Repositories;
using Examinator.Api.Services.Interfaces;

namespace Examinator.Api.Services;

public sealed class QuestionService : IQuestionService
{
    private readonly IQuestionRepository _repository;

    public QuestionService(IQuestionRepository repository)
    {
        _repository = repository;
    }

    public async Task<IReadOnlyList<QuestionDto>> GetRandomSetAsync(int count, QuestionType? type, CancellationToken cancellationToken)
    {
        var drawn = await _repository.GetRandomAsync(count, type, cancellationToken);
        if (drawn.Count == 0)
            return [];

        var questions = await CompleteGroupsAsync(drawn, cancellationToken);

        var ids = questions.Select(q => q.Id).ToList();
        var options = await _repository.GetOptionsAsync(ids, cancellationToken);
        var answerRows = await _repository.GetAnswerRowsAsync(ids, cancellationToken);
        var rowIds = answerRows.Select(r => r.Id).ToList();
        var rowOptions = await _repository.GetAnswerRowOptionsAsync(rowIds, cancellationToken);
        var images = await _repository.GetImagesAsync(ids, cancellationToken);

        var optionsByQuestion = options.ToLookup(o => o.QuestionId);
        var rowsByQuestion = answerRows.ToLookup(r => r.QuestionId);
        var rowOptionsByAnswerRowId = rowOptions.ToLookup(o => o.AnswerRowId);
        var imagesByQuestion = images.ToLookup(i => i.QuestionId);

        return questions
            .Select(q => q.ToQuestionDto(optionsByQuestion[q.Id], rowsByQuestion[q.Id], rowOptionsByAnswerRowId, imagesByQuestion[q.Id]))
            .ToList();
    }

    private async Task<IReadOnlyList<Question>> CompleteGroupsAsync(IReadOnlyList<Question> drawn, CancellationToken cancellationToken)
    {
        var groupIds = drawn.Where(q => q.GroupId is not null).Select(q => q.GroupId!).Distinct().ToList();
        if (groupIds.Count == 0)
            return drawn;

        var siblings = await _repository.GetByGroupIdsAsync(groupIds, cancellationToken);

        var byGroup = drawn.Concat(siblings)
            .DistinctBy(q => q.Id)
            .Where(q => q.GroupId is not null)
            .GroupBy(q => q.GroupId!)
            .ToDictionary(g => g.Key, g => g.OrderBy(q => q.Number).ToList());

        // Si scorre l'ordine sorteggiato e, alla prima domanda di un gruppo, si inserisce
        // il gruppo INTERO in quel punto: cosi' i fratelli restano contigui e l'utente non
        // si ritrova lo stesso scenario spezzato in punti lontani della sessione.
        var ordered = new List<Question>(drawn.Count);
        var alreadyPlaced = new HashSet<string>();
        foreach (var question in drawn)
        {
            if (question.GroupId is null)
                ordered.Add(question);
            else if (alreadyPlaced.Add(question.GroupId))
                ordered.AddRange(byGroup[question.GroupId]);
        }
        return ordered;
    }
}