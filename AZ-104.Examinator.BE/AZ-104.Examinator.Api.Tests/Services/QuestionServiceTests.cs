using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Services;
using FluentAssertions;

namespace Examinator.Api.Tests.Services;

[TestClass]
public sealed class QuestionServiceTests
{
    [TestMethod]
    public async Task Should_Map_RandomQuestions_Into_QuestionDtos()
    {
        var repository = new FakeQuestionRepository
        {
            Questions = [Question()],
            Options = [Option()],
            AnswerRows = [],
        };
        var sut = new QuestionService(repository);

        var actual = await sut.GetRandomSetAsync(count: 1, type: null, CancellationToken.None);

        var expected = new[]
        {
            new QuestionDto(
                Number: 1,
                Type: "multiple_choice",
                Text: "Domanda di prova",
                Options: [new OptionDto("C", "Opzione corretta")],
                DraggableItems: [],
                Prompts: [],
                Images: []),
        };

        actual.Should().BeEquivalentTo(expected);
    }

    #region Utils

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

    #endregion
}
