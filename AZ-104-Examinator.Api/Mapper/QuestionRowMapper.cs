using Examinator.Api.Domain;

namespace Examinator.Api.Mapper;

/// <summary>Traduce la riga grezza di Dapper 
/// (QuestionRow, con Type ancora stringa) 
/// nell'entita' di dominio Question.</summary>
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
    };
}
