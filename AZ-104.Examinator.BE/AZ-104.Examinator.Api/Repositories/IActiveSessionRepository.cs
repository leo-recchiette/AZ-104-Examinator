using Examinator.Api.Models.Domains;

namespace Examinator.Api.Repositories;

public interface IActiveSessionRepository
{
    Task<ActiveSession?> GetAsync(CancellationToken cancellationToken);

    Task SaveAsync(ActiveSession session, CancellationToken cancellationToken);

    Task DeleteAsync(CancellationToken cancellationToken);
}
