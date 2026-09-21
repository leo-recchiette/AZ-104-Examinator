export interface SpecPair {
  key: string;
  value: string;
}

export type QuestionSegment =
  /** `lead` e' l'etichetta che apre il segmento ("Solution:"), da rendere in grassetto. */
  | { kind: "text"; lead?: string; text: string }
  | { kind: "spec"; pairs: SpecPair[] };

const SPEC_KEYS = [
  "Source port range", "Destination port range", "Virtual network",
  "Source", "Destination", "Priority", "Protocol", "Action", "Direction", "Port",
  "Name", "Type", "Tier", "SKU", "Subnet", "Region", "Location", "Size", "Status", "Service",
];

const PAIR = new RegExp(`(${SPEC_KEYS.join("|")}):\\s*(\\S+)`, "g");

const GAP = /^[\s,;–—-]*$/;

const MIN_PAIRS = 3;

const LEAD = /(^|[^A-Za-z])(Solution:)\s*/;

function splitLead(text: string): QuestionSegment[] {
  const match = LEAD.exec(text);
  if (!match) return [{ kind: "text", text }];

  const before = text.slice(0, match.index + match[1].length).trim();
  const after = text.slice(match.index + match[0].length).trim();
  const segments: QuestionSegment[] = [];
  if (before) segments.push({ kind: "text", text: before });
  segments.push({ kind: "text", lead: match[2], text: after });
  return segments;
}

export function splitQuestionBody(text: string): QuestionSegment[] {
  const segments: QuestionSegment[] = [];
  let chain: { key: string; value: string; start: number; end: number }[] = [];
  let cursor = 0;

  function flush() {
    if (chain.length < MIN_PAIRS) {
      chain = [];
      return;
    }
    const head = text.slice(cursor, chain[0].start).trim();
    if (head) segments.push(...splitLead(head));
    segments.push({ kind: "spec", pairs: chain.map(({ key, value }) => ({ key, value })) });
    cursor = chain[chain.length - 1].end;
    chain = [];
  }

  PAIR.lastIndex = 0;
  let match: RegExpExecArray | null;
  let prevEnd: number | null = null;
  while ((match = PAIR.exec(text)) !== null) {
    if (prevEnd !== null && !GAP.test(text.slice(prevEnd, match.index))) flush();
    chain.push({ key: match[1], value: match[2], start: match.index, end: match.index + match[0].length });
    prevEnd = match.index + match[0].length;
  }
  flush();

  const tail = text.slice(cursor).trim();
  if (tail) segments.push(...splitLead(tail));
  return segments;
}
