/**
 * Le domande di uno scenario (case study e scenario series) iniziano con le istruzioni
 * d'esame di Microsoft, identiche per tutte: 194, 433 o 1490 caratteri di testo che non
 * ha nulla a che vedere con la domanda. Qui viene staccato dal corpo, per mostrarlo in un
 * riquadro collassabile a parte (components/session/ExamNotice.tsx).
 *
 * E' una trasformazione di sola presentazione: il dataset resta ground truth.
 */

/**
 * Un preambolo si riconosce dall'incipit e si chiude sulla propria frase finale.
 * Non si confrontano i tre testi per intero di proposito: la domanda 321 ha lo stesso
 * preambolo con un refuso ("Some questions sets"), e un match esatto la lascerebbe fuori.
 */
const PREAMBLES: ReadonlyArray<{ startsWith: string; endsWith: string }> = [
  {
    startsWith: "Case study - This is a case study.",
    endsWith: "click the Question button to return to the question.",
  },
  {
    startsWith: "Note: This question is part of a series",
    endsWith: "will not appear in the review screen.",
  },
  {
    startsWith: "Note: The question is included in a number of questions",
    endsWith: "Establish if the solution satisfies the requirements.",
  },
];

export interface SplitQuestion {
  /** Le istruzioni d'esame, null se la domanda non ne ha. */
  preamble: string | null;
  /** La domanda vera e propria, senza preambolo. */
  body: string;
}

export function splitPreamble(text: string): SplitQuestion {
  for (const { startsWith, endsWith } of PREAMBLES) {
    if (!text.startsWith(startsWith)) continue;
    const end = text.indexOf(endsWith);
    if (end === -1) continue;
    const cut = end + endsWith.length;
    return { preamble: text.slice(0, cut), body: text.slice(cut).trimStart() };
  }
  return { preamble: null, body: text };
}
