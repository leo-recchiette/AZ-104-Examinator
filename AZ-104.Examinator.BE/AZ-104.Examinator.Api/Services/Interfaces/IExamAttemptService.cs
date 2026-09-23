using Examinator.Api.Models.Contracts;

namespace Examinator.Api.Services.Interfaces;

/// <summary>Storico delle sessioni concluse: registra e rilegge, non corregge.</summary>
public interface IExamAttemptService
{
    Task<ExamAttemptDto> SaveAttemptAsync(SaveExamAttemptDto request, CancellationToken cancellationToken);

    Task<IReadOnlyList<ExamAttemptDto>> GetAllAttemptsAsync(CancellationToken cancellationToken);

    /// <summary>null se l'id non esiste.</summary>
    Task<ExamAttemptDetailDto?> GetAttemptDetailAsync(int id, CancellationToken cancellationToken);
}
