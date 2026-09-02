using Examinator.Api.Contracts;

namespace Examinator.Api.Services;

/// <summary>
/// Logica di correzione: dato cio' che l'utente ha risposto, calcola il
/// punteggio complessivo o il dettaglio corretto/sbagliato per domanda.
/// Separata da IQuestionService (che serve solo a proporre le domande):
/// "cosa chiedere" e "come si e' risposto" sono due responsabilita' diverse.
/// </summary>
public interface IExamResultService
{
    /// <summary>Percentuale di punti ottenuti sul totale: il primo dato da leggere a fine sessione, per sapere se il test e' passato.</summary>
    Task<ExamScoreDto> ScoreAsync(IReadOnlyList<AnswerSubmissionDto> submissions, CancellationToken cancellationToken);

    /// <summary>Per ogni domanda, la risposta data dall'utente accanto a quella corretta: da chiamare dopo lo score, per la revisione.</summary>
    Task<IReadOnlyList<AnswerCheckResultDto>> CheckAnswersAsync(IReadOnlyList<AnswerSubmissionDto> submissions, CancellationToken cancellationToken);
}
