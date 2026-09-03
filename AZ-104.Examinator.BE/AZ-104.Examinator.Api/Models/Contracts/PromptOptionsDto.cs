namespace Examinator.Api.Models.Contracts;

/// <summary>Un prompt/riga con le opzioni cliccabili tra cui scegliere.</summary>
public sealed record PromptOptionsDto(string Prompt, IReadOnlyList<string> Options);
