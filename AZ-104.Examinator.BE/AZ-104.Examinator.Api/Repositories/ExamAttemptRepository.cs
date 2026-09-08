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

    private const string SelectAttemptColumns = """
        id AS "Id", mode AS "Mode", question_count AS "QuestionCount",
        percentage AS "Percentage", start_time AS "StartTime", end_time AS "EndTime",
        completed_at AS "CompletedAt"
        """;

    public async Task<ExamAttempt> InsertAsync(ExamAttempt attempt, IReadOnlyList<ExamAttemptAnswer> answers, CancellationToken cancellationToken)
    {
        const string insertAttempt = $"""
            INSERT INTO exam_attempts (mode, question_count, percentage, start_time, end_time)
            VALUES (@Mode, @QuestionCount, @Percentage, @StartTime, @EndTime)
            RETURNING {SelectAttemptColumns}
            """;

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        await using var transaction = await connection.BeginTransactionAsync(cancellationToken);

        var saved = await connection.QuerySingleAsync<ExamAttempt>(
            new CommandDefinition(insertAttempt, attempt, transaction, cancellationToken: cancellationToken));

        if (answers.Count > 0)
        {
            // Dapper espande una lista di parametri in N esecuzioni della stessa INSERT, tutte
            // dentro questa transazione: nessun array bidimensionale da costruire a mano (le
            // risposte hanno lunghezze diverse fra loro e non formerebbero una matrice).
            const string insertOne = """
                INSERT INTO exam_attempt_answers (attempt_id, ord, question_number, user_answers)
                VALUES (@AttemptId, @Ord, @QuestionNumber, @UserAnswers)
                """;
            var rows = answers
                .Select((answer, index) => new
                {
                    AttemptId = saved.Id,
                    Ord = index,
                    answer.QuestionNumber,
                    UserAnswers = answer.UserAnswers.ToArray(),
                })
                .ToList();
            await connection.ExecuteAsync(new CommandDefinition(insertOne, rows, transaction, cancellationToken: cancellationToken));
        }

        await transaction.CommitAsync(cancellationToken);
        return saved;
    }

    public async Task<IReadOnlyList<ExamAttempt>> GetAllAsync(CancellationToken cancellationToken)
    {
        const string sql = $"""
            SELECT {SelectAttemptColumns}
            FROM exam_attempts
            ORDER BY end_time ASC
            """;
        var command = new CommandDefinition(sql, cancellationToken: cancellationToken);

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);
        var rows = await connection.QueryAsync<ExamAttempt>(command);
        return rows.ToList();
    }

    public async Task<ExamAttemptDetail?> GetDetailAsync(int id, CancellationToken cancellationToken)
    {
        const string attemptSql = $"""
            SELECT {SelectAttemptColumns}
            FROM exam_attempts
            WHERE id = @id
            """;
        const string answersSql = """
            SELECT question_number AS "QuestionNumber", user_answers AS "UserAnswers"
            FROM exam_attempt_answers
            WHERE attempt_id = @id
            ORDER BY ord ASC
            """;

        await using var connection = await _dataSource.OpenConnectionAsync(cancellationToken);

        var attempt = await connection.QuerySingleOrDefaultAsync<ExamAttempt>(
            new CommandDefinition(attemptSql, new { id }, cancellationToken: cancellationToken));
        if (attempt is null)
            return null;

        var answers = await connection.QueryAsync<ExamAttemptAnswer>(
            new CommandDefinition(answersSql, new { id }, cancellationToken: cancellationToken));
        return new ExamAttemptDetail(attempt, answers.ToList());
    }
}
