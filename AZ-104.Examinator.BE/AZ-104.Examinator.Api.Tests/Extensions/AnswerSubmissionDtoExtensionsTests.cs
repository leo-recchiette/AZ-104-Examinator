using Examinator.Api.Extensions;
using Examinator.Api.Models.Contracts;
using FluentAssertions;

namespace Examinator.Api.Tests.Extensions;

[TestClass]
public sealed class AnswerSubmissionDtoExtensionsTests
{
    [TestMethod]
    public void Should_Treat_A_Missing_Answer_List_As_Blank()
    {
        new AnswerSubmissionDto(1, null!).IsBlank().Should().BeTrue();
    }

    [TestMethod]
    public void Should_Treat_An_Empty_Answer_List_As_Blank()
    {
        new AnswerSubmissionDto(1, []).IsBlank().Should().BeTrue();
    }

    [TestMethod]
    public void Should_Treat_Untouched_Rows_As_Blank()
    {
        // Le righe non compilate di un hotspot arrivano come stringhe vuote, non come elementi
        // assenti: contare gli elementi le farebbe passare per risposte date.
        new AnswerSubmissionDto(1, ["", "  "]).IsBlank().Should().BeTrue();
    }

    [TestMethod]
    public void Should_Not_Be_Blank_When_A_Single_Row_Was_Filled()
    {
        // Una riga sola su tre non e' una domanda completata, ma e' comunque una scelta fatta:
        // basta a non far scartare il tentativo.
        new AnswerSubmissionDto(1, ["", "Yes", ""]).IsBlank().Should().BeFalse();
    }

    [TestMethod]
    public void Should_Not_Be_Blank_When_Letters_Were_Selected()
    {
        new AnswerSubmissionDto(1, ["B", "D"]).IsBlank().Should().BeFalse();
    }
}
