/**
 * I testi del dataset contengono segnaposto ("[answer choice]", "[box 1]", ...)
 * nel punto della frase dove andrebbe la risposta. In mezzo alla riga sono poco
 * leggibili sullo schermo, quindi in fase di RENDER li spostiamo in testa e li
 * mostriamo in grassetto (vedi components/PlaceholderText.tsx). E' una
 * trasformazione puramente di presentazione: il dataset resta ground truth.
 *
 * Il pattern e' volutamente stretto: le explanation contengono frammenti di
 * template ARM tra parentesi quadre ("[parameters('location')]") che non vanno
 * MAI toccati.
 */
const PLACEHOLDER = /\[(?:answer choice|box \d+)\]/i;

/** Separatori entro cui il segnaposto va spostato: fine riga e il " | " che divide le righe in answerText. */
const SEPARATOR = /(\n|\s\|\s)/;

/** Punteggiatura che, se resta duplicata a cavallo del segnaposto rimosso, va collassata (es. "mystorageaccount.[box 2].core" -> "mystorageaccount.core"). */
const SEAM_PUNCTUATION = ".,;:/-";

export interface TextSegment {
  /** Segnaposto trovato nel segmento, gia' pronto per il grassetto; null se il segmento non ne ha. */
  token: string | null;
  /** Il segmento senza il segnaposto, ripulito dagli spazi/virgole rimasti orfani. */
  text: string;
  /** Il separatore che seguiva il segmento nel testo originale ("" per l'ultimo). */
  separator: string;
}

/** Estrae il primo segnaposto di un singolo segmento e restituisce il resto ripulito. */
export function hoistPlaceholder(segment: string): { token: string | null; text: string } {
  const match = PLACEHOLDER.exec(segment);
  if (!match) return { token: null, text: segment };

  const before = segment.slice(0, match.index);
  let after = segment.slice(match.index + match[0].length);

  // "a.[box 2].b" -> "a.b": togliendo il segnaposto la punteggiatura si duplicherebbe.
  const seam = before.slice(-1);
  if (seam !== "" && seam === after.slice(0, 1) && SEAM_PUNCTUATION.includes(seam)) {
    after = after.slice(1);
  }

  const text = (before + after)
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,;:!?])/g, "$1")
    // Virgola rimasta appesa dove il segnaposto chiudeva la frase ("...fail, [answer choice]." -> "...fail.").
    .replace(/,(?=[.;:!?])/g, "")
    .replace(/,$/, "")
    .trim();

  return { token: match[0], text };
}

/** Applica hoistPlaceholder a ogni segmento del testo, conservando i separatori originali. */
export function hoistPlaceholders(text: string): TextSegment[] {
  const parts = text.split(SEPARATOR);
  const segments: TextSegment[] = [];
  for (let i = 0; i < parts.length; i += 2) {
    const { token, text: body } = hoistPlaceholder(parts[i]);
    segments.push({ token, text: body, separator: parts[i + 1] ?? "" });
  }
  return segments;
}

/** True se il testo contiene almeno un segnaposto: evita di montare markup inutile sui testi normali. */
export function hasPlaceholder(text: string): boolean {
  return PLACEHOLDER.test(text);
}
