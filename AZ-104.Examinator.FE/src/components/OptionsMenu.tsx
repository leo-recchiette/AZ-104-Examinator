import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/ThemeContext";
import {
  QUESTION_FONT_SIZE_MAX,
  QUESTION_FONT_SIZE_MIN,
  QUESTION_FONT_SIZE_STEP,
  useDisplaySettings,
} from "../settings/DisplaySettingsContext";

interface OptionsMenuProps {
  /** "onDark" per il banner blu di sessione/revisione, dove il trigger galleggia su sfondo scuro qualunque sia il tema. */
  variant?: "default" | "onDark";
}

/** Menu Options della navbar: dimensione del testo delle domande e tema chiaro/scuro. */
export function OptionsMenu({ variant = "default" }: OptionsMenuProps) {
  const { theme, tokens: t, toggleTheme } = useTheme();
  const { questionFontSize, setQuestionFontSize } = useDisplaySettings();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const onDark = variant === "onDark";

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  /** Il tema si cambia solo se diverso da quello scelto: cliccare la voce gia' attiva non deve invertirlo. */
  function selectTheme(next: "light" | "dark") {
    if (theme !== next) toggleTheme();
  }

  const atMin = questionFontSize <= QUESTION_FONT_SIZE_MIN;
  const atMax = questionFontSize >= QUESTION_FONT_SIZE_MAX;

  return (
    <div ref={rootRef} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        style={{
          display: "flex", alignItems: "center", gap: 7, padding: "7px 12px", borderRadius: 9,
          fontSize: 13, fontWeight: 500, font: "inherit", whiteSpace: "nowrap",
          border: onDark ? "1px solid rgba(255,255,255,.4)" : `1px solid ${t.bd3}`,
          background: onDark ? "rgba(255,255,255,.15)" : t.card,
          color: onDark ? "#fff" : t.mu,
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
          <path d="M19.4 13a7.7 7.7 0 0 0 0-2l2-1.5-2-3.4-2.3 1a7.6 7.6 0 0 0-1.8-1L14.9 3H9.1l-.4 2.6c-.6.2-1.2.6-1.8 1l-2.3-1-2 3.4L4.6 11a7.7 7.7 0 0 0 0 2l-2 1.5 2 3.4 2.3-1c.6.4 1.2.8 1.8 1l.4 2.6h5.8l.4-2.6c.6-.2 1.2-.6 1.8-1l2.3 1 2-3.4-2-1.5Z" fillOpacity=".28" />
        </svg>
        Options
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Options"
          style={{
            position: "absolute", top: "calc(100% + 10px)", right: 0, zIndex: 40, width: 272,
            background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: "18px 18px 16px",
            boxShadow: "0 10px 30px rgba(0,0,0,.22)", color: t.tx, textAlign: "left",
          }}
        >
          <div style={sectionLabelStyle(t.fa)}>Question text size</div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <button
              onClick={() => setQuestionFontSize(questionFontSize - QUESTION_FONT_SIZE_STEP)}
              disabled={atMin}
              aria-label="Decrease question text size"
              style={stepperStyle(t.bd3, t.card, t.tx2, atMin)}
            >
              −
            </button>
            <div style={{ flex: 1, textAlign: "center", fontSize: 15, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>
              {questionFontSize} px
            </div>
            <button
              onClick={() => setQuestionFontSize(questionFontSize + QUESTION_FONT_SIZE_STEP)}
              disabled={atMax}
              aria-label="Increase question text size"
              style={stepperStyle(t.bd3, t.card, t.tx2, atMax)}
            >
              +
            </button>
          </div>
          <div style={{ height: 1, background: t.bd2, margin: "0 0 16px" }} />

          <div style={sectionLabelStyle(t.fa)}>Appearance</div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => selectTheme("light")} style={themePillStyle(theme === "light", t)}>
              ☾ Light
            </button>
            <button onClick={() => selectTheme("dark")} style={themePillStyle(theme === "dark", t)}>
              ☀ Dark
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function sectionLabelStyle(fa: string) {
  return {
    fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600, color: fa, marginBottom: 10,
  } as const;
}

function stepperStyle(border: string, bg: string, fg: string, disabled: boolean) {
  return {
    width: 34, height: 34, borderRadius: 9, border: `1px solid ${border}`, background: bg, color: fg,
    fontSize: 17, lineHeight: 1, padding: 0, display: "grid", placeItems: "center", font: "inherit",
    opacity: disabled ? 0.45 : 1,
  } as const;
}

function themePillStyle(active: boolean, t: { ac: string; acs: string; bd3: string; card: string; mu: string }) {
  return {
    flex: 1, padding: "9px 0", borderRadius: 9, fontSize: 13.5, fontWeight: 500, font: "inherit",
    border: `1.5px solid ${active ? t.ac : t.bd3}`, background: active ? t.acs : t.card, color: active ? t.ac : t.mu,
  } as const;
}
