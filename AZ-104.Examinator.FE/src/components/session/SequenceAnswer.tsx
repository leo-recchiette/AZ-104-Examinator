import type { CSSProperties } from "react";
import { useTheme } from "../../theme/ThemeContext";
import type { AnswerRowDto } from "../../types/answer";

interface SequenceAnswerProps {
  draggableItems: string[];
  value: string[];
  onChange: (next: string[]) => void;
  /** Presente solo dopo la rivelazione: sequenza corretta, posizionale. */
  answerRows?: AnswerRowDto[];
}

/**
 * Non un vero gesto di drag: pool a sinistra (click per aggiungere) e
 * sequenza a destra riordinabile con frecce su/giu'/rimuovi — lo stesso
 * pattern del mockup, piu' semplice e accessibile di un drag reale.
 */
export function SequenceAnswer({ draggableItems, value, onChange, answerRows }: SequenceAnswerProps) {
  const { tokens: t } = useTheme();
  const revealed = answerRows !== undefined;
  const chosen = value;

  function append(label: string) {
    if (chosen.includes(label) || chosen.length >= draggableItems.length) return;
    onChange([...chosen, label]);
  }
  function moveUp(i: number) {
    if (i === 0) return;
    const next = [...chosen];
    [next[i - 1], next[i]] = [next[i], next[i - 1]];
    onChange(next);
  }
  function moveDown(i: number) {
    if (i === chosen.length - 1) return;
    const next = [...chosen];
    [next[i], next[i + 1]] = [next[i + 1], next[i]];
    onChange(next);
  }
  function remove(i: number) {
    onChange(chosen.filter((_, j) => j !== i));
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600, color: t.fa, marginBottom: 10 }}>
          Available items
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {draggableItems.map((label) => {
            const used = chosen.includes(label);
            return (
              <button
                key={label}
                onClick={() => append(label)}
                disabled={used}
                style={{
                  textAlign: "left", padding: "12px 14px", borderRadius: 10,
                  border: `1px dashed ${used ? t.bd2 : t.bd3}`, background: used ? t.bg : t.card,
                  fontSize: 13.5, lineHeight: 1.45, color: used ? t.dis : t.tx2, font: "inherit",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600, color: t.fa, marginBottom: 10 }}>
          Your sequence ({chosen.length} of {draggableItems.length})
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, minHeight: 60 }}>
          {chosen.map((label, i) => {
            let bd = t.bd;
            let bg = t.card;
            if (revealed) {
              const ok = answerRows[i]?.answer === label;
              bd = ok ? t.ok : t.er;
              bg = ok ? t.okbg : t.erbg;
            }
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 12px", borderRadius: 10, border: `1.5px solid ${bd}`, background: bg }}>
                <span style={{ flex: "none", width: 22, height: 22, borderRadius: "50%", background: t.tx, color: t.card, display: "grid", placeItems: "center", fontSize: 11.5, fontWeight: 700 }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: 13.5, lineHeight: 1.4, flex: 1 }}>{label}</span>
                <span style={{ display: "flex", gap: 3 }}>
                  <button onClick={() => moveUp(i)} style={arrowButtonStyle(t.bd, t.card, t.mu)}>↑</button>
                  <button onClick={() => moveDown(i)} style={arrowButtonStyle(t.bd, t.card, t.mu)}>↓</button>
                  <button onClick={() => remove(i)} style={arrowButtonStyle(t.bd, t.card, t.mu)}>✕</button>
                </span>
              </div>
            );
          })}
          {chosen.length === 0 && (
            <div style={{ padding: "18px 14px", border: `1px dashed ${t.bd3}`, borderRadius: 10, fontSize: 13, color: t.fa2, textAlign: "center" }}>
              Select items on the left to build the sequence
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function arrowButtonStyle(bd: string, bg: string, fg: string): CSSProperties {
  return { width: 24, height: 24, borderRadius: 6, border: `1px solid ${bd}`, background: bg, fontSize: 11, color: fg, padding: 0, font: "inherit" };
}
