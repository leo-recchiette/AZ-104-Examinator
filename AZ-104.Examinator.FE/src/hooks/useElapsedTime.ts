import { useEffect, useState } from "react";

/**
 * Millisecondi trascorsi da startedAt, ricalcolati da Date.now() a ogni tick
 * (non un contatore che si incrementa da solo: resta corretto anche se il
 * timer del browser viene rallentato da un tab in background).
 *
 * Il valore vive SOLO qui, mai nel SessionContext: un tick al secondo deve
 * ri-renderizzare solo il componente che lo usa (la barra di progresso), non
 * l'intero albero della domanda corrente.
 */
export function useElapsedTime(startedAt: number | null, intervalMs = 1000): number {
  const [elapsedMs, setElapsedMs] = useState(() => (startedAt !== null ? Date.now() - startedAt : 0));

  useEffect(() => {
    if (startedAt === null) return;
    setElapsedMs(Date.now() - startedAt);
    const id = setInterval(() => setElapsedMs(Date.now() - startedAt), intervalMs);
    return () => clearInterval(id);
  }, [startedAt, intervalMs]);

  return elapsedMs;
}
