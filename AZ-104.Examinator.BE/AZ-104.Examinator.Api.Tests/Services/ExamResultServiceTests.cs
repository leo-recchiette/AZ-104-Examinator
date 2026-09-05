using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Repositories;
using Examinator.Api.Services;
using FluentAssertions;
using NSubstitute;

namespace Examinator.Api.Tests.Services;

[TestClass]
public sealed class ExamResultServiceTests
{
    private readonly ExamResultService _sut = Sut(questions: [Question()], options: [Option()]);

    private readonly ExamResultService _sutWithTenQuestions = Sut(Questions(), Options());

    [TestMethod]
    public async Task Should_Calculate_Percentage_Ignoring_Unknown_Questions()
    {
        var submissions = new[]
        {
            new AnswerSubmissionDto(QuestionNumber: 1, UserAnswers: ["C"]),
            new AnswerSubmissionDto(QuestionNumber: 999, UserAnswers: ["X"]),
        };

        var actual = await _sut.ScoreAsync(submissions, CancellationToken.None);

        var expected = new ExamScoreDto(Percentage: 100);

        actual.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public async Task Should_Map_Answers_Into_CheckResults()
    {
        var submissions = new[] { new AnswerSubmissionDto(QuestionNumber: 1, UserAnswers: ["A"]) };

        var actual = await _sut.CheckAnswersAsync(submissions, CancellationToken.None);

        var expected = new[] { AnswerCheckResultDto(userAnswers: ["A"], correctAnswer: QuestionAnswerDto()) };

        actual.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public async Task Should_Calculate_Percentage_When_Two_Of_Ten_Are_Wrong()
    {
        var submissions = Submissions(wrongNumbers: [9, 10]);

        var actual = await _sutWithTenQuestions.ScoreAsync(submissions, CancellationToken.None);

        var expected = new ExamScoreDto(Percentage: 80);

        actual.Should().BeEquivalentTo(expected);
    }

    [TestMethod]
    public async Task Should_Calculate_Percentage_When_Three_Of_Ten_Are_Correct()
    {
        var submissions = Submissions(wrongNumbers: [4, 5, 6, 7, 8, 9, 10]);

        var actual = await _sutWithTenQuestions.ScoreAsync(submissions, CancellationToken.None);

        var expected = new ExamScoreDto(Percentage: 30);

        actual.Should().BeEquivalentTo(expected);
    }

    #region Utils

    /// <summary>
    /// ExamResultService su un substitute di IQuestionRepository che ignora i filtri per numero e
    /// restituisce sempre le liste passate. answer_rows e immagini restano vuote ma vanno stubbate
    /// lo stesso: LoadGradedQuestionsAsync le carica in blocco per ogni submission.
    /// </summary>
    private static ExamResultService Sut(IReadOnlyList<Question> questions, IReadOnlyList<Option> options)
    {
        var repository = Substitute.For<IQuestionRepository>();
        repository.GetByNumbersAsync(Arg.Any<IReadOnlyCollection<int>>(), Arg.Any<CancellationToken>()).Returns(questions);
        repository.GetOptionsAsync(Arg.Any<IReadOnlyCollection<int>>(), Arg.Any<CancellationToken>()).Returns(options);
        repository.GetAnswerRowsAsync(Arg.Any<IReadOnlyCollection<int>>(), Arg.Any<CancellationToken>()).Returns([]);
        repository.GetImagesAsync(Arg.Any<IReadOnlyCollection<int>>(), Arg.Any<CancellationToken>()).Returns([]);
        return new ExamResultService(repository, new ScoreService());
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

    private static QuestionAnswerDto QuestionAnswerDto(
        int number = 1,
        string explanation = "Spiegazione",
        string answerText = "C. Opzione corretta",
        string? note = null,
        IReadOnlyList<string>? correctLetters = null,
        IReadOnlyList<AnswerRowDto>? answerRows = null,
        IReadOnlyList<string>? images = null) => new(
            number, explanation, answerText, note,
            correctLetters ?? ["C"],
            answerRows ?? [],
            images ?? []);

    private static AnswerCheckResultDto AnswerCheckResultDto(
        int questionNumber = 1,
        IReadOnlyList<string>? userAnswers = null,
        QuestionAnswerDto? correctAnswer = null) => new(
            questionNumber,
            userAnswers ?? [],
            correctAnswer);

    private static IReadOnlyList<Question> Questions() =>
        Enumerable.Range(1, 10)
            .Select(number => new Question
            {
                Id = number,
                Number = number,
                Type = QuestionType.MultipleChoice,
                Text = $"Domanda {number}",
                Explanation = "Spiegazione",
                AnswerText = "A. Opzione corretta",
                Source = "text_layer",
            })
            .ToList();

    private static IReadOnlyList<Option> Options() =>
        Enumerable.Range(1, 10)
            .Select(number => new Option
            {
                QuestionId = number,
                Ord = 0,
                Letter = "A",
                Text = "Opzione corretta",
                IsCorrect = true,
            })
            .ToList();

    private static IReadOnlyList<AnswerSubmissionDto> Submissions(IReadOnlyCollection<int> wrongNumbers) =>
        Enumerable.Range(1, 10)
            .Select(number => new AnswerSubmissionDto(number, [wrongNumbers.Contains(number) ? "B" : "A"]))
            .ToList();

    #endregion
}
