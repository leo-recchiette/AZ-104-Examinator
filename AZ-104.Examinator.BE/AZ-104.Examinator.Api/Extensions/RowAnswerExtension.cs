namespace Examinator.Api.Extensions;

public static class RowAnswerExtension
{
    /// <summary>
    /// Una riga con piu' risposte corrette (domanda 242) e' salvata come "{valore1,valore2}" e vale
    /// il punto solo per l'insieme esatto. Il client separa le scelte con "\n". Allineato a grading.ts.
    /// </summary>
    public static bool HasRowMatches(this string given, string correct)
    {
        if (correct.Length < 2 || correct[0] != '{' || correct[^1] != '}')
            return string.Equals(given, correct, StringComparison.OrdinalIgnoreCase);

        var correctSet = new HashSet<string>(correct[1..^1].Split(',').Select(s => s.Trim()), StringComparer.OrdinalIgnoreCase);
        var givenSet = new HashSet<string>(given.Split('\n').Select(s => s.Trim()), StringComparer.OrdinalIgnoreCase);
        return correctSet.SetEquals(givenSet);
    }
}
