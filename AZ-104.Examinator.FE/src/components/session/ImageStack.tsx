import { useState } from "react";
import { useTheme } from "../../theme/ThemeContext";
import { imageUrl } from "../../utils/images";

interface ImageStackProps {
  filenames: string[];
}

/**
 * Pila di screenshot (spesso 1, a volte 2-3 per domanda), usata sia per le immagini pre-risposta
 * che per quelle della spiegazione. Nascosta dietro uno spoiler stile "Exhibit" (etichetta minuscola
 * con freccia sopra una linea sottile blu) e con altezza limitata: alcuni screenshot del dataset sono
 * enormi e, mostrati subito a piena dimensione, spingerebbero il testo della domanda fuori dallo schermo.
 */
export function ImageStack({ filenames }: ImageStackProps) {
  const { tokens: t } = useTheme();
  const [open, setOpen] = useState(false);
  if (filenames.length === 0) return null;

  const label = open ? "Hide exhibit" : "Show exhibit";

  return (
    <div style={{ margin: "0 0 26px" }}>
      <button
        onClick={() => setOpen((p) => !p)}
        style={{
          display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", padding: 0,
          marginBottom: 6, color: t.ac, fontSize: 9, fontWeight: 600, letterSpacing: ".03em", textTransform: "uppercase",
          font: "inherit", cursor: "pointer",
        }}
      >
        <svg
          width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}
          strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform .15s" }}
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
        {label}
      </button>
      <div style={{ height: 1, background: t.ac }} />

      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
          {filenames.map((filename) => (
            <img
              key={filename}
              src={imageUrl(filename)}
              alt=""
              style={{
                maxWidth: "100%", maxHeight: 420, width: "auto", height: "auto", objectFit: "contain",
                borderRadius: 10, border: `1px solid ${t.bd2}`, display: "block", margin: "0 auto", background: t.sub,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
