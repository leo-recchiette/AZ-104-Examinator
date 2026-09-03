using Examinator.Api.Models.Domains;
using Examinator.Api.Services;
using FluentAssertions;

namespace Examinator.Api.Tests.Services;

[TestClass]
public sealed class ScoreServiceTests
{
    [TestMethod]
    public void Should_Score_MultipleChoiceAnswer_By_Component()
    {
        var options = new[]
        {
            Option(letter: "B", isCorrect: true),
            Option(letter: "D", isCorrect: true),
            Option(letter: "E", isCorrect: true),
        };
        var sut = new ScoreService();

        var actual = sut.Score(QuestionType.MultipleChoice, options, [], ["B", "D", "A"]);

        var expected = (Earned: 2, Total: 3);

        actual.Should().Be(expected);
    }

    #region Utils

    private static Option Option(string letter, bool isCorrect) => new()
    {
        QuestionId = 1,
        Ord = 0,
        Letter = letter,
        Text = "",
        IsCorrect = isCorrect,
    };

    #endregion
}
