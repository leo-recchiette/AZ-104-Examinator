using Examinator.Api.Mapper;
using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Repositories;
using Examinator.Api.Services.Interfaces;

namespace Examinator.Api.Services;

public sealed class ExamAttemptService : IExamAttemptService
{
    private readonly IExamAttemptRepository _repository;

    public ExamAttemptService(IExamAttemptRepository repository)
    {
        _repository = repository;
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
        var saved = await _repository.InsertAsync(attempt, cancellationToken);
        return saved.ToDto();
    }

    public async Task<IReadOnlyList<ExamAttemptDto>> GetAllAttemptsAsync(CancellationToken cancellationToken)
    {
        var attempts = await _repository.GetAllAsync(cancellationToken);
        return attempts.Select(a => a.ToDto()).ToList();
    }
}
