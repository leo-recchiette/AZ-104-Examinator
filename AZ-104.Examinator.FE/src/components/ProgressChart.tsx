import { useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "../theme/ThemeContext";
import { PASS_MARK_PERCENT } from "../constants";
import { formatDateShort, formatDateTime, formatDuration } from "../utils/format";
import type { ExamAttemptDto } from "../types/answer";

const HEIGHT = 210;
const PAD = { top: 16, right: 20, bottom: 34, left: 44 };
const Y_TICKS = [0, 25, 50, 75, 100];

interface ProgressChartProps {
  /** Tentativi dal piu' vecchio al piu' recente: e' l'ordine in cui li restituisce getAllAttempts. */
  attempts: ExamAttemptDto[];
}

/**
 * Andamento dei punteggi: tempo sull'asse X, punteggio (0-100) sull'asse Y.
 *
 * Disegnato in pixel reali misurati sul contenitore, non dentro un viewBox riscalato: con
 * preserveAspectRatio="none" l'SVG veniva stirato in orizzontale e verticale in modo diverso,
 * trasformando i pallini in ellissi e allargando il testo delle etichette.
 */
export function ProgressChart({ attempts }: ProgressChartProps) {
  const { tokens: t } = useTheme();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    setWidth(el.clientWidth);
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const n = attempts.length;
  const innerW = Math.max(0, width - PAD.left - PAD.right);
  const innerH = HEIGHT - PAD.top - PAD.bottom;

  // I tentativi sono spaziati in modo uniforme nell'ordine in cui sono stati svolti, non in
  // proporzione alla distanza reale fra le date: due sessioni fatte a un mese l'una dall'altra
  // schiaccerebbero tutte le altre in un angolo. Le date agli estremi dicono il periodo coperto.
  const x = (i: number) => (n === 1 ? PAD.left + innerW / 2 : PAD.left + (i / (n - 1)) * innerW);
  const y = (pct: number) => PAD.top + (1 - Math.min(100, Math.max(0, pct)) / 100) * innerH;

  const points = attempts.map((a, i) => ({ x: x(i), y: y(a.percentage), attempt: a }));
  const hovered = active === null ? null : points[active];

  return (
    <div ref={wrapRef} style={{ position: "relative" }}>
      {width > 0 && (
        <svg
          width={width}
          height={HEIGHT}
          style={{ display: "block", overflow: "visible" }}
          onMouseLeave={() => setActive(null)}
        >
          {Y_TICKS.map((v) => (
            <g key={v}>
              <line x1={PAD.left} y1={y(v)} x2={width - PAD.right} y2={y(v)} stroke={t.bd2} strokeWidth={1} />
              <text x={PAD.left - 8} y={y(v) + 3.5} textAnchor="end" fontSize={10} fill={t.fa}>
                {v}%
              </text>
            </g>
          ))}

          {/* Soglia di superamento: da' un riferimento all'asse dei punteggi. */}
          <line
            x1={PAD.left} y1={y(PASS_MARK_PERCENT)} x2={width - PAD.right} y2={y(PASS_MARK_PERCENT)}
            stroke={t.ok} strokeWidth={1} strokeDasharray="4 4" opacity={0.7}
          />
          <text x={width - PAD.right} y={y(PASS_MARK_PERCENT) - 5} textAnchor="end" fontSize={9.5} fill={t.ok}>
            Pass {PASS_MARK_PERCENT}%
          </text>

          <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={PAD.top + innerH} stroke={t.bd3} strokeWidth={1} />

          <polyline
            points={points.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none" stroke={t.ac} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round"
          />

          {points.map((p, i) => (
            <g key={p.attempt.id}>
              <circle cx={p.x} cy={p.y} r={active === i ? 6 : 4} fill={t.ac} stroke={t.card} strokeWidth={active === i ? 2 : 0} />
              {/* Bersaglio invisibile piu' generoso del pallino: 4px di raggio sono scomodi da centrare. */}
              <circle
                cx={p.x} cy={p.y} r={15} fill="transparent" tabIndex={0} role="img"
                aria-label={`${p.attempt.percentage.toFixed(1)}% — ${formatDateTime(p.attempt.endTime)}, ${
                  p.attempt.mode === "practice" ? "practice" : "simulation"}, ${p.attempt.questionCount} questions`}
                style={{ cursor: "pointer", outline: "none" }}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                // Su touch non esiste l'hover: il tocco sul punto apre la stessa scheda.
                onClick={() => setActive((prev) => (prev === i ? null : i))}
              />
            </g>
          ))}

          {n > 0 && (
            <>
              <text x={PAD.left} y={HEIGHT - 12} fontSize={10} fill={t.fa}>
                {formatDateShort(attempts[0].endTime)}
              </text>
              {n > 1 && (
                <text x={width - PAD.right} y={HEIGHT - 12} textAnchor="end" fontSize={10} fill={t.fa}>
                  {formatDateShort(attempts[n - 1].endTime)}
                </text>
              )}
            </>
          )}
        </svg>
      )}

      {hovered && (
        <div
          role="tooltip"
          style={{
            position: "absolute", left: hovered.x, top: hovered.y - 14, pointerEvents: "none",
            // translate(-50%) centra la scheda sul punto; il clamp tiene i bordi dentro il pannello.
            transform: `translate(${Math.min(Math.max(hovered.x, 96), Math.max(width - 96, 96)) - hovered.x}px, -100%) translateX(-50%)`,
            background: t.card, border: `1px solid ${t.bd3}`, borderRadius: 10, padding: "9px 12px",
            boxShadow: `0 4px 14px ${t.sh}`, whiteSpace: "nowrap", zIndex: 2,
          }}
        >
          <div style={{
            fontSize: 15, fontWeight: 600, fontVariantNumeric: "tabular-nums",
            color: hovered.attempt.percentage >= PASS_MARK_PERCENT ? t.ok : t.er,
          }}>
            {hovered.attempt.percentage.toFixed(1)}%
          </div>
          <div style={{ fontSize: 12, color: t.tx2, marginTop: 2 }}>
            {formatDateTime(hovered.attempt.endTime)}
          </div>
          <div style={{ fontSize: 11.5, color: t.mu, marginTop: 2 }}>
            {hovered.attempt.mode === "practice" ? "Practice" : "Simulation"} · {hovered.attempt.questionCount} questions
            {" · "}{formatDuration(hovered.attempt.startTime, hovered.attempt.endTime)}
          </div>
        </div>
      )}
    </div>
  );
}
