using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Repositories;
using Examinator.Api.Services;
using Examinator.Api.Services.Interfaces;
using FluentAssertions;
using NSubstitute;

namespace Examinator.Api.Tests.Services;

[TestClass]
public sealed class ExamAttemptServiceTests
{
    [TestMethod]
    public async Task Should_Map_Request_Into_Domain_Attempt()
    {
        ExamAttempt? inserted = null;
        var repository = Substitute.For<IExamAttemptRepository>();
        repository
            .InsertAsync(Arg.Do<ExamAttempt>(attempt => inserted = attempt), Arg.Any<IReadOnlyList<ExamAttemptAnswer>>(), Arg.Any<CancellationToken>())
            .Returns(Saved());
        var sut = Sut(repository);

        await sut.SaveAttemptAsync(SaveRequest(), CancellationToken.None);

        // Id e CompletedAt li assegna il database, la richiesta non li porta.
        var expected = new ExamAttempt
        {
            Mode = "practice",
            QuestionCount = 30,
            Percentage = 76.5,
            StartTime = StartTime,
            EndTime = EndTime,
        };

        inserted.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public async Task Should_Pass_Answers_To_Repository_In_Submission_Order()
    {
        IReadOnlyList<ExamAttemptAnswer>? inserted = null;
        var repository = Substitute.For<IExamAttemptRepository>();
        repository
            .InsertAsync(Arg.Any<ExamAttempt>(), Arg.Do<IReadOnlyList<ExamAttemptAnswer>>(answers => inserted = answers), Arg.Any<CancellationToken>())
            .Returns(Saved());
        var sut = Sut(repository);

        await sut.SaveAttemptAsync(SaveRequest(), CancellationToken.None);

        // L'ordine e' quello di presentazione (qui 7 prima di 3): diventa "ord" sul database ed e'
        // l'unica traccia di come la sessione era stata proposta.
        var expected = new[]
        {
            new ExamAttemptAnswer { QuestionNumber = 7, UserAnswers = ["C"] },
            new ExamAttemptAnswer { QuestionNumber = 3, UserAnswers = [] },
        };

        inserted.Should().BeEquivalentTo(expected, options => options.WithStrictOrdering());
    }

    [TestMethod]
    public async Task Should_Save_An_Attempt_That_Carries_No_Answers()
    {
        IReadOnlyList<ExamAttemptAnswer>? inserted = null;
        var repository = Substitute.For<IExamAttemptRepository>();
        repository
            .InsertAsync(Arg.Any<ExamAttempt>(), Arg.Do<IReadOnlyList<ExamAttemptAnswer>>(answers => inserted = answers), Arg.Any<CancellationToken>())
            .Returns(Saved());
        var sut = Sut(repository);

        // Un client che non manda affatto il dettaglio (una versione precedente del frontend):
        // il tentativo si registra lo stesso, altrimenti si perderebbe anche il punteggio.
        await sut.SaveAttemptAsync(SaveRequest() with { Answers = null }, CancellationToken.None);

        inserted.Should().BeEmpty();
    }

    [TestMethod]
    public async Task Should_Return_Saved_Attempt_Not_The_Requested_One()
    {
        // La insert reale fa un RETURNING: il substitute restituisce percio' un'entita' diversa da
        // quella ricevuta, altrimenti mappare la richiesta o il risultato sarebbe indistinguibile.
        var repository = Substitute.For<IExamAttemptRepository>();
        repository
            .InsertAsync(Arg.Any<ExamAttempt>(), Arg.Any<IReadOnlyList<ExamAttemptAnswer>>(), Arg.Any<CancellationToken>())
            .Returns(call => call.Arg<ExamAttempt>() with { Id = 7, CompletedAt = CompletedAt });
        var sut = Sut(repository);

        var actual = await sut.SaveAttemptAsync(SaveRequest(), CancellationToken.None);

        // Se il service mappasse la richiesta invece del risultato della insert, Id sarebbe 0 e CompletedAt default.
        var expected = new ExamAttemptDto(
            Id: 7,
            Mode: "practice",
            QuestionCount: 30,
            Percentage: 76.5,
            StartTime: StartTime,
            EndTime: EndTime,
            CompletedAt: CompletedAt);

        actual.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public async Task Should_Map_All_Attempts_Preserving_Repository_Order()
    {
        var repository = Substitute.For<IExamAttemptRepository>();
        repository
            .GetAllAsync(Arg.Any<CancellationToken>())
            .Returns([Attempt(1, 50), Attempt(2, 60), Attempt(3, 90)]);
        var sut = Sut(repository);

        var actual = await sut.GetAllAttemptsAsync(CancellationToken.None);

        // L'ordine e' quello deciso dal repository (dal piu' vecchio al piu' recente): il grafico "Your progress" ci si appoggia, il service non deve riordinare.
        var expected = new[] { AttemptDto(1, 50), AttemptDto(2, 60), AttemptDto(3, 90) };

        actual.Should().BeEquivalentTo(expected, options => options.WithStrictOrdering());
    }

    [TestMethod]
    public async Task Should_Return_Empty_History_When_No_Attempts_Saved()
    {
        var repository = Substitute.For<IExamAttemptRepository>();
        repository.GetAllAsync(Arg.Any<CancellationToken>()).Returns([]);
        var sut = Sut(repository);

        var actual = await sut.GetAllAttemptsAsync(CancellationToken.None);

        actual.Should().BeEmpty();
    }

    [TestMethod]
    public async Task Should_Forward_CancellationToken_To_Repository()
    {
        var repository = Substitute.For<IExamAttemptRepository>();
        repository.InsertAsync(Arg.Any<ExamAttempt>(), Arg.Any<IReadOnlyList<ExamAttemptAnswer>>(), Arg.Any<CancellationToken>()).Returns(Saved());
        var sut = Sut(repository);
        using var cts = new CancellationTokenSource();

        await sut.SaveAttemptAsync(SaveRequest(), cts.Token);

        await repository.Received(1).InsertAsync(Arg.Any<ExamAttempt>(), Arg.Any<IReadOnlyList<ExamAttemptAnswer>>(), cts.Token);
    }

    [TestMethod]
    public async Task Should_Return_Null_Detail_When_Attempt_Does_Not_Exist()
    {
        var repository = Substitute.For<IExamAttemptRepository>();
        repository.GetDetailAsync(404, Arg.Any<CancellationToken>()).Returns((ExamAttemptDetail?)null);
        var examResultService = Substitute.For<IExamResultService>();
        var sut = new ExamAttemptService(repository, examResultService);

        var actual = await sut.GetAttemptDetailAsync(404, CancellationToken.None);

        actual.Should().BeNull();
        // Nessuna domanda da rileggere: il question bank non va nemmeno interrogato.
        await examResultService.DidNotReceiveWithAnyArgs().ReviewAsync(default!, default);
    }

    [TestMethod]
    public async Task Should_Rebuild_Detail_From_Saved_Question_Numbers()
    {
        var savedAnswers = new[]
        {
            new ExamAttemptAnswer { QuestionNumber = 7, UserAnswers = ["C"] },
            new ExamAttemptAnswer { QuestionNumber = 3, UserAnswers = [] },
        };
        var repository = Substitute.For<IExamAttemptRepository>();
        repository.GetDetailAsync(42, Arg.Any<CancellationToken>()).Returns(new ExamAttemptDetail(Saved(), savedAnswers));

        IReadOnlyList<AnswerSubmissionDto>? reviewed = null;
        var examResultService = Substitute.For<IExamResultService>();
        examResultService
            .ReviewAsync(Arg.Do<IReadOnlyList<AnswerSubmissionDto>>(s => reviewed = s), Arg.Any<CancellationToken>())
            .Returns([ReviewedAnswer(7, ["C"]), ReviewedAnswer(3, [])]);
        var sut = new ExamAttemptService(repository, examResultService);

        var actual = await sut.GetAttemptDetailAsync(42, CancellationToken.None);

        // Il tentativo salva solo i numeri delle domande: testo e soluzione si rileggono dal bank,
        // nell'ordine in cui erano state proposte.
        reviewed.Should().BeEquivalentTo(
            new[] { new AnswerSubmissionDto(7, ["C"]), new AnswerSubmissionDto(3, []) },
            options => options.WithStrictOrdering());
        actual!.Attempt.Id.Should().Be(42);
        actual.Answers.Select(a => a.QuestionNumber).Should().Equal(7, 3);
    }

    [TestMethod]
    public async Task Should_Return_Detail_Without_Questions_For_A_Legacy_Attempt()
    {
        // Tentativi registrati prima che si salvassero anche le risposte: l'intestazione c'e',
        // il dettaglio no. Vanno mostrati lo stesso, non trattati come inesistenti.
        var repository = Substitute.For<IExamAttemptRepository>();
        repository.GetDetailAsync(42, Arg.Any<CancellationToken>()).Returns(new ExamAttemptDetail(Saved(), []));
        var examResultService = Substitute.For<IExamResultService>();
        var sut = new ExamAttemptService(repository, examResultService);

        var actual = await sut.GetAttemptDetailAsync(42, CancellationToken.None);

        actual!.Answers.Should().BeEmpty();
        await examResultService.DidNotReceiveWithAnyArgs().ReviewAsync(default!, default);
    }

    #region Utils

    private static readonly DateTimeOffset StartTime = new(2026, 3, 1, 10, 0, 0, TimeSpan.Zero);
    private static readonly DateTimeOffset EndTime = new(2026, 3, 1, 11, 30, 0, TimeSpan.Zero);
    private static readonly DateTimeOffset CompletedAt = new(2026, 3, 1, 11, 30, 5, TimeSpan.Zero);

    private static ExamAttemptService Sut(IExamAttemptRepository repository) =>
        new(repository, Substitute.For<IExamResultService>());

    private static SaveExamAttemptDto SaveRequest() => new(
        Mode: "practice",
        QuestionCount: 30,
        Percentage: 76.5,
        StartTime: StartTime,
        EndTime: EndTime,
        // Una risposta data e una lasciata in bianco: anche la seconda va salvata, altrimenti
        // rileggendo il tentativo la domanda sembrerebbe non essere mai stata proposta.
        Answers: [new AnswerSubmissionDto(7, ["C"]), new AnswerSubmissionDto(3, [])]);

    private static AttemptAnswerDto ReviewedAnswer(int number, IReadOnlyList<string> userAnswers) =>
        new(number, userAnswers, Question: null, CorrectAnswer: null);

    /// <summary>Entita' come torna dal RETURNING della insert, per i test a cui l'esito non interessa.</summary>
    private static ExamAttempt Saved() => new()
    {
        Id = 42,
        Mode = "practice",
        QuestionCount = 30,
        Percentage = 76.5,
        StartTime = StartTime,
        EndTime = EndTime,
        CompletedAt = CompletedAt,
    };

    private static ExamAttempt Attempt(int id, double percentage) => new()
    {
        Id = id,
        Mode = "exam",
        QuestionCount = 60,
        Percentage = percentage,
        StartTime = StartTime.AddDays(id),
        EndTime = EndTime.AddDays(id),
        CompletedAt = CompletedAt.AddDays(id),
    };

    private static ExamAttemptDto AttemptDto(int id, double percentage) => new(
        Id: id,
        Mode: "exam",
        QuestionCount: 60,
        Percentage: percentage,
        StartTime: StartTime.AddDays(id),
        EndTime: EndTime.AddDays(id),
        CompletedAt: CompletedAt.AddDays(id));

    #endregion
}
