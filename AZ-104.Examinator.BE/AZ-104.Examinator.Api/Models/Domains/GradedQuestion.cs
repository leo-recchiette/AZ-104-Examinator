namespace Examinator.Api.Models.Domains;

/// <summary>Aggregato costruito solo da ExamResultService per la correzione.</summary>
internal sealed record GradedQuestion(Question Source, IReadOnlyList<Option> Options, IReadOnlyList<AnswerRow> AnswerRows, IReadOnlyList<QuestionImage> Images)
{
    public int Number => Source.Number;
    public QuestionType Type => Source.Type;
    public string Explanation => Source.Explanation;
    public string AnswerText => Source.AnswerText;
    public string? Note => Source.Note;
}
