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
/// Images e' lo screenshot (se presente) da mostrare insieme alla domanda,
/// PRIMA di rispondere - nomi file nudi, risolti dal client su /images/&lt;file&gt;.
/// GroupId/GroupType sono valorizzati per le domande che condividono uno scenario
/// e vengono proposte insieme: servono al client per costruire l'elenco delle
/// sotto-domande. Null per le domande sciolte.
/// </summary>
public sealed record QuestionDto(
    int Number,
    string Type,
    string Text,
    IReadOnlyList<OptionDto> Options,
    IReadOnlyList<string> DraggableItems,
    IReadOnlyList<PromptOptionsDto> Prompts,
    IReadOnlyList<string> Images,
    string? GroupId,
    string? GroupType);
