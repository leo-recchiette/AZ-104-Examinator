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

/** Un tag scritto come nel dataset, "`tag1`: `value1`": i due punti interni non aprono un'altra coppia. */
const TAG_PAIR = "`[^`]*`:\\s*`[^`]*`";

/** Il valore di una coppia dopo cui riparte la prosa: un tag intero oppure un token solo. */
const CLOSING_VALUE = new RegExp(`^\\s*(?:${TAG_PAIR}|\\S+)`);

/** La prosa che riparte dopo l'ultimo valore: una maiuscola, o il " - " con cui la fonte a volte la stacca. */
const PROSE_RESTART = /^\s+(?:[-–—]\s|[A-Z])/;

/** Il trattino che la fonte lascia in testa alla prosa dopo un elenco di campi ("value2 - After Policy1 ..."). */
const LEADING_DASH = /^[-–—]\s*/;

/**
 * Valore di chiusura di una catena di campi seguita da altri campi piu' avanti: in "Tag value: value2
 * - After Policy1 is assigned, ... Name: storage1" il valore arriverebbe fino a "Name:" e, troppo
 * lungo, la coppia andrebbe persa. Si tiene il primo token solo se dopo riparte davvero una frase:
 * "Policy definition: Append a tag ..." non ha nessuna ripresa dopo "Append" e resta scartato.
 */
function closingValue(rest: string): string | null {
  const match = CLOSING_VALUE.exec(rest);
  if (!match || !PROSE_RESTART.test(rest.slice(match[0].length))) return null;
  return match[0];
}

function cleanValue(raw: string): string {
  // I backtick sono la notazione dei tag nel dataset: nel riquadro, gia' monospaziato, sono solo rumore.
  return raw.trim().replace(/[,;–—-]+$/, "").replace(/`/g, "").trim();
}

const LEAD = /(^|[^A-Za-z])(Solution:)\s*/;

/** Il glifo con cui la fonte apre le voci di un elenco: dove c'e' quello, l'elenco e' esplicito. */
const BULLET = "\u2711";

/** L'attacco di un elenco. Volutamente stretto: "the following table" e' un esibito, non una lista. */
const LIST_INTRO = /(?:the )?following (?:tasks|requirements)\s*:\s*/i;

/**
 * Dove l'elenco finisce e riprende la domanda. Serve perche' nel dataset il testo e' una riga
 * sola: dopo l'ultima voce riparte "What should you do?" senza nessun segno a separarle.
 */
const QUESTION_CUE = /(?:What|Which|How|To answer|To which|You need|You must|NOTE|Note)\b/;

/** Oltre questa misura non e' una voce di elenco ma un paragrafo finito li' dentro. */
const MAX_ITEM_LENGTH = 250;

const MIN_ITEMS = 2;

/** Taglia la voce dove ricomincia la domanda, anche a meta' frase (la fonte perde i punti fermi). */
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
    // Una frase che chiede qualcosa non e' un requisito: e' la domanda che riprende.
    const isQuestion = trimmed.endsWith("?") || new RegExp(`^${QUESTION_CUE.source}`).test(trimmed);
    if (!trimmed || isQuestion) break;
    items.push(trimmed);
  }
  return { items, tail: rest.slice(items.join(" ").length).trim() };
}

/**
 * Elenchi resi come elenchi: nel dataset "...the following requirements: Use the principle of
 * least privilege. Minimize administrative effort. What should you do?" e' una riga sola, e i
 * requisiti si perdono nella prosa proprio mentre servono per rispondere. Trasformazione di sola
 * presentazione: il testo non viene riscritto, solo spezzato.
 */
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

    // Un valore vuoto e' ammesso solo se la chiave seguente arriva subito: e' un'intestazione
    // ("Parameters: Tag name: tag2 ..."), non un campo rimasto senza valore.
    const value = cleanValue(raw);
    if (!value && !next) {
      flush();
      continue;
    }
    chain.push({ key: match[1], value, start: match.index, end: valueStart + raw.length });
    // Dopo un valore di chiusura riparte la prosa: la catena finisce qui anche se piu' avanti
    // ci sono altri campi, che formano un riquadro a parte.
    if (closes) flush();
  }
  flush();

  const tail = text.slice(cursor).trim().replace(LEADING_DASH, "");
  if (tail) segments.push(...splitText(tail));
  return segments;
}
