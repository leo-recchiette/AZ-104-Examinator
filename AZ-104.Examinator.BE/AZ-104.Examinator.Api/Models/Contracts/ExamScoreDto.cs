namespace Examinator.Api.Models.Contracts;

/// <summary>Percentuale di punti ottenuti su una sessione conclusa: e' quella che dice se il test e' passato.</summary>
public sealed record ExamScoreDto(double Percentage);
