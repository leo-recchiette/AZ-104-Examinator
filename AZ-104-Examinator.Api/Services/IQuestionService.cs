using Examinator.Api.Contracts;
using Examinator.Api.Domain;

namespace Examinator.Api.Services;

/// <summary>
/// Sceglie e prepara le domande da proporre. Non sa nulla di correzione o
/// punteggio: quella e' responsabilita' di IExamResultService.
/// </summary>
public interface IQuestionService
{
    Task<IReadOnlyList<QuestionDto>> GetRandomSetAsync(int count, QuestionType? type, CancellationToken cancellationToken);
}
