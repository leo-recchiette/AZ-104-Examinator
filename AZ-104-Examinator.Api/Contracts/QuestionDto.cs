namespace Examinator.Api.Contracts;

/// <summary>
/// Una domanda cosi' come viene proposta all'utente, prima che risponda: niente
/// su quale opzione sia corretta ne' sulla risposta di Hotspot/DragAndDrop.
/// Options e' valorizzato solo per MultipleChoice; Prompts (senza risposta)
/// da' comunque la struttura della domanda per gli altri tipi, dove esiste.
/// </summary>
public sealed record QuestionDto(
    int Number,
    string Type,
    string Text,
    IReadOnlyList<OptionDto> Options,
    IReadOnlyList<string> Prompts);
