using Examinator.Api.Models.Domains;

namespace Examinator.Api.Repositories;

public interface IExamAttemptRepository
{
    /// <summary>
    /// Registra il tentativo e le sue risposte in un'unica transazione: uno storico con
    /// l'intestazione ma senza dettaglio (o viceversa) non sarebbe consultabile.
    /// </summary>
    Task<ExamAttempt> InsertAsync(ExamAttempt attempt, IReadOnlyList<ExamAttemptAnswer> answers, CancellationToken cancellationToken);

    /// <summary>
    /// Tutto lo storico, ordinato dal piu' vecchio al piu' recente: e' l'ordine che il grafico "Your progress" si aspetta.
    /// Solo le intestazioni: il dettaglio delle risposte si carica un tentativo alla volta con <see cref="GetDetailAsync"/>.
    /// </summary>
    Task<IReadOnlyList<ExamAttempt>> GetAllAsync(CancellationToken cancellationToken);

    /// <summary>Un tentativo con le sue risposte, nell'ordine di presentazione. null se l'id non esiste.</summary>
    Task<ExamAttemptDetail?> GetDetailAsync(int id, CancellationToken cancellationToken);
}
