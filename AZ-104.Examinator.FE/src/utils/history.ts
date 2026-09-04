const STORAGE_KEY = "az104-history";

export interface HistoryEntry {
  pct: number;
  date: number;
}

/** Storico dei punteggi delle sessioni completate, usato dal pannello "Your progress" della mode-select. */
export function getHistory(): HistoryEntry[] {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(raw)) return [];
    return raw.filter((e): e is HistoryEntry => typeof e?.pct === "number" && typeof e?.date === "number");
  } catch {
    return [];
  }
}

export function appendHistoryEntry(pct: number): HistoryEntry[] {
  const next = [...getHistory(), { pct, date: Date.now() }];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // localStorage non disponibile: lo storico resta comunque valido per la sessione corrente.
  }
  return next;
}
