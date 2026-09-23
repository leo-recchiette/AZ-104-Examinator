using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Repositories;
using Examinator.Api.Services;
using Examinator.Api.Services.Interfaces;
using FluentAssertions;
using NSubstitute;

namespace Examinator.Api.Tests.Services;

[TestClass]
public sealed class ActiveSessionServiceTests
{
    [TestMethod]
    public async Task Should_Rebuild_The_Session_With_Its_Questions()
    {
        var repository = Repository(Session([7, 3, 9]));
        var sut = new ActiveSessionService(repository, QuestionService(7, 3, 9));

        var actual = await sut.GetAsync(CancellationToken.None);

        actual.Should().NotBeNull();
        actual!.Questions.Select(q => q.Number).Should().Equal(7, 3, 9);
        actual.CurrentIndex.Should().Be(1);
        actual.Answers.Should().ContainKey(7);
    }

    [TestMethod]
    public async Task Should_Discard_The_Session_When_A_Question_No_Longer_Exists()
    {
        // Dopo un reimport gli indici salvati punterebbero alla domanda sbagliata.
        var repository = Repository(Session([7, 3, 9]));
        var sut = new ActiveSessionService(repository, QuestionService(7, 9));

        var actual = await sut.GetAsync(CancellationToken.None);

        actual.Should().BeNull();
        await repository.Received(1).DeleteAsync(Arg.Any<CancellationToken>());
    }

    [TestMethod]
    public async Task Should_Return_Null_When_There_Is_No_Session()
    {
        var repository = Substitute.For<IActiveSessionRepository>();
        repository.GetAsync(Arg.Any<CancellationToken>()).Returns((ActiveSession?)null);
        var sut = new ActiveSessionService(repository, QuestionService());

        var actual = await sut.GetAsync(CancellationToken.None);

        actual.Should().BeNull();
    }

    [TestMethod]
    public async Task Should_Clamp_A_CurrentIndex_Outside_The_Question_List()
    {
        var repository = Substitute.For<IActiveSessionRepository>();
        var sut = new ActiveSessionService(repository, QuestionService());

        await sut.SaveAsync(SaveRequest([7, 3, 9], currentIndex: 12), CancellationToken.None);

        await repository.Received(1).SaveAsync(
            Arg.Is<ActiveSession>(s => s.CurrentIndex == 2),
            Arg.Any<CancellationToken>());
    }

    [TestMethod]
    public async Task Should_Save_What_It_Was_Given()
    {
        var repository = Substitute.For<IActiveSessionRepository>();
        var sut = new ActiveSessionService(repository, QuestionService());

        await sut.SaveAsync(SaveRequest([7, 3], currentIndex: 1), CancellationToken.None);

        await repository.Received(1).SaveAsync(
            Arg.Is<ActiveSession>(s =>
                s.Mode == "practice"
                && s.QuestionNumbers.SequenceEqual(new[] { 7, 3 })
                && s.FlaggedIndexes.SequenceEqual(new[] { 1 })
                && s.AutoReveal
                && s.TimeLimitSeconds == 1800),
            Arg.Any<CancellationToken>());
    }

    [TestMethod]
    public async Task Should_Not_Save_A_Session_Without_A_Single_Answer()
    {
        var repository = Substitute.For<IActiveSessionRepository>();
        var sut = new ActiveSessionService(repository, QuestionService());

        await sut.SaveAsync(SaveRequest([7, 3], currentIndex: 0, answers: new Dictionary<int, IReadOnlyList<string>>()), CancellationToken.None);

        await repository.DidNotReceive().SaveAsync(Arg.Any<ActiveSession>(), Arg.Any<CancellationToken>());
    }

    [TestMethod]
    public async Task Should_Drop_The_Stored_Session_When_Every_Answer_Is_Erased()
    {
        // Una riga gia' presente sul server va cancellata.
        var repository = Substitute.For<IActiveSessionRepository>();
        var sut = new ActiveSessionService(repository, QuestionService());

        await sut.SaveAsync(SaveRequest([7, 3], currentIndex: 0, answers: new Dictionary<int, IReadOnlyList<string>>()), CancellationToken.None);

        await repository.Received(1).DeleteAsync(Arg.Any<CancellationToken>());
    }

    [TestMethod]
    public async Task Should_Treat_Blank_Answers_As_No_Answer()
    {
        // Le righe non compilate arrivano come stringhe vuote.
        var repository = Substitute.For<IActiveSessionRepository>();
        var sut = new ActiveSessionService(repository, QuestionService());

        var blank = new Dictionary<int, IReadOnlyList<string>> { [7] = ["", "  "] };
        await sut.SaveAsync(SaveRequest([7, 3], currentIndex: 0, answers: blank), CancellationToken.None);

        await repository.DidNotReceive().SaveAsync(Arg.Any<ActiveSession>(), Arg.Any<CancellationToken>());
    }

    [TestMethod]
    public async Task Should_Save_When_Even_One_Row_Of_A_Question_Is_Answered()
    {
        var repository = Substitute.For<IActiveSessionRepository>();
        var sut = new ActiveSessionService(repository, QuestionService());

        var partial = new Dictionary<int, IReadOnlyList<string>> { [7] = ["", "Yes"] };
        await sut.SaveAsync(SaveRequest([7, 3], currentIndex: 0, answers: partial), CancellationToken.None);

        await repository.Received(1).SaveAsync(Arg.Any<ActiveSession>(), Arg.Any<CancellationToken>());
    }

    #region Utils

    private static IActiveSessionRepository Repository(ActiveSession session)
    {
        var repository = Substitute.For<IActiveSessionRepository>();
        repository.GetAsync(Arg.Any<CancellationToken>()).Returns(session);
        return repository;
    }

    private static IQuestionService QuestionService(params int[] existingNumbers)
    {
        var service = Substitute.For<IQuestionService>();
        service.GetByNumbersAsync(Arg.Any<IReadOnlyList<int>>(), Arg.Any<CancellationToken>())
            .Returns(call =>
            {
                var requested = call.Arg<IReadOnlyList<int>>();
                return (IReadOnlyList<QuestionDto>)requested
                    .Where(existingNumbers.Contains)
                    .Select(Dto)
                    .ToList();
            });
        return service;
    }

    private static QuestionDto Dto(int number) =>
        new(number, "multiple_choice", $"Domanda {number}", [], [], 0, [], [], null, null);

    private static ActiveSession Session(IReadOnlyList<int> numbers) => new()
    {
        Mode = "practice",
        QuestionNumbers = numbers,
        Answers = new Dictionary<int, IReadOnlyList<string>> { [7] = ["A"] },
        FlaggedIndexes = [1],
        CurrentIndex = 1,
        TimeLimitSeconds = 1800,
        AutoReveal = false,
        StartedAt = DateTimeOffset.UnixEpoch,
        SavedAt = DateTimeOffset.UnixEpoch.AddMinutes(5),
    };

    private static SaveActiveSessionDto SaveRequest(
        IReadOnlyList<int> questionNumbers,
        int currentIndex,
        IReadOnlyDictionary<int, IReadOnlyList<string>>? answers = null) =>
        new(
            "practice",
            questionNumbers,
            answers ?? new Dictionary<int, IReadOnlyList<string>> { [7] = ["A"] },
            [1],
            currentIndex,
            1800,
            AutoReveal: true,
            DateTimeOffset.UnixEpoch,
            DateTimeOffset.UnixEpoch.AddMinutes(5));

    #endregion
}
