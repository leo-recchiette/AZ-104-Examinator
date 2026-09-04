using Dapper;
using Examinator.Api.Mapper;
using Examinator.Api.Models.Domains;
using Npgsql;

namespace Examinator.Api.Repositories;

/// <summary>Implementazione su Postgres via Dapper.</summary>
public sealed class QuestionRepository : IQuestionRepository
{
    private readonly NpgsqlDataSource _dataSource;

    public QuestionRepository(NpgsqlDataSource dataSource)
    {
        _dataSource = dataSource;
    }

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

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<QuestionRow>(command);
        return rows.Select(r => r.ToQuestion()).ToList();
    }

    public async Task<IReadOnlyList<Question>> GetByNumbersAsync(IReadOnlyCollection<int> numbers, CancellationToken cancellationToken)
    {
        if (numbers.Count == 0)
            return [];

        var sql = $"SELECT {SelectColumns} FROM questions WHERE number = ANY(@numbers)";
        var command = new CommandDefinition(sql, new { numbers = numbers.ToArray() }, cancellationToken: cancellationToken);

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<QuestionRow>(command);
        return rows.Select(r => r.ToQuestion()).ToList();
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

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<Option>(command);
        return rows.ToList();
    }

    public async Task<IReadOnlyList<AnswerRow>> GetAnswerRowsAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken)
    {
        if (questionIds.Count == 0)
            return [];

        const string sql = """
            SELECT id AS "Id", question_id AS "QuestionId", ord AS "Ord", prompt, answer
            FROM answer_rows
            WHERE question_id = ANY(@questionIds)
            ORDER BY question_id, ord
            """;
        var command = new CommandDefinition(sql, new { questionIds = questionIds.ToArray() }, cancellationToken: cancellationToken);

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<AnswerRow>(command);
        return rows.ToList();
    }

    public async Task<IReadOnlyList<AnswerRowOption>> GetAnswerRowOptionsAsync(IReadOnlyCollection<int> answerRowIds, CancellationToken cancellationToken)
    {
        if (answerRowIds.Count == 0)
            return [];

        const string sql = """
            SELECT answer_row_id AS "AnswerRowId", ord AS "Ord", text
            FROM answer_row_options
            WHERE answer_row_id = ANY(@answerRowIds)
            ORDER BY answer_row_id, ord
            """;
        var command = new CommandDefinition(sql, new { answerRowIds = answerRowIds.ToArray() }, cancellationToken: cancellationToken);

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<AnswerRowOption>(command);
        return rows.ToList();
    }

    public async Task<IReadOnlyList<QuestionImage>> GetImagesAsync(IReadOnlyCollection<int> questionIds, CancellationToken cancellationToken)
    {
        if (questionIds.Count == 0)
            return [];

        const string sql = """
            SELECT question_id AS "QuestionId", kind AS "Kind", ord AS "Ord", filename AS "Filename"
            FROM question_images
            WHERE question_id = ANY(@questionIds)
            ORDER BY question_id, kind, ord
            """;
        var command = new CommandDefinition(sql, new { questionIds = questionIds.ToArray() }, cancellationToken: cancellationToken);

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<QuestionImage>(command);
        return rows.ToList();
    }
}