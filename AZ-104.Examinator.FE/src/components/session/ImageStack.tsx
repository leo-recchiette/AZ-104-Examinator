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
 * Pila di screenshot (spesso 1, a volte 2-3 per domanda), usata sia per le immagini pre-risposta
 * che per quelle della spiegazione. Aperta di default — gli screenshot sono parte integrante del
 * testo della domanda, non un extra da andare a cercare — ma richiudibile dall'etichetta "Exhibit"
 * (minuscola, con freccia, sopra una linea sottile blu), e con altezza limitata: alcuni screenshot
 * del dataset sono enormi. Il cap e' relativo alla viewport, non un valore fisso: a 420px fissi gli screenshot verticali
 * (il dataset ne ha 76 piu' alti di cosi', fino a 308x1100) venivano ridotti a ~118px di larghezza, illeggibili.
 *
 * Problema opposto: molti screenshot sono nativamente piccoli e a dimensione naturale restano illeggibili.
 * I pulsanti +/- ingrandiscono la pila oltre il "fit" (fino a 4x) senza dover zoomare tutto il browser.
 * La larghezza di partenza non e' calcolata ma *misurata* dal DOM nel momento in cui si lascia lo zoom 1x
 * (getBoundingClientRect sulle img, che li' hanno ancora gli stili di fit): cosi' lo zoom moltiplica
 * esattamente cio' che l'utente sta vedendo, qualunque sia il vincolo che ha deciso quella dimensione
 * (larghezza naturale, larghezza della card o il cap di 78vh). Tornando a 1x le misure vengono buttate e
 * l'immagine ricade sugli stili di fit, quindi torna a seguire i resize della finestra.
 *
 * Si parte da ZOOM_DEFAULT, non da 1x: finche' un'immagine non ha la sua misura resta sugli stili di fit,
 * e la misura si prende appena e' caricata (measureBase), poi lo zoom le si applica.
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
    // Chiudendo si torna a 1x: cosi' alla riapertura le img montano sempre con gli stili di fit,
    // e la misura della base resta valida.
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

  // Misura la larghezza di fit di un'immagine appena caricata, se lo zoom corrente ne ha bisogno. Si
  // chiama anche dal ref: un'immagine gia' in cache puo' risultare completa prima dell'onLoad.
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
            // Niente font:"inherit" qui: la shorthand azzererebbe fontSize/fontWeight dichiarati sopra
            // (index.html fa gia' ereditare il font-family ai button).
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
            // Riga che va a capo, non colonna fissa: rimpicciolite, piu' immagini della stessa domanda
            // stanno affiancate (e allineate in alto) invece di sprecare una riga a testa; appena una
            // non ci sta piu' in larghezza, il wrap la manda da sola su una riga sua.
            alignItems: "flex-start",
            // "safe" e' la parte importante: centra finche' il contenuto ci sta, ma quando un'immagine
            // ingrandita supera la card ricade su start, altrimenti il centraggio le taglierebbe il
            // bordo sinistro rendendolo irraggiungibile allo scroll.
            justifyContent: "safe center",
            // Ingrandita, l'immagine puo' superare la card: si scorre dentro il box invece di allargarla.
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
                  // Niente margini auto: allineamento e centraggio li decide il contenitore flex.
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
