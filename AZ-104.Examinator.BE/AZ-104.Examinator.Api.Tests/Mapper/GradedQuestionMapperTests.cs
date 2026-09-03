using Examinator.Api.Mapper;
using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using FluentAssertions;

namespace Examinator.Api.Tests.Mapper;

[TestClass]
public sealed class GradedQuestionMapperTests
{
    [TestMethod]
    public void Should_Map_GradedQuestion_Into_QuestionAnswerDto()
    {
        var question = Question();
        var options = Array.Empty<Option>();
        var answerRows = new[]
        {
            AnswerRow(ord: 0, prompt: "Statement 1", answer: "Yes"),
            AnswerRow(ord: 1, prompt: "Statement 2", answer: "No"),
        };
        var input = new GradedQuestion(question, options, answerRows);

        var sut = input.ToAnswerDto();

        var expected = QuestionAnswerDto(
            answerRows: [
                new AnswerRowDto("Statement 1", "Yes"), 
                new AnswerRowDto("Statement 2", "No")]);

        sut.Should().BeEquivalentTo(expected);
    }

    #region Utils

    private static Question Question() => new()
    {
        Id = 1,
        Number = 63,
        Type = QuestionType.HotspotYesNo,
        Text = "Domanda di prova",
        Explanation = "Spiegazione",
        AnswerText = "Statement 1 -> Yes | Statement 2 -> No",
        Source = "manual_vision",
    };

    private static AnswerRow AnswerRow(int ord = 0, string? prompt = null, string answer = "") => new()
    {
        QuestionId = 1,
        Ord = ord,
        Prompt = prompt,
        Answer = answer,
    };

    private static QuestionAnswerDto QuestionAnswerDto(
        int number = 63,
        string explanation = "Spiegazione",
        string answerText = "Statement 1 -> Yes | Statement 2 -> No",
        string? note = null,
        IReadOnlyList<string>? correctLetters = null,
        IReadOnlyList<AnswerRowDto>? answerRows = null) => new(
            number, 
            explanation, 
            answerText, 
            note,
            correctLetters ?? [],
            answerRows ?? []);

    #endregion
}
