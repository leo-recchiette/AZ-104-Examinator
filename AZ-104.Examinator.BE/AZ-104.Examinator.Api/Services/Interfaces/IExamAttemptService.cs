using Examinator.Api.Models.Contracts;

namespace Examinator.Api.Services.Interfaces;

/// <summary>
/// Storico delle sessioni concluse: alimenta il grafico "Your progress" della mode-select.
/// Separata da IExamResultService (che calcola il punteggio di UNA submission): qui si registra
/// e si rilegge cio' che e' gia' stato deciso altrove, nessuna logica di correzione.
/// </summary>
public interface IExamAttemptService
{
    Task<ExamAttemptDto> SaveAttemptAsync(SaveExamAttemptDto request, CancellationToken cancellationToken);

    Task<IReadOnlyList<ExamAttemptDto>> GetAllAttemptsAsync(CancellationToken cancellationToken);
}
