using Examinator.Api.Models.Contracts;

namespace Examinator.Api.Services.Interfaces;

/// <summary>La sessione non ancora inviata, per riprenderla dopo un reload.</summary>
public interface IActiveSessionService
{
    /// <summary>Null anche se non e' piu' ricostruibile.</summary>
    Task<ActiveSessionDto?> GetAsync(CancellationToken cancellationToken);

    Task SaveAsync(SaveActiveSessionDto request, CancellationToken cancellationToken);

    Task DeleteAsync(CancellationToken cancellationToken);
}
