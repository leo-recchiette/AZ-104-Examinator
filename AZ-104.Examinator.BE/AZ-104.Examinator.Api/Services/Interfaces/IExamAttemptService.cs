using Examinator.Api.Models.Contracts;

namespace Examinator.Api.Services.Interfaces;

/// <summary>
/// Storico delle sessioni concluse: alimenta il grafico "Your progress" della mode-select e la
/// sezione History, da cui ogni tentativo si puo' riaprire domanda per domanda.
/// Separata da IExamResultService (che calcola il punteggio di UNA submission): qui si registra
/// e si rilegge cio' che e' gia' stato deciso altrove, nessuna logica di correzione.
/// </summary>
public interface IExamAttemptService
{
    Task<ExamAttemptDto> SaveAttemptAsync(SaveExamAttemptDto request, CancellationToken cancellationToken);

    /// <summary>Solo le intestazioni dei tentativi, dal piu' vecchio al piu' recente.</summary>
    Task<IReadOnlyList<ExamAttemptDto>> GetAllAttemptsAsync(CancellationToken cancellationToken);

    /// <summary>Un tentativo con le sue domande, risposte date e soluzioni. null se l'id non esiste.</summary>
    Task<ExamAttemptDetailDto?> GetAttemptDetailAsync(int id, CancellationToken cancellationToken);
}
