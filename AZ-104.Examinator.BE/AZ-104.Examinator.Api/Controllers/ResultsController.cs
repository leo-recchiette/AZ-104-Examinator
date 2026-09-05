using Examinator.Api.Models.Contracts;
using Examinator.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Examinator.Api.Controllers;

[ApiController]
[Route("api/results")]
public sealed class ResultsController : ControllerBase
{
    private const int MaxCount = 606; // dimensione dell'intero question bank
    private static readonly string[] ValidModes = ["practice", "exam"];

    private readonly IExamResultService _examResultService;
    private readonly IExamAttemptService _examAttemptService;

    public ResultsController(IExamResultService examResultService, IExamAttemptService examAttemptService)
    {
        _examResultService = examResultService;
        _examAttemptService = examAttemptService;
    }

    [HttpPost("getScore")]
    public async Task<ActionResult<ExamScoreDto>> GetScoreAsync(
        [FromBody] List<AnswerSubmissionDto> submissions,
        CancellationToken cancellationToken)
    {
        if (submissions.Count == 0)
            return BadRequest("la lista di risposte non puo' essere vuota.");
        if (submissions.Count > MaxCount)
            return BadRequest($"non piu' di {MaxCount} risposte per richiesta.");

        var score = await _examResultService.ScoreAsync(submissions, cancellationToken);
        return Ok(score);
    }

    [HttpPost("checkAnswers")]
    public async Task<ActionResult<IReadOnlyList<AnswerCheckResultDto>>> CheckAnswersAsync(
        [FromBody] List<AnswerSubmissionDto> submissions,
        CancellationToken cancellationToken)
    {
        if (submissions.Count == 0)
            return BadRequest("la lista di risposte non puo' essere vuota.");
        if (submissions.Count > MaxCount)
            return BadRequest($"non piu' di {MaxCount} risposte per richiesta.");

        var results = await _examResultService.CheckAnswersAsync(submissions, cancellationToken);
        return Ok(results);
    }

    [HttpPost("saveAttempt")]
    public async Task<ActionResult<ExamAttemptDto>> SaveAttemptAsync(
        [FromBody] SaveExamAttemptDto request,
        CancellationToken cancellationToken)
    {
        if (!ValidModes.Contains(request.Mode))
            return BadRequest($"mode deve essere uno tra: {string.Join(", ", ValidModes)}.");
        if (request.QuestionCount is < 1 or > MaxCount)
            return BadRequest($"questionCount deve essere fra 1 e {MaxCount}.");
        if (request.Percentage is < 0 or > 100)
            return BadRequest("percentage deve essere fra 0 e 100.");
        if (request.EndTime < request.StartTime)
            return BadRequest("endTime non puo' precedere startTime.");

        var saved = await _examAttemptService.SaveAttemptAsync(request, cancellationToken);
        return Ok(saved);
    }

    [HttpGet("getAllAttempts")]
    public async Task<ActionResult<IReadOnlyList<ExamAttemptDto>>> GetAllAttemptsAsync(CancellationToken cancellationToken)
    {
        var attempts = await _examAttemptService.GetAllAttemptsAsync(cancellationToken);
        return Ok(attempts);
    }
}
