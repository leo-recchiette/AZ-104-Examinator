namespace Examinator.Api.Models.Domains;

public sealed record Question
{
    public required int Id { get; init; }
    public required int Number { get; init; }
    public required QuestionType Type { get; init; }

    /// <summary>'ordered_answer' | 'selection' | 'yes_no'. Null per MultipleChoice.</summary>
    public string? AnswerLayout { get; init; }

    public required string Text { get; init; }
    public required string Explanation { get; init; }

    public required string AnswerText { get; init; }

    public string? Note { get; init; }

    /// <summary>'text_layer' | 'manual_vision' | 'ocr'.</summary>
    public required string Source { get; init; }

    public string? GroupId { get; init; }

    /// <summary>'scenario_series' | 'case_study'. Valorizzato se e solo se lo e' GroupId.</summary>
    public string? GroupType { get; init; }
}
