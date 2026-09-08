/**
 * Formattazioni usate dallo storico. Locale "en-GB": il resto della UI e' in inglese
 * e il formato giorno/mese e' quello atteso da chi la legge, a differenza del default
 * americano che verrebbe fuori dal locale del browser.
 */
const DATE_TIME = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit",
});

export function formatDateTime(iso: string): string {
  return DATE_TIME.format(new Date(iso));
}

/** Durata fra due istanti ISO, come "1h 24m" o "18m 40s": e' il tempo che l'utente ha impiegato, non un cronometro. */
export function formatDuration(startIso: string, endIso: string): string {
  const seconds = Math.max(0, Math.round((new Date(endIso).getTime() - new Date(startIso).getTime()) / 1000));
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}
