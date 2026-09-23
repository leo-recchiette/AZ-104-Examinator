using Examinator.Api.Models.Domains;

namespace Examinator.Api.Services.Interfaces;

public interface IScoreService
{
    (int Earned, int Total) Score(QuestionType type, IReadOnlyList<Option> options, IReadOnlyList<AnswerRow> answerRows, IReadOnlyList<string> userAnswers);
}
