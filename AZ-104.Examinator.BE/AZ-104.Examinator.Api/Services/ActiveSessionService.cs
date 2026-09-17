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
        // Una sessione in cui non e' stata data nemmeno una risposta non e' qualcosa da riprendere:
        // e' un set di domande appena estratto, che ricominciare da capo costa quanto riprendere.
        // Stesso criterio con cui lo storico scarta le sessioni mai giocate ("almeno una risposta
        // non vuota", non "almeno una domanda completa": una sola riga di una hotspot conta gia').
        // La cancellazione invece del semplice "non salvare" serve al caso in cui la sessione ci
        // fosse gia': svuotata di tutte le risposte, quello che resta sul server non va ripreso.
        if (!HasAnyAnswer(request.Answers))
            return _repository.DeleteAsync(cancellationToken);

        var session = new ActiveSession
        {
            Mode = request.Mode,
            QuestionNumbers = request.QuestionNumbers,
            Answers = request.Answers,
            FlaggedIndexes = request.FlaggedIndexes,
            // Un indice fuori dall'elenco riaprirebbe la sessione su una domanda che non esiste:
            // viene riportato dentro i limiti qui, non lasciato passare fino al client.
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

    /// <summary>Le righe lasciate in bianco arrivano come stringhe vuote: non contano come risposta.</summary>
    private static bool HasAnyAnswer(IReadOnlyDictionary<int, IReadOnlyList<string>> answers)
        => answers.Values.Any(answer => answer.Any(value => !string.IsNullOrWhiteSpace(value)));
}
