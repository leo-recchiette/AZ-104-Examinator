using Examinator.Api.Models.Contracts;

namespace Examinator.Api.Services.Interfaces;

public interface IExamResultService
{
    Task<ExamScoreDto> ScoreAsync(IReadOnlyList<AnswerSubmissionDto> submissions, CancellationToken cancellationToken);

    Task<IReadOnlyList<AnswerCheckResultDto>> CheckAnswersAsync(IReadOnlyList<AnswerSubmissionDto> submissions, CancellationToken cancellationToken);

    /// <summary>Come CheckAnswersAsync, piu' il testo delle domande: per rileggere un tentativo dello storico.</summary>
    Task<IReadOnlyList<AttemptAnswerDto>> ReviewAsync(IReadOnlyList<AnswerSubmissionDto> submissions, CancellationToken cancellationToken);
}
