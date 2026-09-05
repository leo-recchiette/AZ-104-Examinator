import { useState } from "react";
import { useTheme } from "../../theme/ThemeContext";

interface ExamNoticeProps {
  text: string;
}

/**
 * Riquadro giallo collassabile per le istruzioni d'esame che precedono le domande di uno
 * scenario. Chiuso di default: sono sempre le stesse e ripeterle aperte ruberebbe la
 * schermata alla domanda, ma restano consultabili perche' fanno parte della consegna reale.
 */
export function ExamNotice({ text }: ExamNoticeProps) {
  const { tokens: t } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: `1px solid ${t.warnbd}`, background: t.warnbg, borderRadius: 11, marginBottom: 16 }}>
      <button
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        style={{
          display: "flex", alignItems: "center", gap: 8, width: "100%", background: "none", border: "none",
          padding: "11px 14px", color: t.warn, textAlign: "left", cursor: "pointer",
          // Nessun font:"inherit": la shorthand azzererebbe fontSize/fontWeight dichiarati qui.
          fontSize: 12.5, fontWeight: 600,
        }}
      >
        <svg
          width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}
          strokeLinecap="round" strokeLinejoin="round"
          style={{ flex: "none", transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform .15s" }}
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
        <span aria-hidden="true">⚠</span>
        <span style={{ flex: 1 }}>Exam instructions</span>
        <span style={{ fontWeight: 500, opacity: 0.8 }}>{open ? "Hide" : "Show"}</span>
      </button>
      {open && (
        <p style={{ margin: 0, padding: "0 14px 13px", fontSize: 13, lineHeight: 1.55, color: t.warn }}>
          {text}
        </p>
      )}
    </div>
  );
}
