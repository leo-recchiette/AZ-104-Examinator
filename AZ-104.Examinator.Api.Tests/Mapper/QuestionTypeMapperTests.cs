using Examinator.Api.Mapper;
using Examinator.Api.Models.Domains;
using FluentAssertions;

namespace Examinator.Api.Tests.Mapper;

[TestClass]
public sealed class QuestionTypeMapperTests
{
    [TestMethod]
    public void Should_Map_String_Into_QuestionType()
    {
        var input = "hotspot_yes_no";

        var sut = QuestionTypeMapper.FromDb(input);

        var expected = QuestionType.HotspotYesNo;

        sut.Should().Be(expected);
    }

    [TestMethod]
    public void Should_Map_QuestionType_Into_String()
    {
        var input = QuestionType.HotspotYesNo;

        var sut = QuestionTypeMapper.ToDb(input);

        var expected = "hotspot_yes_no";

        sut.Should().Be(expected);
    }
}
