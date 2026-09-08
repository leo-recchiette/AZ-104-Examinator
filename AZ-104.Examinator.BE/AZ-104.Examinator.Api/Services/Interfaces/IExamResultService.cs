using Examinator.Api.Models.Contracts;

namespace Examinator.Api.Services.Interfaces;

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

    /// <summary>
    /// Come CheckAnswersAsync, ma restituisce anche il testo della domanda con le sue opzioni.
    /// Serve a rileggere un tentativo dello storico, quando il client non ha piu' in memoria le
    /// domande di quella sessione: costa una query in piu' (i pool row-scoped), quindi non e'
    /// il default della revisione di fine sessione.
    /// </summary>
    Task<IReadOnlyList<AttemptAnswerDto>> ReviewAsync(IReadOnlyList<AnswerSubmissionDto> submissions, CancellationToken cancellationToken);
}
