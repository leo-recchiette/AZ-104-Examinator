using Examinator.Api.Mapper;
using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Repositories;
using Examinator.Api.Services.Interfaces;

namespace Examinator.Api.Services;

public sealed class ExamAttemptService : IExamAttemptService
{
    private readonly IExamAttemptRepository _repository;
    private readonly IExamResultService _examResultService;

    public ExamAttemptService(IExamAttemptRepository repository, IExamResultService examResultService)
    {
        _repository = repository;
        _examResultService = examResultService;
    }

    public async Task<ExamAttemptDto> SaveAttemptAsync(SaveExamAttemptDto request, CancellationToken cancellationToken)
    {
        var attempt = new ExamAttempt
        {
            Mode = request.Mode,
            QuestionCount = request.QuestionCount,
            Percentage = request.Percentage,
            StartTime = request.StartTime,
            EndTime = request.EndTime,
        };
        // L'ordine della lista e' l'ordine di presentazione: il repository lo trasforma in "ord",
        // qui non si riordina nulla (per i gruppi non coincide con l'ordine dei numeri).
        var answers = (request.Answers ?? [])
            .Select(a => new ExamAttemptAnswer
            {
                QuestionNumber = a.QuestionNumber,
                UserAnswers = a.UserAnswers ?? [],
            })
            .ToList();

        var saved = await _repository.InsertAsync(attempt, answers, cancellationToken);
        return saved.ToDto();
    }

    public async Task<IReadOnlyList<ExamAttemptDto>> GetAllAttemptsAsync(CancellationToken cancellationToken)
    {
        var attempts = await _repository.GetAllAsync(cancellationToken);
        return attempts.Select(a => a.ToDto()).ToList();
    }

    public async Task<ExamAttemptDetailDto?> GetAttemptDetailAsync(int id, CancellationToken cancellationToken)
    {
        var detail = await _repository.GetDetailAsync(id, cancellationToken);
        if (detail is null)
            return null;

        // Le domande non sono salvate nel tentativo (solo i loro numeri): il testo e la soluzione
        // si rileggono dal question bank, che e' l'unica copia buona di quei dati.
        var submissions = detail.Answers
            .Select(a => new AnswerSubmissionDto(a.QuestionNumber, a.UserAnswers))
            .ToList();
        IReadOnlyList<AttemptAnswerDto> answers = submissions.Count == 0
            ? []
            : await _examResultService.ReviewAsync(submissions, cancellationToken);

        return new ExamAttemptDetailDto(detail.Attempt.ToDto(), answers);
    }
}
