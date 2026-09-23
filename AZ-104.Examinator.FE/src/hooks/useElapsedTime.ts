import { useEffect, useRef, useState } from "react";

/**
 * Ricalcolato da Date.now() a ogni tick, cosi' resta giusto anche con un tab in background; le
 * pause si sottraggono. Mai nel SessionContext: il tick rirenderizzerebbe tutta la domanda.
 */
export function useElapsedTime(startedAt: number | null, paused = false, intervalMs = 1000): number {
  const [elapsedMs, setElapsedMs] = useState(() => (startedAt !== null ? Date.now() - startedAt : 0));
  const pausedTotalRef = useRef(0);
  const pausedSinceRef = useRef<number | null>(null);

  useEffect(() => {
    if (startedAt === null) return;

    if (paused) {
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
