namespace Examinator.Api.Models.Domains;

/// <summary>Uno screenshot associato a una domanda. Kind e' 'question' (mostrato prima di rispondere) o 'answer' (mostrato solo dopo, insieme alla spiegazione) - stringa nuda, come AnswerLayout, non un enum.</summary>
public sealed class QuestionImage
{
    public required int QuestionId { get; init; }
    public required string Kind { get; init; }
    public required int Ord { get; init; }
    public required string Filename { get; init; }
}
