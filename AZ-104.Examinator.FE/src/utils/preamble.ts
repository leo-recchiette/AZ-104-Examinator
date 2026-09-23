/**
 * Istruzioni d'esame di Microsoft da staccare dal corpo della domanda (vedi ExamNotice).
 * Riconosciute da incipit e frase finale, non per intero: la 321 ne ha una copia con un refuso.
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
  preamble: string | null;
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

const MIN_SHARED_SCENARIO = 80;

export interface SplitScenario {
  shared: string;
  parts: string[];
}

/**
 * Lo scenario ripetuto dai membri di una scenario series, da mostrare una volta sola. Si usa il
 * prefisso comune effettivo: in alcuni gruppi (ss02, ss03, ss21) i testi divergono subito.
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

  // Si torna all'ultimo confine di frase, per non troncare lo scenario a metà.
  const cut = lastSentenceEnd(first.slice(0, common));
  if (cut < MIN_SHARED_SCENARIO) return { shared: "", parts: bodies };

  return { shared: first.slice(0, cut).trim(), parts: bodies.map((body) => body.slice(cut).trimStart()) };
}

function lastSentenceEnd(text: string): number {
  const cut = Math.max(text.lastIndexOf(". "), text.lastIndexOf("? "), text.lastIndexOf("! "));
  return cut === -1 ? 0 : cut + 1;
}
