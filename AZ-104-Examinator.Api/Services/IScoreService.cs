using Examinator.Api.Domain;

namespace Examinator.Api.Services;

/// <summary>
/// Punti guadagnati e punti totali di una singola domanda. Nessuna dipendenza
/// esterna (niente I/O, niente stato): puro calcolo, testabile in isolamento
/// senza dover costruire un GradedQuestion o toccare il database.
/// </summary>
public interface IScoreService
{
    (int Earned, int Total) Score(QuestionType type, IReadOnlyList<Option> options, IReadOnlyList<AnswerRow> answerRows, IReadOnlyList<string> userAnswers);
}
