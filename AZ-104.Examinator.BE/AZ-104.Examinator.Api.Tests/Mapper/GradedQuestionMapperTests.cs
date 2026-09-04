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
        var input = new GradedQuestion(question, options, answerRows, []);

        var sut = input.ToAnswerDto();

        var expected = QuestionAnswerDto(
            answerRows: [
                new AnswerRowDto("Statement 1", "Yes"),
                new AnswerRowDto("Statement 2", "No")]);

        sut.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public void Should_Not_Populate_CorrectLetters_For_NonMultipleChoice_Even_When_Options_Is_Not_Empty()
    {
        // Un DragAndDrop 'ordered_answer' ha un pool in Options (i suoi
        // all_actions, con IsCorrect valorizzato) che pero' non sono "lettere
        // corrette": CorrectLetters resta [], la risposta vera sta in AnswerRows.
        var question = Question() with { Type = QuestionType.DragAndDrop };
        var options = new[]
        {
            new Option { QuestionId = 1, Ord = 0, Letter = null, Text = "An Azure Key Vault", IsCorrect = true },
            new Option { QuestionId = 1, Ord = 1, Letter = null, Text = "An Azure Storage account", IsCorrect = false },
        };
        var answerRows = new[] { AnswerRow(ord: 0, prompt: null, answer: "An Azure Key Vault") };
        var input = new GradedQuestion(question, options, answerRows, []);

        var sut = input.ToAnswerDto();

        sut.CorrectLetters.Should().BeEmpty();
    }

    [TestMethod]
    public void Should_Map_Only_AnswerKind_Images_Not_QuestionKind()
    {
        // Le immagini 'question' sono gia' state mostrate prima di rispondere
        // (via QuestionDto): qui, nella risposta corretta, contano solo quelle
        // 'answer' (lo stesso stato con la soluzione compilata).
        var question = Question();
        var images = new[]
        {
            new QuestionImage { QuestionId = 1, Kind = "question", Ord = 0, Filename = "q063_pre0.png" },
            new QuestionImage { QuestionId = 1, Kind = "answer", Ord = 1, Filename = "q063_post1.png" },
            new QuestionImage { QuestionId = 1, Kind = "answer", Ord = 0, Filename = "q063_post0.png" },
        };
        var input = new GradedQuestion(question, [], [], images);

        var sut = input.ToAnswerDto();

        sut.Images.Should().Equal("q063_post0.png", "q063_post1.png");
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
        IReadOnlyList<AnswerRowDto>? answerRows = null,
        IReadOnlyList<string>? images = null) => new(
            number,
            explanation,
            answerText,
            note,
            correctLetters ?? [],
            answerRows ?? [],
            images ?? []);

    #endregion
}
