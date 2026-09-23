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

    [TestMethod]
    public void Should_Score_RowBasedAnswer_Positionally()
    {
        var answerRows = new[] { Row(ord: 0, answer: "Blob"), Row(ord: 1, answer: "Container") };
        var sut = new ScoreService();

        var actual = sut.Score(QuestionType.Hotspot, [], answerRows, ["Blob", "Object"]);

        var expected = (Earned: 1, Total: 2);

        actual.Should().Be(expected);
    }

    [TestMethod]
    public void Should_Score_MultiValueRow_Only_On_Exact_Set_Match()
    {
        // Domanda 242: risposta salvata come "{Read,List}", scelte dell'utente unite da "\n".
        var answerRows = new[] { Row(ord: 0, answer: "{Read,List}") };
        var sut = new ScoreService();
        var fullMatch = (Earned: 1, Total: 1);
        var noMatch = (Earned: 0, Total: 1);

        sut.Score(QuestionType.Hotspot, [], answerRows, ["Read\nList"]).Should().Be(fullMatch);
        sut.Score(QuestionType.Hotspot, [], answerRows, ["List\nRead"]).Should().Be(fullMatch);
        sut.Score(QuestionType.Hotspot, [], answerRows, ["Read"]).Should().Be(noMatch);
        sut.Score(QuestionType.Hotspot, [], answerRows, ["Read\nList\nWrite"]).Should().Be(noMatch);
    }

    [TestMethod]
    public void Should_Not_Throw_When_A_Row_Was_Never_Answered()
    {
        // Regressione: una riga mai toccata arriva come null e mandava in 500 l'intera submission.
        var answerRows = new[] { Row(ord: 0, answer: "Blob"), Row(ord: 1, answer: "Container") };
        var sut = new ScoreService();

        var actual = sut.Score(QuestionType.Hotspot, [], answerRows, ["Blob", null!]);

        var expected = (Earned: 1, Total: 2);

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

    private static AnswerRow Row(int ord, string answer) => new()
    {
        QuestionId = 1,
        Ord = ord,
        Prompt = "",
        Answer = answer,
    };

    #endregion
}
