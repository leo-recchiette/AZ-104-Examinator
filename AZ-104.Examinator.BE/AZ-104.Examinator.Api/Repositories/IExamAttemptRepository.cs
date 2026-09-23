using Examinator.Api.Models.Domains;

namespace Examinator.Api.Repositories;

public interface IExamAttemptRepository
{
    /// <summary>In un'unica transazione: un tentativo a meta' non sarebbe consultabile.</summary>
    Task<ExamAttempt> InsertAsync(ExamAttempt attempt, IReadOnlyList<ExamAttemptAnswer> answers, CancellationToken cancellationToken);

    /// <summary>Solo le intestazioni, dal piu' vecchio: l'ordine che serve al grafico.</summary>
    Task<IReadOnlyList<ExamAttempt>> GetAllAsync(CancellationToken cancellationToken);

    /// <summary>Un tentativo con le sue risposte, nell'ordine di presentazione. null se l'id non esiste.</summary>
    Task<ExamAttemptDetail?> GetDetailAsync(int id, CancellationToken cancellationToken);
}
