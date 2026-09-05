using Examinator.Api.Models.Domains;

namespace Examinator.Api.Repositories;

public interface IQuestionRepository
{
    /// <summary>
    /// Sorteggia <paramref name="count"/> UNITA', non domande: una domanda sciolta oppure un
    /// gruppo intero, che occupa un posto solo. I gruppi tornano completi e con i membri
    /// contigui, gia' nell'ordine in cui vanno proposti.
    /// </summary>
    Task<IReadOnlyList<Question>> GetRandomAsync(int count, QuestionType? type, CancellationToken cancellationToken);

    Task<IReadOnlyList<Question>> GetByNumbersAsync(IReadOnlyCollection<int> numbers, CancellationToken cancellationToken);

    Task<IReadOnlyList<Option>> GetOptionsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken);

    Task<IReadOnlyList<AnswerRow>> GetAnswerRowsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken);

    Task<IReadOnlyList<AnswerRowOption>> GetAnswerRowOptionsAsync(IReadOnlyCollection<int> answerRowIds, CancellationToken cancellationToken);

    Task<IReadOnlyList<QuestionImage>> GetImagesAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken);
}
