using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Mapper;
using Examinator.Api.Repositories;
using Examinator.Api.Services.Interfaces;

namespace Examinator.Api.Services;

public sealed class ExamResultService : IExamResultService
{
    private readonly IQuestionRepository _repository;
    private readonly IScoreService _scorer;

    public ExamResultService(IQuestionRepository repository, IScoreService scorer)
    {
        _repository = repository;
        _scorer = scorer;
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

            var (earned, total) = _scorer.Score(question.Type, question.Options, question.AnswerRows, submission.UserAnswers ?? []);
            earnedTotal += earned;
            pointsTotal += total;
        }

        var percentage = pointsTotal == 0 ? 0d : Math.Round(100.0 * earnedTotal / pointsTotal, 1);
        return new ExamScoreDto(percentage);
    }

    public async Task<IReadOnlyList<AnswerCheckResultDto>> CheckAnswersAsync(IReadOnlyList<AnswerSubmissionDto> submissions, CancellationToken cancellationToken)
    {
        var graded = await LoadGradedQuestionsAsync(submissions.Select(s => s.QuestionNumber), cancellationToken);

        return submissions
            .Select(submission =>
            {
                if (!graded.TryGetValue(submission.QuestionNumber, out var question))
                    return new AnswerCheckResultDto(submission.QuestionNumber, submission.UserAnswers, null);

                var correctAnswer = question.ToAnswerDto();
                return new AnswerCheckResultDto(submission.QuestionNumber, submission.UserAnswers, correctAnswer);
            })
            .ToList();
    }

    /// <summary>Carica in blocco domande, opzioni e answer_rows per un insieme di numeri, pronte per essere corrette.</summary>
    private async Task<Dictionary<int, GradedQuestion>> LoadGradedQuestionsAsync(
        IEnumerable<int> numbers, CancellationToken cancellationToken)
    {
        var distinctNumbers = numbers.Distinct().ToList();
        var questions = await _repository.GetByNumbersAsync(distinctNumbers, cancellationToken);

        var ids = questions.Select(q => q.Id).ToList();
        var options = await _repository.GetOptionsAsync(ids, cancellationToken);
        var answerRows = await _repository.GetAnswerRowsAsync(ids, cancellationToken);
        var images = await _repository.GetImagesAsync(ids, cancellationToken);

        var optionsByQuestion = options.ToLookup(o => o.QuestionId);
        var rowsByQuestion = answerRows.ToLookup(r => r.QuestionId);
        var imagesByQuestion = images.ToLookup(i => i.QuestionId);

        return questions.ToDictionary(
            q => q.Number,
            q => new GradedQuestion(q, optionsByQuestion[q.Id].ToList(), rowsByQuestion[q.Id].ToList(), imagesByQuestion[q.Id].ToList()));
    }
}
