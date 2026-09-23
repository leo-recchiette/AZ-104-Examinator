/**
 * Segnaposto del dataset ("[box 1]", "(box 1)", "Box 1" a inizio segmento), spostati in testa
 * alla riga in fase di render. Pattern volutamente stretto: le quadre non devono toccare i
 * frammenti ARM ("[parameters('location')]"), e "Box 1:" nelle explanation e' prosa.
 */
const PLACEHOLDER = /\[(?:answer choice|box \d+)\]|\(box\s*\d+\)|^box\s*\d+\b(?!\s*:)/i;

const SEPARATOR = /(\n|\s\|\s)/;

const SEAM_PUNCTUATION = ".,;:/-";

export interface TextSegment {
  token: string | null;
  text: string;
  separator: string;
}

export function hoistPlaceholder(segment: string): { token: string | null; text: string } {
  const match = PLACEHOLDER.exec(segment);
  if (!match) return { token: null, text: segment };

  const before = segment.slice(0, match.index);
  let after = segment.slice(match.index + match[0].length);

  // "a.[box 2].b" -> "a.b"
  const seam = before.slice(-1);
  if (seam !== "" && seam === after.slice(0, 1) && SEAM_PUNCTUATION.includes(seam)) {
    after = after.slice(1);
  }

  const text = (before + after)
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,;:!?])/g, "$1")
    .replace(/,(?=[.;:!?])/g, "")
    .replace(/,$/, "")
    .trim();

  return { token: normalizeToken(match[0]), text };
}

/** Uniforma le tre notazioni in "[Box 1]" / "[Answer choice]". */
function normalizeToken(raw: string): string {
  const bare = raw.replace(/^[[(]/, "").replace(/[\])]$/, "").trim();
  const box = /^box\s*(\d+)$/i.exec(bare);
  const label = box
    ? `Box ${box[1]}`
    : bare.charAt(0).toUpperCase() + bare.slice(1).toLowerCase();
  return `[${label}]`;
}

export function hoistPlaceholders(text: string): TextSegment[] {
  const parts = text.split(SEPARATOR);
  const segments: TextSegment[] = [];
  for (let i = 0; i < parts.length; i += 2) {
    const { token, text: body } = hoistPlaceholder(parts[i]);
    segments.push({ token, text: body, separator: parts[i + 1] ?? "" });
  }
  return segments;
}

/** Per segmenti, non sul testo intero: la forma nuda e' ancorata a inizio segmento. */
export function hasPlaceholder(text: string): boolean {
  return text.split(SEPARATOR).some((segment, i) => i % 2 === 0 && PLACEHOLDER.test(segment));
}
