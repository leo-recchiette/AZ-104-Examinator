using Examinator.Api.Models.Domains;

namespace Examinator.Api.Repositories;

public interface IExamAttemptRepository
{
    Task<ExamAttempt> InsertAsync(ExamAttempt attempt, CancellationToken cancellationToken);

    /// <summary>Tutto lo storico, ordinato dal piu' vecchio al piu' recente: e' l'ordine che il grafico "Your progress" si aspetta.</summary>
    Task<IReadOnlyList<ExamAttempt>> GetAllAsync(CancellationToken cancellationToken);
}
