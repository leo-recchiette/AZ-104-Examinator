using Examinator.Api.Contracts;
using Examinator.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Examinator.Api.Controllers;

[ApiController]
[Route("api/results")]
public sealed class ResultsController : ControllerBase
{
    private const int MaxCount = 606; // dimensione dell'intero question bank: bound di buon senso, non una regola di business

    private readonly IExamResultService _examResultService;

    public ResultsController(IExamResultService examResultService)
    {
        _examResultService = examResultService;
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
}
