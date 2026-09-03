using Examinator.Api.Models.Domains;
using Examinator.Api.Services.Interfaces;

namespace Examinator.Api.Services;

public sealed class ScoreService : IScoreService
{
    /// <summary>
    /// Regola ufficiale Microsoft (learn.microsoft.com/credentials/certifications/exam-scoring-reports):
    /// "you'll receive one point for each correctly answered component [...] no
    /// points are deducted for incorrect answers". Un errore su un componente non
    /// invalida gli altri: mai tutto-o-niente su una domanda multi-parte.
    ///
    ///   MultipleChoice - un componente per ogni lettera corretta: la scelta non ha
    ///                    posizione, quindi si confronta per insieme, non per ordine.
    ///                    Una lettera sbagliata in piu' non fa perdere le altre gia' giuste.
    ///   Altri tipi     - un componente per riga/passo, confrontato per posizione con
    ///                    AnswerRows: vale sia per Hotspot/HotspotYesNo (ogni riga e' un
    ///                    punto) sia per un DragAndDrop in sequenza (ogni passo al posto
    ///                    giusto e' un punto, indipendentemente dagli altri passi).
    /// </summary>
    public (int Earned, int Total) Score(QuestionType type, IReadOnlyList<Option> options, IReadOnlyList<AnswerRow> answerRows, IReadOnlyList<string> userAnswers)
    {
        if (type is QuestionType.MultipleChoice)
        {
            // Letter e' nullable a livello di dominio (il pool di un DragAndDrop
            // 'ordered_answer' non ne ha), ma in questo ramo 'options' e' sempre
            // il pool lettered di una MultipleChoice: mai null qui.
            var correctLetters = options.Where(o => o.IsCorrect).Select(o => o.Letter!);
            var correctSet = new HashSet<string>(correctLetters, StringComparer.OrdinalIgnoreCase);
            var givenSet = new HashSet<string>(userAnswers.Select(a => a.Trim()), StringComparer.OrdinalIgnoreCase);
            return (correctSet.Count(givenSet.Contains), correctSet.Count);
        }

        var earned = 0;
        for (var i = 0; i < answerRows.Count; i++)
        {
            var given = i < userAnswers.Count ? userAnswers[i].Trim() : null;
            if (given is not null && string.Equals(given, answerRows[i].Answer, StringComparison.OrdinalIgnoreCase))
                earned++;
        }
        return (earned, answerRows.Count);
    }
}
