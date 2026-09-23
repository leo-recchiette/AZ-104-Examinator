using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;

namespace Examinator.Api.Services.Interfaces;

public interface IQuestionService
{
    Task<IReadOnlyList<QuestionDto>> GetRandomSetAsync(int count, QuestionType? type, CancellationToken cancellationToken);

    /// <summary>Nell'ordine richiesto; i numeri che non esistono piu' vengono omessi.</summary>
    Task<IReadOnlyList<QuestionDto>> GetByNumbersAsync(IReadOnlyList<int> numbers, CancellationToken cancellationToken);
}
