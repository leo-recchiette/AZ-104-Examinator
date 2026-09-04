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
        var questions = await _repository.GetRandomAsync(count, type, cancellationToken);
        if (questions.Count == 0)
            return [];

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
}