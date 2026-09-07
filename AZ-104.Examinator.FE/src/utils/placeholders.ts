/**
 * I testi del dataset contengono segnaposto ("[answer choice]", "[box 1]", ...)
 * nel punto della frase dove andrebbe la risposta. In mezzo alla riga sono poco
 * leggibili sullo schermo, quindi in fase di RENDER li spostiamo in testa e li
 * mostriamo in grassetto (vedi components/PlaceholderText.tsx). E' una
 * trasformazione puramente di presentazione: il dataset resta ground truth.
 *
 * Il dataset non usa una notazione sola: sulle 606 domande il segnaposto compare in
 * tre forme, tutte da riconoscere qui (i conteggi sono su prompt + answer_text, gli
 * unici campi che passano da PlaceholderText).
 *   [box 1] / [answer choice]  104x  in mezzo alla frase, fra parentesi quadre.
 *   (box 1)                     10x  in coda a un contesto, fra tonde ('"baseBlob" (box 1)').
 *   Box 1                       15x  nudo a inizio segmento, da solo o seguito da un
 *                                    chiarimento ('Box 2 (dopo settings)', 'Box 1 -> az').
 * Le tre forme vengono rese con l'etichetta unica "[Box 1]" (vedi normalizeToken).
 *
 * Il pattern resta comunque stretto, in tre punti:
 *   - le quadre chiedono le parole esatte: le explanation contengono frammenti di template
 *     ARM ("[parameters('location')]") che non vanno MAI toccati;
 *   - la forma nuda vale solo a inizio segmento, altrimenti colpirebbe un "box 1" citato
 *     dentro una frase;
 *   - la forma nuda esclude "Box 1:", che nelle explanation e' prosa discorsiva
 *     ("Box 1: Assign a tag to each resource", 109 occorrenze) e non un segnaposto.
 */
const PLACEHOLDER = /\[(?:answer choice|box \d+)\]|\(box\s*\d+\)|^box\s*\d+\b(?!\s*:)/i;

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

  return { token: normalizeToken(match[0]), text };
}

/**
 * Riporta le tre notazioni del dataset a un'etichetta sola, "[Box 1]" / "[Answer choice]": i
 * delimitatori (quadre, tonde, nessuno) e la capitalizzazione sono accidenti di come le domande
 * sono state trascritte, non informazione, e mostrarli come sono darebbe tre stili di etichetta
 * diversi nella stessa schermata.
 */
function normalizeToken(raw: string): string {
  const bare = raw.replace(/^[[(]/, "").replace(/[\])]$/, "").trim();
  const box = /^box\s*(\d+)$/i.exec(bare);
  const label = box
    ? `Box ${box[1]}`
    : bare.charAt(0).toUpperCase() + bare.slice(1).toLowerCase();
  return `[${label}]`;
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

/**
 * True se il testo contiene almeno un segnaposto: evita di montare markup inutile sui testi normali.
 * Va per segmenti come hoistPlaceholders, non sul testo intero: la forma nuda e' ancorata a inizio
 * segmento, e su "a | Box 2" l'ancora fallirebbe pur essendoci un segnaposto nel secondo segmento.
 */
export function hasPlaceholder(text: string): boolean {
  return text.split(SEPARATOR).some((segment, i) => i % 2 === 0 && PLACEHOLDER.test(segment));
}
