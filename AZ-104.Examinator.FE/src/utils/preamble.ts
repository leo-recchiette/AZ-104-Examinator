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

/**
 * Sotto a questa soglia lo scenario condiviso non vale la pena di essere estratto: meglio
 * lasciare a ogni parte il proprio testo intero che spezzarlo su una manciata di parole.
 */
const MIN_SHARED_SCENARIO = 80;

export interface SplitScenario {
  /** Il testo comune a tutte le parti, stringa vuota se non ce n'e' uno significativo. */
  shared: string;
  /** Il corpo di ogni parte senza lo scenario condiviso, allineato all'array in ingresso. */
  parts: string[];
}

/**
 * Lo scenario che i membri di una scenario series si ripetono identico: nel dataset e'
 * copiato parola per parola in ogni fratello (in ss01 sono 334 caratteri per 3 volte) e
 * cambia solo la frase "Solution: ...". Serve per mostrarlo una volta sola in cima alla
 * card di gruppo, invece che N volte.
 *
 * Si ricava dal prefisso comune EFFETTIVO fra i corpi, non dal primo membro preso a
 * modello: in 3 gruppi su 24 (ss02, ss03, ss21) i testi divergono quasi subito, e li'
 * mostrare lo scenario del primo come se valesse per tutti nasconderebbe differenze reali.
 * In quel caso non c'e' scenario condiviso e ogni parte resta per intero.
 *
 * Trasformazione di sola presentazione come splitPreamble: il dataset resta ground truth.
 */
export function splitSharedScenario(bodies: string[]): SplitScenario {
  if (bodies.length < 2) return { shared: "", parts: bodies };

  const first = bodies[0];
  let common = first.length;
  for (const body of bodies.slice(1)) {
    let i = 0;
    while (i < common && i < body.length && first[i] === body[i]) i++;
    common = i;
  }

  // Il prefisso comune si interrompe dove i testi divergono, che è quasi sempre in mezzo
  // alla frase della soluzione ("Solution: You access the ..."): si torna indietro
  // all'ultimo confine di frase, altrimenti lo scenario finirebbe troncato a metà.
  const cut = lastSentenceEnd(first.slice(0, common));
  if (cut < MIN_SHARED_SCENARIO) return { shared: "", parts: bodies };

  return { shared: first.slice(0, cut).trim(), parts: bodies.map((body) => body.slice(cut).trimStart()) };
}

function lastSentenceEnd(text: string): number {
  const cut = Math.max(text.lastIndexOf(". "), text.lastIndexOf("? "), text.lastIndexOf("! "));
  return cut === -1 ? 0 : cut + 1;
}
