namespace Examinator.Api.Models.Domains;

/// <summary>Kind: 'question' (prima della risposta) o 'answer' (solo dopo).</summary>
public sealed class QuestionImage
{
    public required int QuestionId { get; init; }
    public required string Kind { get; init; }
    public required int Ord { get; init; }
    public required string Filename { get; init; }
}
