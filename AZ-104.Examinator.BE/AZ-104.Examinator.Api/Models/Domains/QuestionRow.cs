namespace Examinator.Api.Models.Domains;

/// <summary>Riga grezza cosi' come la restituisce Dapper da Postgres</summary>
internal sealed record QuestionRow(int Id, int Number, string Type, string? AnswerLayout,
    string Text, string Explanation, string AnswerText, string? Note, string Source,
    string? GroupId, string? GroupType);
