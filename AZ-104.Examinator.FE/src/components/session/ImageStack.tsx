import { useRef, useState } from "react";
import { useTheme } from "../../theme/ThemeContext";
import { imageUrl } from "../../utils/images";

interface ImageStackProps {
  filenames: string[];
}

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 4;
const ZOOM_STEP = 0.25;
const ZOOM_DEFAULT = 0.75;

/**
 * Screenshot della domanda o della spiegazione. A 1x le immagini seguono gli stili di fit (altezza
 * max 78vh); fuori da 1x lo zoom moltiplica la larghezza di fit misurata dal DOM, cosi' ingrandisce
 * esattamente cio' che si vede.
 */
export function ImageStack({ filenames }: ImageStackProps) {
  const { tokens: t } = useTheme();
  const [open, setOpen] = useState(true);
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const [baseWidths, setBaseWidths] = useState<Record<string, number>>({});
  const imgRefs = useRef<Record<string, HTMLImageElement | null>>({});
  if (filenames.length === 0) return null;

  const label = open ? "Hide exhibit" : "Show exhibit";

  function toggle() {
    // Alla riapertura le img rimontano con gli stili di fit: le misure vecchie non valgono piu'.
    if (open) {
      setZoom(ZOOM_DEFAULT);
      setBaseWidths({});
    }
    setOpen(!open);
  }

  function changeZoom(delta: number) {
    const next = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.round((zoom + delta) * 100) / 100));
    if (next === zoom) return;
    if (zoom === 1 && next !== 1) {
      const measured: Record<string, number> = {};
      for (const [filename, el] of Object.entries(imgRefs.current)) {
        if (el) measured[filename] = el.getBoundingClientRect().width;
      }
      setBaseWidths(measured);
    } else if (next === 1) {
      setBaseWidths({});
    }
    setZoom(next);
  }

  // Chiamata anche dal ref: un'immagine in cache puo' essere completa prima dell'onLoad.
  function measureBase(filename: string, el: HTMLImageElement) {
    if (zoom === 1 || baseWidths[filename] !== undefined || !el.complete || el.naturalWidth === 0) return;
    const width = el.getBoundingClientRect().width;
    if (width > 0) setBaseWidths((prev) => (prev[filename] !== undefined ? prev : { ...prev, [filename]: width }));
  }

  const zoomBtn = (text: string, onClick: () => void, disabled: boolean, title: string) => (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      aria-label={title}
      style={{
        width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center",
        background: t.card, border: `1px solid ${t.bd3}`, borderRadius: 6, padding: 0,
        color: disabled ? t.dis : t.tx2, cursor: disabled ? "default" : "pointer",
        fontSize: 13, fontWeight: 700, lineHeight: 1,
      }}
    >
      {text}
    </button>
  );

  return (
    <div style={{ margin: open ? "0 0 22px" : "0 0 14px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 6 }}>
        <button
          onClick={toggle}
          style={{
            display: "flex", alignItems: "center", gap: 4, background: "none", border: "none", padding: 0,
            color: t.ac, letterSpacing: ".03em", textTransform: "uppercase", cursor: "pointer",
            // Niente font:"inherit": la shorthand azzererebbe fontSize/fontWeight.
            fontSize: 10, fontWeight: 600,
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

        {open && (
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {zoomBtn("−", () => changeZoom(-ZOOM_STEP), zoom <= ZOOM_MIN, "Zoom out")}
            <button
              onClick={() => changeZoom(ZOOM_DEFAULT - zoom)}
              disabled={zoom === ZOOM_DEFAULT}
              title="Reset zoom"
              style={{
                background: "none", border: "none", padding: 0, minWidth: 34, textAlign: "center",
                color: zoom === ZOOM_DEFAULT ? t.fa : t.tx2, cursor: zoom === ZOOM_DEFAULT ? "default" : "pointer",
                fontSize: 11, fontWeight: 600, fontVariantNumeric: "tabular-nums",
              }}
            >
              {Math.round(zoom * 100)}%
            </button>
            {zoomBtn("+", () => changeZoom(ZOOM_STEP), zoom >= ZOOM_MAX, "Zoom in")}
          </div>
        )}
      </div>
      <div style={{ height: 1, background: t.ac }} />

      {open && (
        <div
          style={{
            display: "flex", flexWrap: "wrap", gap: 12, marginTop: 16,
            alignItems: "flex-start",
            // "safe": se l'immagine ingrandita supera la card, il bordo sinistro resta raggiungibile.
            justifyContent: "safe center",
            overflow: zoom > 1 ? "auto" : "visible",
          }}
        >
          {filenames.map((filename) => {
            const base = baseWidths[filename];
            const zoomed = zoom !== 1 && base !== undefined;
            return (
              <img
                key={filename}
                ref={(el) => {
                  imgRefs.current[filename] = el;
                  if (el) measureBase(filename, el);
                }}
                onLoad={(e) => measureBase(filename, e.currentTarget)}
                src={imageUrl(filename)}
                alt=""
                style={{
                  maxWidth: zoomed ? "none" : "100%", maxHeight: zoomed ? "none" : "78vh",
                  width: zoomed ? base * zoom : "auto", height: "auto", objectFit: "contain",
                  borderRadius: 10, border: `1px solid ${t.bd2}`, display: "block",
                  margin: 0, background: t.sub, flexShrink: 0,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
