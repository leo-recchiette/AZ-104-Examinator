using Examinator.Api.Contracts;
using Examinator.Api.Domain;

namespace Examinator.Api.Services;

/// <summary>
/// Logica applicativa sulle domande: decide cosa esporre prima e dopo che
/// l'utente ha risposto, cosi' il controller resta un sottile strato HTTP.
/// </summary>
public interface IQuestionService
{
    Task<IReadOnlyList<QuestionDto>> GetRandomSetAsync(int count, QuestionType? type, CancellationToken cancellationToken);

    Task<QuestionAnswerDto?> GetAnswerAsync(int number, CancellationToken cancellationToken);
}
