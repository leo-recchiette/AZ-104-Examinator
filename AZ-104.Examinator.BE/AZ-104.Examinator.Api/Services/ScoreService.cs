using Examinator.Api.Extensions;
using Examinator.Api.Models.Domains;
using Examinator.Api.Services.Interfaces;

namespace Examinator.Api.Services;

public sealed class ScoreService : IScoreService
{
    /// <summary>
    /// Credito parziale come nell'esame Microsoft: un punto per componente giusto, niente tolto per
    /// quelli sbagliati. MultipleChoice confronta per insieme di lettere, gli altri per posizione.
    /// Allineato a grading.ts.
    /// </summary>
    public (int Earned, int Total) Score(QuestionType type, IReadOnlyList<Option> options, IReadOnlyList<AnswerRow> answerRows, IReadOnlyList<string> userAnswers)
    {
        if (type is QuestionType.MultipleChoice)
        {
            var correctLetters = options.Where(o => o.IsCorrect).Select(o => o.Letter!);
            var correctSet = new HashSet<string>(correctLetters, StringComparer.OrdinalIgnoreCase);
            var givenSet = new HashSet<string>(userAnswers.Select(a => a.Trim()), StringComparer.OrdinalIgnoreCase);
            return (correctSet.Count(givenSet.Contains), correctSet.Count);
        }

        var earned = 0;
        for (var i = 0; i < answerRows.Count; i++)
        {
            var given = i < userAnswers.Count ? userAnswers[i]?.Trim() : null;
            if (given is not null && given.HasRowMatches(answerRows[i].Answer))
                earned++;
        }
        return (earned, answerRows.Count);
    }
}
