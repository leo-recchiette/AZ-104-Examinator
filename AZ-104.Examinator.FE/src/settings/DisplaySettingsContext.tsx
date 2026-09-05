import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

/**
 * Preferenze di lettura scelte dall'utente dal menu Options, separate da ThemeContext:
 * quello risolve i token di colore del mockup, qui c'e' solo cio' che l'utente regola a mano.
 */

const STORAGE_KEY = "az104-question-font-size";

/**
 * Corpo del testo della domanda, in px. Il mockup usava 20.5 fisso, troppo grande sulle
 * domande lunghe: il default scende a 15 e resta regolabile fino a 22 per chi vuole la resa
 * originale. Il minimo di 14 e' il corpo del testo di servizio della card: sotto, la domanda
 * non si distinguerebbe piu' dalle opzioni di risposta.
 */
export const QUESTION_FONT_SIZE_MIN = 14;
export const QUESTION_FONT_SIZE_MAX = 22;
export const QUESTION_FONT_SIZE_DEFAULT = 15;
export const QUESTION_FONT_SIZE_STEP = 1;

interface DisplaySettingsValue {
  questionFontSize: number;
  /** Il valore viene sempre riportato dentro [MIN, MAX]: i chiamanti non devono preoccuparsi dei limiti. */
  setQuestionFontSize: (px: number) => void;
}

const DisplaySettingsContext = createContext<DisplaySettingsValue | null>(null);

function clamp(px: number): number {
  return Math.min(QUESTION_FONT_SIZE_MAX, Math.max(QUESTION_FONT_SIZE_MIN, px));
}

function readStoredFontSize(): number | null {
  try {
    const stored = Number(localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(stored) && stored > 0 ? clamp(stored) : null;
  } catch {
    return null;
  }
}

export function DisplaySettingsProvider({ children }: { children: ReactNode }) {
  const [questionFontSize, setSize] = useState<number>(() => readStoredFontSize() ?? QUESTION_FONT_SIZE_DEFAULT);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(questionFontSize));
    } catch {
      // localStorage non disponibile: la preferenza resta valida per la sessione corrente.
    }
  }, [questionFontSize]);

  function setQuestionFontSize(px: number) {
    setSize(clamp(px));
  }

  return (
    <DisplaySettingsContext.Provider value={{ questionFontSize, setQuestionFontSize }}>
      {children}
    </DisplaySettingsContext.Provider>
  );
}

export function useDisplaySettings(): DisplaySettingsValue {
  const ctx = useContext(DisplaySettingsContext);
  if (!ctx) throw new Error("useDisplaySettings deve essere usato dentro un DisplaySettingsProvider");
  return ctx;
}
