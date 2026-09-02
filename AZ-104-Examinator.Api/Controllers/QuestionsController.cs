using Examinator.Api.Contracts;
using Examinator.Api.Domain;
using Examinator.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Examinator.Api.Controllers;

[ApiController]
[Route("api/questions")]
public sealed class QuestionsController(IQuestionService questionService) : ControllerBase
{
    private const int MaxCount = 606; // dimensione dell'intero question bank: bound di buon senso, non una regola di business

    /// <summary>Un set casuale di domande per una sessione di simulazione. "type" filtra opzionalmente su uno dei 4 tipi (es. "multiple_choice").</summary>
    [HttpGet("random")]
    public async Task<ActionResult<IReadOnlyList<QuestionDto>>> GetRandom(
        [FromQuery] int count = 40,
        [FromQuery] string? type = null,
        CancellationToken cancellationToken = default)
    {
        if (count is < 1 or > MaxCount)
            return BadRequest($"count deve essere fra 1 e {MaxCount}.");

        QuestionType? parsedType = null;
        if (type is not null)
        {
            try
            {
                parsedType = QuestionTypeMapper.FromDb(type);
            }
            catch (ArgumentOutOfRangeException)
            {
                return BadRequest($"tipo sconosciuto: {type}");
            }
        }

        var questions = await questionService.GetRandomSetAsync(count, parsedType, cancellationToken);
        return Ok(questions);
    }

    /// <summary>La risposta corretta di una domanda: da chiamare dopo che l'utente ha gia' risposto.</summary>
    [HttpGet("{number:int}/answer")]
    public async Task<ActionResult<QuestionAnswerDto>> GetAnswer(int number, CancellationToken cancellationToken)
    {
        var answer = await questionService.GetAnswerAsync(number, cancellationToken);
        return answer is null ? NotFound() : Ok(answer);
    }
}
