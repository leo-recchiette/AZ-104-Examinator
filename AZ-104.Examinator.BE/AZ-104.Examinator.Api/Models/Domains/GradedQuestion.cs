namespace Examinator.Api.Models.Domains;

/// <summary>
/// Una domanda con le sue opzioni/righe gia' caricate: evita di rifare le query
/// per ogni operazione di correzione (punteggio o dettaglio corretto/sbagliato).
/// Non e' un'entita' di dominio a se': e' un aggregato costruito da
/// ExamResultService per il solo scopo della correzione. Interna al progetto,
/// nessun altro layer deve costruirla.
/// </summary>
internal sealed record GradedQuestion(Question Source, IReadOnlyList<Option> Options, IReadOnlyList<AnswerRow> AnswerRows, IReadOnlyList<QuestionImage> Images)
{
    public int Number => Source.Number;
    public QuestionType Type => Source.Type;
    public string Explanation => Source.Explanation;
    public string AnswerText => Source.AnswerText;
    public string? Note => Source.Note;
}
