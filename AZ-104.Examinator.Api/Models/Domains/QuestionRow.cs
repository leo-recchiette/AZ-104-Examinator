namespace Examinator.Api.Models.Domains;

/// <summary>
/// Riga grezza cosi' come la restituisce Dapper da Postgres: 'Type' e' ancora
/// la stringa del database, non l'enum. Non e' l'entita' di dominio: e' solo la
/// forma intermedia da cui QuestionRepository costruisce un Question tramite
/// QuestionTypeMapper. Interna al progetto, nessun altro layer deve usarla.
/// </summary>
internal sealed record QuestionRow(int Id, int Number, string Type, string? AnswerLayout,
    string Text, string Explanation, string AnswerText, string? Note, string Source);
