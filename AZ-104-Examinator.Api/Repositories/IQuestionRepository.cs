using Examinator.Api.Domain;

namespace Examinator.Api.Repositories;

/// <summary>
/// Accesso ai dati delle domande. Restituisce solo entita' di dominio: la
/// traduzione in DTO HTTP spetta al service, non a questo strato.
/// </summary>
public interface IQuestionRepository
{
    Task<IReadOnlyList<Question>> GetRandomAsync(int count, QuestionType? type, CancellationToken cancellationToken);

    Task<Question?> GetByNumberAsync(int number, CancellationToken cancellationToken);

    Task<IReadOnlyList<Option>> GetOptionsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken);

    Task<IReadOnlyList<AnswerRow>> GetAnswerRowsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken);
}
