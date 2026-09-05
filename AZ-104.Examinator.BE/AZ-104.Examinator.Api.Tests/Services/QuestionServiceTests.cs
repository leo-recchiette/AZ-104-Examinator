using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Repositories;
using Examinator.Api.Services;
using FluentAssertions;
using NSubstitute;

namespace Examinator.Api.Tests.Services;

[TestClass]
public sealed class QuestionServiceTests
{
    [TestMethod]
    public async Task Should_Map_RandomQuestions_Into_QuestionDtos()
    {
        var sut = new QuestionService(Repository(questions: [Question()], options: [Option()]));

        var actual = await sut.GetRandomSetAsync(count: 1, type: null, CancellationToken.None);

        var expected = new[]
        {
            QuestionDto("C")
        };

        actual.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public async Task Should_Add_Missing_Group_Siblings_To_The_Drawn_Set()
    {
        var sut = new QuestionService(Repository(
            questions: [Grouped(3, "ss01")],
            options: [],
            groupMembers: [Grouped(4, "ss01"), Grouped(2, "ss01"), Grouped(3, "ss01")]));

        var actual = await sut.GetRandomSetAsync(count: 1, type: null, CancellationToken.None);

        actual.Select(q => q.Number).Should().Equal(2, 3, 4);
    }

    [TestMethod]
    public async Task Should_Keep_Group_Members_Contiguous_Where_The_Group_First_Appeared()
    {
        var sut = new QuestionService(Repository(
            questions: [Question(), Grouped(3, "ss01"), Grouped(50, "ss09"), Grouped(2, "ss01")],
            options: [],
            groupMembers: [Grouped(2, "ss01"), Grouped(3, "ss01"), Grouped(50, "ss09"), Grouped(51, "ss09")]));

        var actual = await sut.GetRandomSetAsync(count: 4, type: null, CancellationToken.None);

        actual.Select(q => q.Number).Should().Equal(1, 2, 3, 50, 51);
    }

    [TestMethod]
    public async Task Should_Not_Query_Siblings_When_Nothing_Drawn_Belongs_To_A_Group()
    {
        var repository = Repository(questions: [Question()], options: [Option()]);
        var sut = new QuestionService(repository);

        await sut.GetRandomSetAsync(count: 1, type: null, CancellationToken.None);

        await repository.DidNotReceive().GetByGroupIdsAsync(Arg.Any<IReadOnlyCollection<string>>(), Arg.Any<CancellationToken>());
    }

    #region Utils

    private static IQuestionRepository Repository(
        IReadOnlyList<Question> questions,
        IReadOnlyList<Option> options,
        IReadOnlyList<Question>? groupMembers = null)
    {
        var repository = Substitute.For<IQuestionRepository>();
        repository.GetRandomAsync(Arg.Any<int>(), Arg.Any<QuestionType?>(), Arg.Any<CancellationToken>()).Returns(questions);
        repository.GetByGroupIdsAsync(Arg.Any<IReadOnlyCollection<string>>(), Arg.Any<CancellationToken>()).Returns(groupMembers ?? []);
        repository.GetOptionsAsync(Arg.Any<IReadOnlyCollection<int>>(), Arg.Any<CancellationToken>()).Returns(options);
        repository.GetAnswerRowsAsync(Arg.Any<IReadOnlyCollection<int>>(), Arg.Any<CancellationToken>()).Returns([]);
        repository.GetAnswerRowOptionsAsync(Arg.Any<IReadOnlyCollection<int>>(), Arg.Any<CancellationToken>()).Returns([]);
        repository.GetImagesAsync(Arg.Any<IReadOnlyCollection<int>>(), Arg.Any<CancellationToken>()).Returns([]);
        return repository;
    }

    private static Question Grouped(int number, string groupId) => new()
    {
        Id = number,
        Number = number,
        Type = QuestionType.MultipleChoice,
        Text = $"Domanda {number}",
        Explanation = "Spiegazione",
        AnswerText = "C. Opzione corretta",
        Source = "text_layer",
        GroupId = groupId,
        GroupType = "scenario_series",
    };

    private static Question Question() => new()
    {
        Id = 1,
        Number = 1,
        Type = QuestionType.MultipleChoice,
        Text = "Domanda di prova",
        Explanation = "Spiegazione",
        AnswerText = "C. Opzione corretta",
        Source = "text_layer",
    };

    private static Option Option() => new()
    {
        QuestionId = 1,
        Ord = 0,
        Letter = "C",
        Text = "Opzione corretta",
        IsCorrect = true,
    };

    private static QuestionDto QuestionDto(string CorrectOption) => new(
        Number: 1,
        Type: "multiple_choice",
        Text: "Domanda di prova",
        Options: [new OptionDto(CorrectOption, "Opzione corretta")],
        DraggableItems: [],
        Prompts: [],
        Images: [],
        GroupId: null,
        GroupType: null);

    #endregion
}
