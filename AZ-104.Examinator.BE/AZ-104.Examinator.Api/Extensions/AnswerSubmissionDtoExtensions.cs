using Examinator.Api.Models.Contracts;

namespace Examinator.Api.Extensions;

public static class AnswerSubmissionDtoExtensions
{
    /// <summary>Le righe non compilate arrivano come stringhe vuote: contare gli elementi non basta.</summary>
    public static bool IsBlank(this AnswerSubmissionDto submission) =>
        submission.UserAnswers is null || submission.UserAnswers.All(string.IsNullOrWhiteSpace);
}
