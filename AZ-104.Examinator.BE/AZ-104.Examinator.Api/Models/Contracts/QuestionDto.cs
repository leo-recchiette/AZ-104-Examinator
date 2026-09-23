namespace Examinator.Api.Models.Contracts;

/// <summary>
/// La domanda prima della risposta, senza la soluzione. Il campo valorizzato dipende da
/// AnswerLayout, non da Type:
///   Options        - MultipleChoice.
///   DraggableItems - 'ordered_answer', distrattori compresi; SequenceLength e' la lunghezza
///                    della sequenza (lo dice gia' il testo della domanda).
///   Prompts        - 'selection' e 'yes_no', una riga ciascuno.
/// </summary>
public sealed record QuestionDto(
    int Number,
    string Type,
    string Text,
    IReadOnlyList<OptionDto> Options,
    IReadOnlyList<string> DraggableItems,
    int SequenceLength,
    IReadOnlyList<PromptOptionsDto> Prompts,
    IReadOnlyList<string> Images,
    string? GroupId,
    string? GroupType);
