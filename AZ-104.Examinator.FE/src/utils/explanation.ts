/**
 * Spiegazioni del dataset, impaginate in fase di render: ogni "Box N:" e il "Reference:" finale
 * aprono un paragrafo, e gli URL spezzati dall'estrazione del PDF vengono ricuciti. Il testo nel
 * dataset resta com'e'.
 */
export interface ExplanationBlock {
  lead: string | null;
  text: string;
}

export interface InlineSegment {
  url: boolean;
  text: string;
}

const BLOCK_START = /\s+(?=(?:Box \d+|Reference):)/;

const LEAD = /^(Box \d+|Reference):\s*/;

/** "Box 3: No - Reference: ..." -> il trattino restava appeso alla fine del box. */
const TRAILING_DASH = /\s*[-–—]$/;

/** "...active-directory-users- profile-azure-portal": il trattino e' vero, lo spazio no. */
const BROKEN_URL = /(https?:\/\/\S*-)\s+(?=[a-z0-9#])/g;

const URL = /(https?:\/\/\S+)/;

const URL_TRAILING_PUNCTUATION = /[.,;:)]+$/;

export function splitExplanation(text: string): ExplanationBlock[] {
  let joined = text.trim();
  for (let previous = ""; previous !== joined; ) {
    previous = joined;
    joined = joined.replace(BROKEN_URL, "$1");
  }

  return joined
    .split(BLOCK_START)
    .map((part) => {
      const match = LEAD.exec(part);
      const body = match ? part.slice(match[0].length) : part;
      return { lead: match ? match[1] : null, text: body.replace(TRAILING_DASH, "").trim() };
    })
    .filter((block) => block.lead !== null || block.text !== "");
}

export function splitUrls(text: string): InlineSegment[] {
  const segments: InlineSegment[] = [];
  text.split(URL).forEach((part, i) => {
    if (i % 2 === 0) {
      if (part) segments.push({ url: false, text: part });
      return;
    }
    const trailing = URL_TRAILING_PUNCTUATION.exec(part)?.[0] ?? "";
    segments.push({ url: true, text: part.slice(0, part.length - trailing.length) });
    if (trailing) segments.push({ url: false, text: trailing });
  });
  return segments;
}
