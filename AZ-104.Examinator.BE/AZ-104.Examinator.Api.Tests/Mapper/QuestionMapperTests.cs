using Examinator.Api.Mapper;
using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using FluentAssertions;

namespace Examinator.Api.Tests.Mapper;

[TestClass]
public sealed class QuestionMapperTests
{
    [TestMethod]
    public void Should_Map_Question_Into_QuestionDto()
    {
        var input = Question();
        var options = new[]
        {
            Option(ord: 0, letter: "A", text: "Opzione sbagliata", isCorrect: false),
            Option(ord: 1, letter: "C", text: "Opzione corretta", isCorrect: true),
        };
        var answerRows = new[] { AnswerRow(ord: 0, prompt: "Statement", answer: "Yes") };

        var sut = input.ToQuestionDto(options, answerRows);

        var expected = new QuestionDto(
            Number: 1,
            Type: "multiple_choice",
            Text: "Domanda di prova",
            Options: [new OptionDto("A", "Opzione sbagliata"), new OptionDto("C", "Opzione corretta")],
            Prompts: ["Statement"]);

        sut.Should().BeEquivalentTo(expected);
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

    private static Option Option(int ord = 0, string letter = "A", string text = "", bool isCorrect = false) => new()
    {
        QuestionId = 1,
        Ord = ord,
        Letter = letter,
        Text = text,
        IsCorrect = isCorrect,
    };

    private static AnswerRow AnswerRow(int ord = 0, string? prompt = null, string answer = "") => new()
    {
        QuestionId = 1,
        Ord = ord,
        Prompt = prompt,
        Answer = answer,
    };

    #endregion
}
