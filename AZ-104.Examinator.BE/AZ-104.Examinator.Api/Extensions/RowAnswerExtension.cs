namespace Examinator.Api.Extensions;

public static class RowAnswerExtension
{
    /// <summary>
    /// Una riga 'selection' con piu' di una risposta corretta (es. domanda 242, "Allowed
    /// permissions" -> Read + List) e' salvata come "{valore1,valore2}": un artefatto di come
    /// l'importer scrive una lista Python in una colonna TEXT (vedi import_questions.py e
    /// find_selection_mismatches), riusato qui come marcatore - verificato univoco su tutto il
    /// dataset, nessun'altra riga 'selection' contiene parentesi graffe nel proprio answer.
    /// In quel caso la riga vale un punto solo per corrispondenza esatta dell'insieme (ne' di
    /// piu' ne' di meno, coerente col fatto che ogni riga vale comunque un solo punto, non uno
    /// per componente); altrimenti resta il confronto esatto di sempre. Il client separa le
    /// scelte multiple con "\n" (vedi RowSelectAnswer.tsx e grading.ts).
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
