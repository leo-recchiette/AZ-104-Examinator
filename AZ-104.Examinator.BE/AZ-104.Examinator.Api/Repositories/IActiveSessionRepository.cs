using Examinator.Api.Models.Domains;

namespace Examinator.Api.Repositories;

public interface IActiveSessionRepository
{
    /// <summary>La sessione in corso, o null se non ce n'e' nessuna.</summary>
    Task<ActiveSession?> GetAsync(CancellationToken cancellationToken);

    /// <summary>Sostituisce la sessione in corso (la tabella ne tiene una sola).</summary>
    Task SaveAsync(ActiveSession session, CancellationToken cancellationToken);

    /// <summary>Cancella la sessione in corso: si chiama quando viene inviata o abbandonata.</summary>
    Task DeleteAsync(CancellationToken cancellationToken);
}
