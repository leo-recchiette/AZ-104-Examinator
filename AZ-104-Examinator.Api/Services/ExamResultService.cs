using Examinator.Api.Contracts;
using Examinator.Api.Domain;
using Examinator.Api.Repositories;

namespace Examinator.Api.Services;

public sealed class ExamResultService : IExamResultService
{
    private readonly IQuestionRepository _repository;

    public ExamResultService(IQuestionRepository repository)
    {
        _repository = repository;
    }

    public async Task<ExamScoreDto> ScoreAsync(IReadOnlyList<AnswerSubmissionDto> submissions, CancellationToken cancellationToken)
    {
        var graded = await LoadGradedQuestionsAsync(submissions.Select(s => s.QuestionNumber), cancellationToken);

        var earnedTotal = 0;
        var pointsTotal = 0;
        foreach (var submission in submissions)
        {
            // Un QuestionNumber inesistente non ha una risposta corretta con cui
            // confrontarsi: non entra ne' nei punti guadagnati ne' nel totale.
            if (!graded.TryGetValue(submission.QuestionNumber, out var question))
                continue;

            var (earned, total) = ScoreQuestion(question, submission.UserAnswers ?? []);
            earnedTotal += earned;
            pointsTotal += total;
        }

        var percentage = pointsTotal == 0 ? 0d : Math.Round(100.0 * earnedTotal / pointsTotal, 1);
        return new ExamScoreDto(percentage);
    }

    public async Task<IReadOnlyList<AnswerCheckResultDto>> CheckAnswersAsync(
        IReadOnlyList<AnswerSubmissionDto> submissions, CancellationToken cancellationToken)
    {
        var graded = await LoadGradedQuestionsAsync(submissions.Select(s => s.QuestionNumber), cancellationToken);

        return submissions
            .Select(submission =>
            {
                if (!graded.TryGetValue(submission.QuestionNumber, out var question))
                    return new AnswerCheckResultDto(submission.QuestionNumber, submission.UserAnswers, null);

                var correctAnswer = ToAnswerDto(question);
                return new AnswerCheckResultDto(submission.QuestionNumber, submission.UserAnswers, correctAnswer);
            })
            .ToList();
    }

    /// <summary>
    /// Punti guadagnati e punti totali di una domanda, secondo la regola ufficiale
    /// Microsoft (learn.microsoft.com/credentials/certifications/exam-scoring-reports):
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
    private static (int Earned, int Total) ScoreQuestion(GradedQuestion question, IReadOnlyList<string> userAnswers)
    {
        if (question.Type is QuestionType.MultipleChoice)
        {
            var correctLetters = question.Options.Where(o => o.IsCorrect).Select(o => o.Letter);
            var correctSet = new HashSet<string>(correctLetters, StringComparer.OrdinalIgnoreCase);
            var givenSet = new HashSet<string>(userAnswers.Select(a => a.Trim()), StringComparer.OrdinalIgnoreCase);
            return (correctSet.Count(givenSet.Contains), correctSet.Count);
        }

        var earned = 0;
        for (var i = 0; i < question.AnswerRows.Count; i++)
        {
            var given = i < userAnswers.Count ? userAnswers[i].Trim() : null;
            if (given is not null && string.Equals(given, question.AnswerRows[i].Answer, StringComparison.OrdinalIgnoreCase))
                earned++;
        }
        return (earned, question.AnswerRows.Count);
    }

    private static QuestionAnswerDto ToAnswerDto(GradedQuestion question) => new(
        Number: question.Number,
        Explanation: question.Explanation,
        AnswerText: question.AnswerText,
        Note: question.Note,
        CorrectLetters: question.Options.Where(o => o.IsCorrect).Select(o => o.Letter).ToList(),
        AnswerRows: question.AnswerRows.Select(r => new AnswerRowDto(r.Prompt, r.Answer)).ToList());

    /// <summary>Carica in blocco domande, opzioni e answer_rows per un insieme di numeri, pronte per essere corrette.</summary>
    private async Task<Dictionary<int, GradedQuestion>> LoadGradedQuestionsAsync(
        IEnumerable<int> numbers, CancellationToken cancellationToken)
    {
        var distinctNumbers = numbers.Distinct().ToList();
        var questions = await _repository.GetByNumbersAsync(distinctNumbers, cancellationToken);

        var ids = questions.Select(q => q.Id).ToList();
        var options = await _repository.GetOptionsAsync(ids, cancellationToken);
        var answerRows = await _repository.GetAnswerRowsAsync(ids, cancellationToken);

        var optionsByQuestion = options.ToLookup(o => o.QuestionId);
        var rowsByQuestion = answerRows.ToLookup(r => r.QuestionId);

        return questions.ToDictionary(
            q => q.Number,
            q => new GradedQuestion(q, optionsByQuestion[q.Id].ToList(), rowsByQuestion[q.Id].ToList()));
    }

    /// <summary>Una domanda con le sue opzioni/righe gia' caricate: evita di rifare le query per ogni operazione di correzione.</summary>
    private sealed record GradedQuestion(Question Source, IReadOnlyList<Option> Options, IReadOnlyList<AnswerRow> AnswerRows)
    {
        public int Number => Source.Number;
        public QuestionType Type => Source.Type;
        public string Explanation => Source.Explanation;
        public string AnswerText => Source.AnswerText;
        public string? Note => Source.Note;
    }
}
