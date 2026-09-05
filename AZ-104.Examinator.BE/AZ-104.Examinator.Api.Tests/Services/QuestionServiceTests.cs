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
    public async Task Should_Preserve_The_Order_Returned_By_The_Repository()
    {
        // Contiguita' e ordine dei gruppi li decide la query di estrazione (sorteggio per unita'):
        // al service resta il compito di non rimescolare quello che riceve.
        var sut = new QuestionService(Repository(
            questions: [Question(), Grouped(2, "ss01"), Grouped(3, "ss01"), Grouped(50, "ss09")],
            options: []));

        var actual = await sut.GetRandomSetAsync(count: 3, type: null, CancellationToken.None);

        actual.Select(q => q.Number).Should().Equal(1, 2, 3, 50);
    }

    #region Utils

    private static IQuestionRepository Repository(IReadOnlyList<Question> questions, IReadOnlyList<Option> options)
    {
        var repository = Substitute.For<IQuestionRepository>();
        repository.GetRandomAsync(Arg.Any<int>(), Arg.Any<QuestionType?>(), Arg.Any<CancellationToken>()).Returns(questions);
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
