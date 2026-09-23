using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Repositories;
using Examinator.Api.Services.Interfaces;

namespace Examinator.Api.Services;

public sealed class ActiveSessionService : IActiveSessionService
{
    private readonly IActiveSessionRepository _repository;
    private readonly IQuestionService _questionService;

    public ActiveSessionService(IActiveSessionRepository repository, IQuestionService questionService)
    {
        _repository = repository;
        _questionService = questionService;
    }

    public async Task<ActiveSessionDto?> GetAsync(CancellationToken cancellationToken)
    {
        var session = await _repository.GetAsync(cancellationToken);
        if (session is null)
            return null;

        var questions = await _questionService.GetByNumbersAsync(session.QuestionNumbers, cancellationToken);

        if (questions.Count != session.QuestionNumbers.Count)
        {
            await _repository.DeleteAsync(cancellationToken);
            return null;
        }

        return new ActiveSessionDto(
            session.Mode,
            questions,
            session.Answers,
            session.FlaggedIndexes,
            session.CurrentIndex,
            session.TimeLimitSeconds,
            session.AutoReveal,
            session.StartedAt,
            session.SavedAt);
    }

    public Task SaveAsync(SaveActiveSessionDto request, CancellationToken cancellationToken)
    {
        // Senza risposte non c'e' niente da riprendere. Si cancella, non si salta: una sessione gia'
        // salvata e poi svuotata non deve restare sul server.
        if (!HasAnyAnswer(request.Answers))
            return _repository.DeleteAsync(cancellationToken);

        var session = new ActiveSession
        {
            Mode = request.Mode,
            QuestionNumbers = request.QuestionNumbers,
            Answers = request.Answers,
            FlaggedIndexes = request.FlaggedIndexes,
            CurrentIndex = Math.Clamp(request.CurrentIndex, 0, Math.Max(0, request.QuestionNumbers.Count - 1)),
            TimeLimitSeconds = request.TimeLimitSeconds,
            AutoReveal = request.AutoReveal,
            StartedAt = request.StartedAt,
            SavedAt = request.SavedAt,
        };

        return _repository.SaveAsync(session, cancellationToken);
    }

    public Task DeleteAsync(CancellationToken cancellationToken) 
        => _repository.DeleteAsync(cancellationToken);

    private static bool HasAnyAnswer(IReadOnlyDictionary<int, IReadOnlyList<string>> answers)
        => answers.Values.Any(answer => answer.Any(value => !string.IsNullOrWhiteSpace(value)));
}
