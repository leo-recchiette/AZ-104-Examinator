namespace Examinator.Api.Models.Contracts;

/// <summary>
/// Una domanda cosi' come viene proposta all'utente, prima che risponda: niente
/// su quale sia la risposta corretta. Quale campo e' valorizzato dipende da
/// AnswerLayout (non da Type: DragAndDrop puo' essere sia ordered_answer che
/// selection):
///   Options         - solo MultipleChoice: il pool A..H con relativa lettera.
///   DraggableItems  - solo answer_layout 'ordered_answer': il pool da
///                      riordinare, senza indicare quali elementi siano
///                      distrattori.
///   Prompts         - answer_layout 'selection' o 'yes_no': uno per riga,
///                      ciascuno con le proprie opzioni cliccabili (per
///                      'yes_no' sempre ["Yes","No"]).
/// </summary>
public sealed record QuestionDto(
    int Number,
    string Type,
    string Text,
    IReadOnlyList<OptionDto> Options,
    IReadOnlyList<string> DraggableItems,
    IReadOnlyList<PromptOptionsDto> Prompts);
