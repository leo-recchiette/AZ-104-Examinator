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
        Images: []);

    #endregion
}
