using Examinator.Api.Mapper;
using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using FluentAssertions;

namespace Examinator.Api.Tests.Mapper;

[TestClass]
public sealed class QuestionMapperTests
{
    [TestMethod]
    public void Should_Map_MultipleChoice_Into_Options()
    {
        var input = Question(type: QuestionType.MultipleChoice, answerLayout: null);
        var options = new[]
        {
            Option(ord: 0, letter: "A", text: "Opzione sbagliata", isCorrect: false),
            Option(ord: 1, letter: "C", text: "Opzione corretta", isCorrect: true),
        };

        var sut = input.ToQuestionDto(options, [], NoRowOptions(), NoImages());

        var expected = new QuestionDto(
            Number: 1,
            Type: "multiple_choice",
            Text: "Domanda di prova",
            Options: [new OptionDto("A", "Opzione sbagliata"), new OptionDto("C", "Opzione corretta")],
            DraggableItems: [],
            Prompts: [],
            Images: [],
            GroupId: null,
            GroupType: null);

        sut.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public void Should_Map_OrderedAnswer_Into_DraggableItems()
    {
        var input = Question(type: QuestionType.DragAndDrop, answerLayout: "ordered_answer");
        var options = new[]
        {
            Option(ord: 0, letter: null, text: "An Azure Key Vault", isCorrect: true),
            Option(ord: 1, letter: null, text: "An Azure Storage account", isCorrect: false),
            Option(ord: 2, letter: null, text: "An access policy", isCorrect: true),
        };

        var sut = input.ToQuestionDto(options, [], NoRowOptions(), NoImages());

        var expected = new QuestionDto(
            Number: 1,
            Type: "drag_and_drop",
            Text: "Domanda di prova",
            Options: [],
            DraggableItems: ["An Azure Key Vault", "An Azure Storage account", "An access policy"],
            Prompts: [],
            Images: [],
            GroupId: null,
            GroupType: null);

        sut.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public void Should_Map_Selection_Into_Prompts_With_Their_Own_Options()
    {
        var input = Question(type: QuestionType.Hotspot, answerLayout: "selection");
        var row1 = AnswerRow(id: 10, ord: 0, prompt: "To add a backend pool to LB1", answer: "Network Contributor on LB1");
        var row2 = AnswerRow(id: 11, ord: 1, prompt: "To add a health probe to LB2", answer: "Network Contributor on LB2");
        var rowOptions = new[]
        {
            RowOption(answerRowId: 10, ord: 0, text: "Contributor on LB1"),
            RowOption(answerRowId: 10, ord: 1, text: "Network Contributor on LB1"),
            RowOption(answerRowId: 11, ord: 0, text: "Contributor on LB2"),
            RowOption(answerRowId: 11, ord: 1, text: "Network Contributor on LB2"),
        };

        var images = new[]
        {
            Image(kind: "question", ord: 1, filename: "q001_pre1.png"),
            Image(kind: "question", ord: 0, filename: "q001_pre0.png"),
            Image(kind: "answer", ord: 0, filename: "q001_post0.png"),
        };

        var sut = input.ToQuestionDto([], [row1, row2], rowOptions.ToLookup(o => o.AnswerRowId), images);

        var expected = new QuestionDto(
            Number: 1,
            Type: "hotspot",
            Text: "Domanda di prova",
            Options: [],
            DraggableItems: [],
            Prompts: [
                new PromptOptionsDto("To add a backend pool to LB1", ["Contributor on LB1", "Network Contributor on LB1"]),
                new PromptOptionsDto("To add a health probe to LB2", ["Contributor on LB2", "Network Contributor on LB2"]),
            ],
            Images: ["q001_pre0.png", "q001_pre1.png"],
            GroupId: null,
            GroupType: null);

        sut.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public void Should_Map_YesNo_Into_Prompts_With_Constant_YesNo_Options()
    {
        var input = Question(type: QuestionType.HotspotYesNo, answerLayout: "yes_no");
        var row = AnswerRow(id: 20, ord: 0, prompt: "Statement 1", answer: "Yes");

        var sut = input.ToQuestionDto([], [row], NoRowOptions(), NoImages());

        var expected = new QuestionDto(
            Number: 1,
            Type: "hotspot_yes_no",
            Text: "Domanda di prova",
            Options: [],
            DraggableItems: [],
            Prompts: [new PromptOptionsDto("Statement 1", ["Yes", "No"])],
            Images: [],
            GroupId: null,
            GroupType: null);

        sut.Should().BeEquivalentTo(expected);
    }

    #region Utils

    private static Question Question(QuestionType type, string? answerLayout) => new()
    {
        Id = 1,
        Number = 1,
        Type = type,
        AnswerLayout = answerLayout,
        Text = "Domanda di prova",
        Explanation = "Spiegazione",
        AnswerText = "risposta",
        Source = "text_layer",
    };

    private static Option Option(int ord = 0, string? letter = "A", string text = "", bool isCorrect = false) => new()
    {
        QuestionId = 1,
        Ord = ord,
        Letter = letter,
        Text = text,
        IsCorrect = isCorrect,
    };

    private static AnswerRow AnswerRow(int id = 0, int ord = 0, string? prompt = null, string answer = "") => new()
    {
        Id = id,
        QuestionId = 1,
        Ord = ord,
        Prompt = prompt,
        Answer = answer,
    };

    private static AnswerRowOption RowOption(int answerRowId, int ord, string text) => new()
    {
        AnswerRowId = answerRowId,
        Ord = ord,
        Text = text,
    };

    private static ILookup<int, AnswerRowOption> NoRowOptions() => Array.Empty<AnswerRowOption>().ToLookup(o => o.AnswerRowId);

    private static QuestionImage Image(string kind, int ord, string filename) => new()
    {
        QuestionId = 1,
        Kind = kind,
        Ord = ord,
        Filename = filename,
    };

    private static IReadOnlyList<QuestionImage> NoImages() => [];

    #endregion
}
