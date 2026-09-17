using Examinator.Api.Models.Contracts;
using Examinator.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Examinator.Api.Controllers;

[ApiController]
[Route("api/sessions")]
public sealed class SessionsController : ControllerBase
{
    private const int MaxCount = 606; // dimensione dell'intero question bank
    private static readonly string[] ValidModes = ["practice", "exam"];

    private readonly IActiveSessionService _activeSessionService;

    public SessionsController(IActiveSessionService activeSessionService)
    {
        _activeSessionService = activeSessionService;
    }

    [HttpGet("getCurrentSession")]
    public async Task<ActionResult<ActiveSessionDto>> GetCurrentSessionAsync(CancellationToken cancellationToken)
    {
        var session = await _activeSessionService.GetAsync(cancellationToken);
        return session is null ? NoContent() : Ok(session);
    }

    [HttpPut("saveCurrentSession")]
    public async Task<IActionResult> SaveCurrentSessionAsync(
        [FromBody] SaveActiveSessionDto request,
        CancellationToken cancellationToken)
    {
        var error = request switch
        {
            { Mode: var mode } when !ValidModes.Contains(mode) => $"mode deve essere uno tra: {string.Join(", ", ValidModes)}.",
            { QuestionNumbers.Count: 0 } => "questionNumbers non puo' essere vuoto.",
            { QuestionNumbers.Count: > MaxCount } => $"non piu' di {MaxCount} domande per sessione.",
            { TimeLimitSeconds: <= 0 } => "timeLimitSeconds, se presente, deve essere positivo.",
            _ => null,
        };
        if (error is not null)
            return BadRequest(error);

        await _activeSessionService.SaveAsync(request, cancellationToken);
        return NoContent();
    }

    [HttpDelete("deleteCurrentSession")]
    public async Task<IActionResult> DeleteCurrentSessionAsync(CancellationToken cancellationToken)
    {
        await _activeSessionService.DeleteAsync(cancellationToken);
        return NoContent();
    }
}
