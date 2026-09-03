using Examinator.Api.Models.Domains;

namespace Examinator.Api.Mapper;

/// <summary>
/// Traduce fra l'enum C# e le stringhe usate da Postgres e dal JSON sorgente
/// ("multiple_choice", "drag_and_drop", ...). 
/// </summary>
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
