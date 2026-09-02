namespace Examinator.Api.Domain;

/// <summary>
/// Rispecchia l'enum <c>question_type</c> del database.
/// </summary>
public enum QuestionType
{
    MultipleChoice,
    DragAndDrop,
    Hotspot,
    HotspotYesNo,
}

/// <summary>
/// Traduce fra l'enum C# e le stringhe usate da Postgres e dal JSON sorgente
/// ("multiple_choice", "drag_and_drop", ...). Tenere la mappatura qui, in un
/// solo punto, evita che repository e controller debbano conoscerla ciascuno
/// per conto proprio.
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
