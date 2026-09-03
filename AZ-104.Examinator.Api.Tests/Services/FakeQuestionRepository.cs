using Examinator.Api.Models.Domains;
using Examinator.Api.Repositories;

namespace Examinator.Api.Tests.Services;

/// <summary>Fake in memoria di IQuestionRepository: restituisce sempre le liste configurate, senza filtrare per id/numero. Basta per gli scenari a una domanda dei test dei service.</summary>
internal sealed class FakeQuestionRepository : IQuestionRepository
{
    public IReadOnlyList<Question> Questions { get; init; } = [];
    public IReadOnlyList<Option> Options { get; init; } = [];
    public IReadOnlyList<AnswerRow> AnswerRows { get; init; } = [];

    public Task<IReadOnlyList<Question>> GetRandomAsync(int count, QuestionType? type, CancellationToken cancellationToken) =>
        Task.FromResult(Questions);

    public Task<IReadOnlyList<Question>> GetByNumbersAsync(IReadOnlyCollection<int> numbers, CancellationToken cancellationToken) =>
        Task.FromResult(Questions);

    public Task<IReadOnlyList<Option>> GetOptionsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken) =>
        Task.FromResult(Options);

    public Task<IReadOnlyList<AnswerRow>> GetAnswerRowsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken) =>
        Task.FromResult(AnswerRows);
}
