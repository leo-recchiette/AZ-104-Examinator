using Examinator.Api.Models.Domains;

namespace Examinator.Api.Mapper;

/// <summary>Enum C# <-> stringhe di Postgres e del JSON ("multiple_choice", ...).</summary>
public static class QuestionTypeMapper
{
    public static QuestionType FromDb(string value) => value switch
    {
        "multiple_choice" => QuestionType.MultipleChoice,
        "drag_and_drop" => QuestionType.DragAndDrop,
        "hotspot" => QuestionType.Hotspot,
        "hotspot_yes_no" => QuestionType.HotspotYesNo,
        _ => throw new ArgumentOutOfRangeException(nameof(value), value, "Tipo di domanda sconosciuto."),
    };

    public static string ToDb(QuestionType type) => type switch
    {
        QuestionType.MultipleChoice => "multiple_choice",
        QuestionType.DragAndDrop => "drag_and_drop",
        QuestionType.Hotspot => "hotspot",
        QuestionType.HotspotYesNo => "hotspot_yes_no",
        _ => throw new ArgumentOutOfRangeException(nameof(type), type, null),
    };
}
