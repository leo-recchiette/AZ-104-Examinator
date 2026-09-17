using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;

namespace Examinator.Api.Services.Interfaces;

/// <summary>
/// Sceglie e prepara le domande da proporre. Non sa nulla di correzione o
/// punteggio: quella e' responsabilita' di IExamResultService.
/// </summary>
public interface IQuestionService
{
    Task<IReadOnlyList<QuestionDto>> GetRandomSetAsync(int count, QuestionType? type, CancellationToken cancellationToken);

    /// <summary>
    /// Le domande indicate, nello stesso ordine dei numeri richiesti: serve a ricostruire una
    /// sessione ripresa, dove l'ordine di presentazione fa parte di cio' che va ripristinato.
    /// I numeri che non esistono piu' (dopo un re-import del dataset) vengono semplicemente
    /// omessi: sta al chiamante decidere se il risultato parziale gli basta.
    /// </summary>
    Task<IReadOnlyList<QuestionDto>> GetByNumbersAsync(IReadOnlyList<int> numbers, CancellationToken cancellationToken);
}
