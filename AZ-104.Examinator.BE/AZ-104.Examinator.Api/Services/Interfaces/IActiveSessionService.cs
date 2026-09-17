using Examinator.Api.Models.Contracts;

namespace Examinator.Api.Services.Interfaces;

/// <summary>
/// La sessione che l'utente sta ancora giocando: salvata a ogni passo per poterla riprendere dopo un
/// reload, e cancellata quando viene inviata. Niente a che vedere con IExamAttemptService, che
/// registra invece le sessioni concluse.
/// </summary>
public interface IActiveSessionService
{
    /// <summary>
    /// La sessione in corso con le domande gia' ricostruite, o null se non ce n'e' una o se non e'
    /// piu' ricostruibile.
    /// </summary>
    Task<ActiveSessionDto?> GetAsync(CancellationToken cancellationToken);

    Task SaveAsync(SaveActiveSessionDto request, CancellationToken cancellationToken);

    Task DeleteAsync(CancellationToken cancellationToken);
}
