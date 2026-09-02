using Examinator.Api.Domain;

namespace Examinator.Api.Repositories;

public interface IQuestionRepository
{
    Task<IReadOnlyList<Question>> GetRandomAsync(int count, QuestionType? type, CancellationToken cancellationToken);

    Task<IReadOnlyList<Question>> GetByNumbersAsync(IReadOnlyCollection<int> numbers, CancellationToken cancellationToken);

    Task<IReadOnlyList<Option>> GetOptionsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken);

    Task<IReadOnlyList<AnswerRow>> GetAnswerRowsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken);
}
