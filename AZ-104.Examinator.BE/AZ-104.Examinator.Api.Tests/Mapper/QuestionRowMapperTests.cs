using Examinator.Api.Mapper;
using Examinator.Api.Models.Domains;
using FluentAssertions;

namespace Examinator.Api.Tests.Mapper;

[TestClass]
public sealed class QuestionRowMapperTests
{
    [TestMethod]
    public void Should_Map_QuestionRow_Into_Question()
    {
        var input = QuestionRow();

        var sut = input.ToQuestion();

        var expected = Question();

        sut.Should().BeEquivalentTo(expected);
    }

    #region Utils

    private static QuestionRow QuestionRow() => new(
        Id: 1,
        Number: 20,
        Type: "drag_and_drop",
        AnswerLayout: "ordered_answer",
        Text: "Testo della domanda",
        Explanation: "Spiegazione",
        AnswerText: "1. An Azure Key Vault -> 2. An access policy",
        Note: null,
        Source: "manual_vision",
        GroupId: "ss01",
        GroupType: "scenario_series");

    private static Question Question() => new()
    {
        Id = 1,
        Number = 20,
        Type = QuestionType.DragAndDrop,
        AnswerLayout = "ordered_answer",
        Text = "Testo della domanda",
        Explanation = "Spiegazione",
        AnswerText = "1. An Azure Key Vault -> 2. An access policy",
        Note = null,
        Source = "manual_vision",
        GroupId = "ss01",
        GroupType = "scenario_series",
    };

    #endregion
}
