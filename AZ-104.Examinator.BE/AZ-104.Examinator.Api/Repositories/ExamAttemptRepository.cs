using Dapper;
using Examinator.Api.Models.Domains;
using Npgsql;

namespace Examinator.Api.Repositories;

public sealed class ExamAttemptRepository : IExamAttemptRepository
{
    private readonly NpgsqlDataSource _dataSource;

    public ExamAttemptRepository(NpgsqlDataSource dataSource)
    {
        _dataSource = dataSource;
    }

    public async Task<ExamAttempt> InsertAsync(ExamAttempt attempt, CancellationToken cancellationToken)
    {
        const string sql = """
            INSERT INTO exam_attempts (mode, question_count, percentage, start_time, end_time)
            VALUES (@Mode, @QuestionCount, @Percentage, @StartTime, @EndTime)
            RETURNING id AS "Id", mode AS "Mode", question_count AS "QuestionCount",
                      percentage AS "Percentage", start_time AS "StartTime", end_time AS "EndTime",
                      completed_at AS "CompletedAt"
            """;
        var command = new CommandDefinition(sql, attempt, cancellationToken: cancellationToken);

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        return await connection.QuerySingleAsync<ExamAttempt>(command);
    }

    public async Task<IReadOnlyList<ExamAttempt>> GetAllAsync(CancellationToken cancellationToken)
    {
        const string sql = """
            SELECT id AS "Id", mode AS "Mode", question_count AS "QuestionCount",
                   percentage AS "Percentage", start_time AS "StartTime", end_time AS "EndTime",
                   completed_at AS "CompletedAt"
            FROM exam_attempts
            ORDER BY end_time ASC
            """;
        var command = new CommandDefinition(sql, cancellationToken: cancellationToken);

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<ExamAttempt>(command);
        return rows.ToList();
    }
}
