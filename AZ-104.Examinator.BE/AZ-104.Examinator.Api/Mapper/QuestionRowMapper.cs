using Examinator.Api.Models.Domains;

namespace Examinator.Api.Mapper;

/// <summary>Traduce la riga grezza di Dapper </summary>
internal static class QuestionRowMapper
{
    internal static Question ToQuestion(this QuestionRow row) => new()
    {
        Id = row.Id,
        Number = row.Number,
        Type = QuestionTypeMapper.FromDb(row.Type),
        AnswerLayout = row.AnswerLayout,
        Text = row.Text,
        Explanation = row.Explanation,
        AnswerText = row.AnswerText,
        Note = row.Note,
        Source = row.Source,
        GroupId = row.GroupId,
        GroupType = row.GroupType,
    };
}
