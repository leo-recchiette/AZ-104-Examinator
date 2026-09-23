import { useEffect, type ReactNode } from "react";
import { useTheme } from "../theme/ThemeContext";

const PANEL_WIDTH = "min(340px, 84vw)";
const SLIDE = "transform .28s ease";

interface NavigatorPanelProps {
  id: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  title: string;
  subtitle: ReactNode;
  filter?: ReactNode;
  tabBadge?: ReactNode;
  children: ReactNode;
}


export function NavigatorPanel({ id, open, onOpen, onClose, title, subtitle, filter, tabBadge, children }: NavigatorPanelProps) {
  const { tokens: t } = useTheme();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          style={{ position: "fixed", inset: 0, zIndex: 34, background: "rgba(10,12,16,.45)" }}
        />
      )}

      {/* zIndex sopra l'header (5), sotto l'overlay di pausa (40). */}
      <div
        style={{
          position: "fixed", left: 0, top: 0, bottom: 0, zIndex: 35, display: "flex",
          alignItems: "stretch", transition: SLIDE,
          transform: open ? "translateX(0)" : `translateX(calc(-1 * ${PANEL_WIDTH}))`,
        }}
      >
        <aside
          id={id}
          aria-label={title}
          aria-hidden={!open}
          style={{
            width: PANEL_WIDTH, height: "100%", display: "flex", flexDirection: "column",
            background: t.card, borderRight: `1px solid ${t.bd}`, boxShadow: `0 10px 30px ${t.sh}`,
            // Fuori dal tab solo a scorrimento finito, altrimenti sparirebbe senza animazione.
            visibility: open ? "visible" : "hidden",
            transition: open ? undefined : "visibility 0s linear .28s",
          }}
        >
          <div style={{ flexShrink: 0, padding: "18px 16px 12px", borderBottom: `1px solid ${t.bd}` }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: 18, color: t.tx }}>
                  {title}
                </div>
                <div style={{ fontSize: 12.5, color: t.mu, marginTop: 4 }}>{subtitle}</div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close the question list"
                style={{
                  flex: "none", width: 30, height: 30, borderRadius: 8, border: `1px solid ${t.bd3}`,
                  background: t.card, color: t.tx2, fontSize: 14, lineHeight: 1, font: "inherit",
                }}
              >
                ✕
              </button>
            </div>

            {filter}
          </div>

          {/* minHeight 0: senza, il flex item non scende sotto l'altezza del contenuto e la lista non scrolla. */}
          <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "12px 14px 20px", display: "flex", flexDirection: "column", gap: 7 }}>
            {children}
          </div>
        </aside>

        <button
          onClick={open ? onClose : onOpen}
          aria-expanded={open}
          aria-controls={id}
          aria-label={open ? "Close the question list" : "Show all questions"}
          style={{
            alignSelf: "center", flex: "none", display: "flex", flexDirection: "column",
            alignItems: "center", gap: 9, width: 34, padding: "18px 0",
            border: `1px solid ${t.bd}`, borderLeft: "none", borderRadius: "0 12px 12px 0",
            background: t.card, color: t.tx2, boxShadow: `2px 3px 14px ${t.sh}`,
            fontSize: 11, fontWeight: 700, letterSpacing: ".14em",
          }}
        >
          {/* La freccia indica sempre il verso del prossimo scorrimento. */}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
          </svg>
          <span style={{ writingMode: "vertical-rl", textTransform: "uppercase" }}>Questions</span>
          {tabBadge}
        </button>
      </div>
    </>
  );
}

/** La pill che accende il filtro dell'elenco, uguale nelle due schermate. */
export function NavigatorFilter({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  const { tokens: t } = useTheme();
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      style={{
        marginTop: 12, padding: "7px 12px", borderRadius: 999,
        border: `1.5px solid ${active ? t.ac : t.bd3}`,
        background: active ? t.acs : t.card,
        color: active ? t.ac : t.tx2, fontSize: 12.5, fontWeight: 600,
      }}
    >
      {label}
    </button>
  );
}

/** La voce cliccabile dell'elenco: etichetta a sinistra, segnali a destra. */
export function NavigatorEntry({
  label, current, marks, onClick, buttonRef,
}: {
  label: ReactNode;
  current: boolean;
  /** Bandierina, spunta, pallino: cambiano da una schermata all'altra. */
  marks: ReactNode;
  onClick: () => void;
  buttonRef?: React.Ref<HTMLButtonElement>;
}) {
  const { tokens: t } = useTheme();
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      aria-current={current ? "true" : undefined}
      style={{
        display: "flex", alignItems: "center", gap: 9, padding: "9px 11px", borderRadius: 9,
        border: `1.5px solid ${current ? t.ac : t.bd3}`, background: current ? t.acs : t.card,
        color: current ? t.ac : t.tx2, textAlign: "left",
        // Nessun font:"inherit": la shorthand azzererebbe fontSize/fontWeight dichiarati qui.
        fontSize: 13.5, fontWeight: current ? 600 : 500,
      }}
    >
      <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
      {marks}
    </button>
  );
}