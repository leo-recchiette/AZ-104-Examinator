namespace Examinator.Api.Models.Domains;

/// <summary>
/// Un tentativo insieme alle sue risposte, nell'ordine in cui le domande erano
/// state proposte. Aggregato costruito solo per la rilettura di un singolo
/// tentativo: lo storico in elenco (GetAllAsync) non carica le risposte, che li'
/// sarebbero N query di troppo per un dato che non si mostra.
/// </summary>
public sealed record ExamAttemptDetail(ExamAttempt Attempt, IReadOnlyList<ExamAttemptAnswer> Answers);
