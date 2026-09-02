using Dapper;
using Examinator.Api.Domain;
using Npgsql;

namespace Examinator.Api.Repositories;

/// <summary>Implementazione su Postgres via Dapper. Nessun ORM: SQL esplicito, schema definito una sola volta in db/init.</summary>
public sealed class QuestionRepository(NpgsqlDataSource dataSource) : IQuestionRepository
{
    private const string SelectColumns = """
        id, number, type, answer_layout AS "AnswerLayout", question AS "Text",
        explanation, answer_text AS "AnswerText", note, source
        """;

    public async Task<IReadOnlyList<Question>> GetRandomAsync(int count, QuestionType? type, CancellationToken cancellationToken)
    {
        var sql = type is null
            ? $"SELECT {SelectColumns} FROM questions ORDER BY random() LIMIT @count"
            : $"SELECT {SelectColumns} FROM questions WHERE type = @type::question_type ORDER BY random() LIMIT @count";

        var command = type is null
            ? new CommandDefinition(sql, new { count }, cancellationToken: cancellationToken)
            : new CommandDefinition(sql, new { count, type = QuestionTypeMapper.ToDb(type.Value) }, cancellationToken: cancellationToken);

        await using var connection = await dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<QuestionRow>(command);
        return rows.Select(MapQuestion).ToList();
    }

    public async Task<Question?> GetByNumberAsync(int number, CancellationToken cancellationToken)
    {
        var sql = $"SELECT {SelectColumns} FROM questions WHERE number = @number";
        var command = new CommandDefinition(sql, new { number }, cancellationToken: cancellationToken);

        await using var connection = await dataSource.OpenConnectionAsync(cancellationToken);
        var row = await connection.QuerySingleOrDefaultAsync<QuestionRow>(command);
        return row is null ? null : MapQuestion(row);
    }

    public async Task<IReadOnlyList<Option>> GetOptionsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken)
    {
        if (questionIds.Count == 0)
            return [];

        const string sql = """
            SELECT question_id AS "QuestionId", ord AS "Ord", letter, text, is_correct AS "IsCorrect"
            FROM options
            WHERE question_id = ANY(@questionIds)
            ORDER BY question_id, ord
            """;
        var command = new CommandDefinition(sql, new { questionIds = questionIds.ToArray() }, cancellationToken: cancellationToken);

        await using var connection = await dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<Option>(command);
        return rows.ToList();
    }

    public async Task<IReadOnlyList<AnswerRow>> GetAnswerRowsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken)
    {
        if (questionIds.Count == 0)
            return [];

        const string sql = """
            SELECT question_id AS "QuestionId", ord AS "Ord", prompt, answer
            FROM answer_rows
            WHERE question_id = ANY(@questionIds)
            ORDER BY question_id, ord
            """;
        var command = new CommandDefinition(sql, new { questionIds = questionIds.ToArray() }, cancellationToken: cancellationToken);

        await using var connection = await dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<AnswerRow>(command);
        return rows.ToList();
    }

    private static Question MapQuestion(QuestionRow row) => new()
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

    // Riga cosi' come la restituisce Dapper: 'Type' e' ancora la stringa grezza
    // di Postgres. MapQuestion la traduce nell'entita' di dominio con l'enum.
    private sealed record QuestionRow(int Id, int Number, string Type, string? AnswerLayout,
        string Text, string Explanation, string AnswerText, string? Note, string Source);
}
