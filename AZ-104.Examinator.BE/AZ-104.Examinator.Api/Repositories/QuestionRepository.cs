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
        explanation, answer_text AS "AnswerText", note, source,
        group_id AS "GroupId", group_type AS "GroupType"
        """;

    /// <summary>
    /// Chiave dell'unita' di estrazione: il gruppo se la domanda ne fa parte, altrimenti la domanda
    /// stessa. Il '#' non compare mai in un group_id ('ss01', 'cs01'), quindi le due famiglie di
    /// chiavi non possono collidere.
    /// </summary>
    private const string UnitKey = "COALESCE(group_id, '#' || number)";

    /// <summary>
    /// Sorteggia @count UNITA', non @count domande: un gruppo occupa un posto solo e viene
    /// restituito per intero. Selezione e ordinamento stanno entrambi qui, in una query sola,
    /// cosi' il service riceve gia' i gruppi completi e contigui.
    /// </summary>
    public async Task<IReadOnlyList<Question>> GetRandomAsync(int count, QuestionType? type, CancellationToken cancellationToken)
    {
        var typeFilter = type is null ? "" : "WHERE type = @type::question_type";

        // min(random()) sorteggia una volta per unita': random() non e' aggregabile e con il
        // GROUP BY servirebbe comunque un valore unico per chiave.
        var sql = $"""
            WITH picked AS (
                SELECT {UnitKey} AS unit_key, min(random()) AS draw
                FROM questions
                {typeFilter}
                GROUP BY unit_key
                ORDER BY draw
                LIMIT @count
            ),
            units AS (
                SELECT unit_key, row_number() OVER (ORDER BY draw) AS ord FROM picked
            )
            SELECT {SelectColumns}
            FROM questions q
            JOIN units u ON u.unit_key = COALESCE(q.group_id, '#' || q.number)
            ORDER BY u.ord, q.number
            """;

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