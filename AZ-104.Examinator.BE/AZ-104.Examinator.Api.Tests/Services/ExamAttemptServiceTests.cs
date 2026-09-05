using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Repositories;
using Examinator.Api.Services;
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
            .InsertAsync(Arg.Do<ExamAttempt>(attempt => inserted = attempt), Arg.Any<CancellationToken>())
            .Returns(Saved());
        var sut = new ExamAttemptService(repository);

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
    public async Task Should_Return_Saved_Attempt_Not_The_Requested_One()
    {
        // La insert reale fa un RETURNING: il substitute restituisce percio' un'entita' diversa da
        // quella ricevuta, altrimenti mappare la richiesta o il risultato sarebbe indistinguibile.
        var repository = Substitute.For<IExamAttemptRepository>();
        repository
            .InsertAsync(Arg.Any<ExamAttempt>(), Arg.Any<CancellationToken>())
            .Returns(call => call.Arg<ExamAttempt>() with { Id = 7, CompletedAt = CompletedAt });
        var sut = new ExamAttemptService(repository);

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
        var sut = new ExamAttemptService(repository);

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
        var sut = new ExamAttemptService(repository);

        var actual = await sut.GetAllAttemptsAsync(CancellationToken.None);

        actual.Should().BeEmpty();
    }

    [TestMethod]
    public async Task Should_Forward_CancellationToken_To_Repository()
    {
        var repository = Substitute.For<IExamAttemptRepository>();
        repository.InsertAsync(Arg.Any<ExamAttempt>(), Arg.Any<CancellationToken>()).Returns(Saved());
        var sut = new ExamAttemptService(repository);
        using var cts = new CancellationTokenSource();

        await sut.SaveAttemptAsync(SaveRequest(), cts.Token);

        await repository.Received(1).InsertAsync(Arg.Any<ExamAttempt>(), cts.Token);
    }

    #region Utils

    private static readonly DateTimeOffset StartTime = new(2026, 3, 1, 10, 0, 0, TimeSpan.Zero);
    private static readonly DateTimeOffset EndTime = new(2026, 3, 1, 11, 30, 0, TimeSpan.Zero);
    private static readonly DateTimeOffset CompletedAt = new(2026, 3, 1, 11, 30, 5, TimeSpan.Zero);

    private static SaveExamAttemptDto SaveRequest() => new(
        Mode: "practice",
        QuestionCount: 30,
        Percentage: 76.5,
        StartTime: StartTime,
        EndTime: EndTime);

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
