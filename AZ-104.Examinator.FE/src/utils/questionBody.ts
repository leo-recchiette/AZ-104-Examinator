export interface SpecPair {
  key: string;
  value: string;
}

export type QuestionSegment =
  | { kind: "text"; lead?: string; text: string }
  | { kind: "spec"; pairs: SpecPair[] }
  | { kind: "list"; items: string[] };

const SPEC_KEYS = [
  "Source port range", "Destination port range", "Virtual network",
  "Source", "Destination", "Priority", "Protocol", "Action", "Direction", "Port",
  "Name", "Type", "Tier", "SKU", "Subnet", "Region", "Location", "Size", "Status", "Service",
  "Container name", "Networking type", "OS type", "Operating system", "Memory (GiB)", "Memory",
  "Number of CPU cores", "Image", "Restart policy", "DNS name label", "Resource group",
  "Scope", "Exclusions", "Policy definition", "Policy enforcement", "Tag name", "Tag value",
  "Tag", "Tags", "Assignment name", "Parameters",
  "Performance", "Replication", "Access tier (default)", "Hierarchical namespace",
];

const KEY = new RegExp(
  `(${[...SPEC_KEYS].sort((a, b) => b.length - a.length).map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")}):\\s*`,
  "g",
);

const SENTENCE_END = /[.?!](\s|$)/;

const MAX_VALUE_LENGTH = 60;

const MIN_PAIRS = 3;

/** "`tag1`: `value1`": i due punti interni non aprono un'altra coppia. */
const TAG_PAIR = "`[^`]*`:\\s*`[^`]*`";

const CLOSING_VALUE = new RegExp(`^\\s*(?:${TAG_PAIR}|\\S+)`);

const PROSE_RESTART = /^\s+(?:[-–—]\s|[A-Z])/;

const LEADING_DASH = /^[-–—]\s*/;

/**
 * Ultimo valore di una catena seguita da prosa ("Tag value: value2 - After Policy1 ..."): si tiene
 * il primo token solo se dopo riparte davvero una frase.
 */
function closingValue(rest: string): string | null {
  const match = CLOSING_VALUE.exec(rest);
  if (!match || !PROSE_RESTART.test(rest.slice(match[0].length))) return null;
  return match[0];
}

function cleanValue(raw: string): string {
  return raw.trim().replace(/[,;–—-]+$/, "").replace(/`/g, "").trim();
}

const LEAD = /(^|[^A-Za-z])(Solution:)\s*/;

const BULLET = "\u2711";

/** Volutamente stretto: "the following table" e' un esibito, non una lista. */
const LIST_INTRO = /(?:the )?following (?:tasks|requirements)\s*:\s*/i;

/** Dove riprende la domanda dopo l'ultima voce: nel dataset il testo e' una riga sola. */
const QUESTION_CUE = /(?:What|Which|How|To answer|To which|You need|You must|NOTE|Note)\b/;

const MAX_ITEM_LENGTH = 250;

const MIN_ITEMS = 2;

/** Anche a meta' frase: la fonte perde i punti fermi. */
function cutAtQuestion(item: string): { item: string; tail: string } {
  const cue = new RegExp(`\\s(?=${QUESTION_CUE.source})`).exec(item);
  if (!cue) return { item, tail: "" };
  return { item: item.slice(0, cue.index).trim(), tail: item.slice(cue.index).trim() };
}

function splitBulleted(rest: string): { items: string[]; tail: string } {
  const parts = rest.split(BULLET).map((part) => part.trim()).filter(Boolean);
  if (parts.length === 0) return { items: [], tail: "" };
  const last = cutAtQuestion(parts[parts.length - 1]);
  return { items: [...parts.slice(0, -1), last.item], tail: last.tail };
}

function splitSentences(rest: string): { items: string[]; tail: string } {
  const sentences = rest.split(/(?<=[.?!])\s+/);
  const items: string[] = [];
  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    const isQuestion = trimmed.endsWith("?") || new RegExp(`^${QUESTION_CUE.source}`).test(trimmed);
    if (!trimmed || isQuestion) break;
    items.push(trimmed);
  }
  return { items, tail: rest.slice(items.join(" ").length).trim() };
}

/** "...the following requirements: A. B. What should you do?" diventa un elenco vero. */
function splitList(segment: QuestionSegment): QuestionSegment[] {
  if (segment.kind !== "text") return [segment];

  const intro = LIST_INTRO.exec(segment.text);
  if (!intro) return [segment];

  const head = segment.text.slice(0, intro.index + intro[0].length).trim();
  const rest = segment.text.slice(intro.index + intro[0].length);
  const { items, tail } = rest.includes(BULLET) ? splitBulleted(rest) : splitSentences(rest);

  if (items.length < MIN_ITEMS || items.some((item) => item.length > MAX_ITEM_LENGTH)) return [segment];

  const segments: QuestionSegment[] = [{ kind: "text", lead: segment.lead, text: head }];
  segments.push({ kind: "list", items });
  if (tail) segments.push({ kind: "text", text: tail });
  return segments;
}

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

const EXHIBIT_TAB_HINT = /\s*\(Click the [^()]+ tab\.\)/g;

export function splitQuestionBody(rawText: string): QuestionSegment[] {
  const text = rawText.replace(EXHIBIT_TAB_HINT, "").trim();
  const segments: QuestionSegment[] = [];
  let chain: { key: string; value: string; start: number; end: number }[] = [];
  let cursor = 0;

  function splitText(chunk: string): QuestionSegment[] {
    return splitLead(chunk).flatMap(splitList);
  }

  function flush() {
    if (chain.length < MIN_PAIRS) {
      chain = [];
      return;
    }
    const head = text.slice(cursor, chain[0].start).trim().replace(LEADING_DASH, "");
    if (head) segments.push(...splitText(head));
    segments.push({ kind: "spec", pairs: chain.map(({ key, value }) => ({ key, value })) });
    cursor = chain[chain.length - 1].end;
    chain = [];
  }

  const keys = [...text.matchAll(KEY)];
  for (let i = 0; i < keys.length; i++) {
    const match = keys[i];
    const valueStart = match.index + match[0].length;
    const next = keys[i + 1];
    const rest = text.slice(valueStart, next?.index);
    let raw = next ? rest : (CLOSING_VALUE.exec(rest)?.[0] ?? "");
    let closes = false;

    if (next && (cleanValue(raw).length > MAX_VALUE_LENGTH || SENTENCE_END.test(cleanValue(raw)))) {
      const closing = closingValue(rest);
      if (closing === null) {
        flush();
        continue;
      }
      raw = closing;
      closes = true;
    }

    // Valore vuoto solo per un'intestazione seguita da un'altra chiave ("Parameters: Tag name: ...").
    const value = cleanValue(raw);
    if (!value && !next) {
      flush();
      continue;
    }
    chain.push({ key: match[1], value, start: match.index, end: valueStart + raw.length });
    if (closes) flush();
  }
  flush();

  const tail = text.slice(cursor).trim().replace(LEADING_DASH, "");
  if (tail) segments.push(...splitText(tail));
  return segments;
}
