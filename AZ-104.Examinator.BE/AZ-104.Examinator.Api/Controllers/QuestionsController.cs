using Examinator.Api.Models.Contracts;
using Examinator.Api.Models.Domains;
using Examinator.Api.Mapper;
using Examinator.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Examinator.Api.Controllers;

[ApiController]
[Route("api/questions")]
public sealed class QuestionsController : ControllerBase
{
    private const int MaxCount = 606; // dimensione dell'intero question bank: bound di buon senso, non una regola di business

    private readonly IQuestionService _questionService;

    public QuestionsController(IQuestionService questionService)
    {
        _questionService = questionService;
    }

    /// <summary>Un set casuale di domande per una sessione di simulazione. 
    /// "type" filtra opzionalmente su uno dei 4 tipi (es. "multiple_choice").</summary>
    [HttpGet("getExam")]
    public async Task<ActionResult<IReadOnlyList<QuestionDto>>> GetExamAsync(
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

        var questions = await _questionService.GetRandomSetAsync(count, parsedType, cancellationToken);
        return Ok(questions);
    }
}