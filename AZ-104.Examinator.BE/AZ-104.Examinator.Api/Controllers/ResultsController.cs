using Examinator.Api.Extensions;
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
        var error = request switch
        {
            { Mode: var mode } when !ValidModes.Contains(mode) => $"mode deve essere uno tra: {string.Join(", ", ValidModes)}.",
            { QuestionCount: < 1 or > MaxCount } => $"questionCount deve essere fra 1 e {MaxCount}.",
            { Percentage: < 0 or > 100 } => "percentage deve essere fra 0 e 100.",
            { StartTime: var start, EndTime: var end } when end < start => "endTime non puo' precedere startTime.",
            { Answers.Count: > MaxCount } => $"non piu' di {MaxCount} risposte per tentativo.",
            { Answers: { Count: > 0 } answers } when answers.All(a => a.IsBlank()) => "un tentativo senza nemmeno una risposta non viene registrato.",
            _ => null,
        };
        if (error is not null)
            return BadRequest(error);

        var saved = await _examAttemptService.SaveAttemptAsync(request, cancellationToken);
        return Ok(saved);
    }

    [HttpGet("getAttempt/{id:int}")]
    public async Task<ActionResult<ExamAttemptDetailDto>> GetAttemptAsync(int id, CancellationToken cancellationToken)
    {
        var detail = await _examAttemptService.GetAttemptDetailAsync(id, cancellationToken);
        if (detail is null)
            return NotFound($"nessun tentativo con id {id}.");

        return Ok(detail);
    }

    [HttpGet("getAllAttempts")]
    public async Task<ActionResult<IReadOnlyList<ExamAttemptDto>>> GetAllAttemptsAsync(CancellationToken cancellationToken)
    {
        var attempts = await _examAttemptService.GetAllAttemptsAsync(cancellationToken);
        return Ok(attempts);
    }
}
