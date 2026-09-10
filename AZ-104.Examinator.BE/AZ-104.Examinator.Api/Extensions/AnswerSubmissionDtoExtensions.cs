using Examinator.Api.Models.Contracts;

namespace Examinator.Api.Extensions;

public static class AnswerSubmissionDtoExtensions
{
    /// <summary>
    /// Nessuna scelta fatta su questa domanda: nessuna risposta inviata, oppure solo caselle
    /// lasciate in bianco (le righe non compilate di un hotspot arrivano come stringhe vuote,
    /// non come elementi assenti, quindi contare gli elementi non basterebbe).
    /// </summary>
    public static bool IsBlank(this AnswerSubmissionDto submission) =>
        submission.UserAnswers is null || submission.UserAnswers.All(string.IsNullOrWhiteSpace);
}
