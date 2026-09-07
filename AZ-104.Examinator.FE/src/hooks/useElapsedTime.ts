import { useEffect, useRef, useState } from "react";

/**
 * Millisecondi trascorsi da startedAt, ricalcolati da Date.now() a ogni tick
 * (non un contatore che si incrementa da solo: resta corretto anche se il
 * timer del browser viene rallentato da un tab in background).
 *
 * Il valore vive SOLO qui, mai nel SessionContext: un tick al secondo deve
 * ri-renderizzare solo il componente che lo usa (la barra di progresso), non
 * l'intero albero della domanda corrente.
 *
 * Con 'paused' l'orologio si ferma: il tempo passato in pausa viene accumulato e
 * sottratto, cosi' il conteggio resta comunque ancorato a Date.now() invece di
 * diventare un contatore incrementale (che perderebbe i secondi di un tab in
 * background, proprio il difetto che questo hook evita). Le pause vivono in una
 * ref e non in uno stato: servono al prossimo calcolo, non al rendering.
 */
export function useElapsedTime(startedAt: number | null, paused = false, intervalMs = 1000): number {
  const [elapsedMs, setElapsedMs] = useState(() => (startedAt !== null ? Date.now() - startedAt : 0));
  const pausedTotalRef = useRef(0);
  const pausedSinceRef = useRef<number | null>(null);

  useEffect(() => {
    if (startedAt === null) return;

    if (paused) {
      // Nessun interval: il valore mostrato resta all'ultimo tick, cioe' fermo.
      pausedSinceRef.current = Date.now();
      return;
    }

    if (pausedSinceRef.current !== null) {
      pausedTotalRef.current += Date.now() - pausedSinceRef.current;
      pausedSinceRef.current = null;
    }

    const read = () => setElapsedMs(Date.now() - startedAt - pausedTotalRef.current);
    read();
    const id = setInterval(read, intervalMs);
    return () => clearInterval(id);
  }, [startedAt, paused, intervalMs]);

  return elapsedMs;
}
