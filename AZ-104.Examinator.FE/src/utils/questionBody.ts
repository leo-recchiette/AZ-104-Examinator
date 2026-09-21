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
  "Container name", "Networking type", "OS type", "Operating system", "Memory (GiB)", "Memory",
  "Number of CPU cores", "Image", "Restart policy", "DNS name label", "Resource group",
  "Scope", "Exclusions", "Policy definition", "Policy enforcement", "Tag name", "Tag value",
];

const KEY = new RegExp(
  `(${[...SPEC_KEYS].sort((a, b) => b.length - a.length).map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")}):\\s*`,
  "g",
);

/** Il punto decimale di "2.5" non chiude una frase, " value. " si'. */
const SENTENCE_END = /[.?!](\s|$)/;

/** Oltre questa misura non e' il valore di un campo ma prosa finita in mezzo. */
const MAX_VALUE_LENGTH = 60;

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

  // Il valore arriva fino alla chiave seguente, cosi' regge anche quando e' una frase
  // ("Policy definition: Append a tag and its value to resources"). Sull'ultima coppia quella
  // chiave non c'e' e dopo il valore riparte la prosa, quindi li' si prende un token solo.
  const keys = [...text.matchAll(KEY)];
  for (let i = 0; i < keys.length; i++) {
    const match = keys[i];
    const valueStart = match.index + match[0].length;
    const next = keys[i + 1];
    const raw = next ? text.slice(valueStart, next.index) : (text.slice(valueStart).match(/^\S*/)?.[0] ?? "");
    const value = raw.trim().replace(/[,;–—-]+$/, "").trim();

    if (!value || (next && (value.length > MAX_VALUE_LENGTH || SENTENCE_END.test(value)))) {
      flush();
      continue;
    }
    chain.push({ key: match[1], value, start: match.index, end: valueStart + raw.length });
  }
  flush();

  const tail = text.slice(cursor).trim();
  if (tail) segments.push(...splitLead(tail));
  return segments;
}
