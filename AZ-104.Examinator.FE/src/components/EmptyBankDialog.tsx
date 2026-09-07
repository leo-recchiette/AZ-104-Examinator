import { useTheme } from "../theme/ThemeContext";

const IMPORT_COMMAND = "docker compose --profile setup run --rm importer";

/**
 * Avviso per il caso "l'API risponde, ma il question bank e' vuoto": succede quando il volume del
 * database e' stato ricreato (tipicamente dopo un 'docker compose down -v') senza rieseguire
 * l'importer, che sta dietro un profilo e non riparte da solo con un 'docker compose up'.
 *
 * Senza questo avviso il sintomo e' muto e fuorviante: la sessione partirebbe con zero domande e
 * RequireSession rimanderebbe subito alla home, dando l'impressione che il pulsante non funzioni.
 */
export function EmptyBankDialog({ onClose }: { onClose: () => void }) {
  const { tokens: t } = useTheme();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="empty-bank-title"
      style={{
        position: "fixed", inset: 0, zIndex: 30, display: "flex", alignItems: "center",
        justifyContent: "center", padding: 24, background: "rgba(10,12,16,.5)",
      }}
    >
      <div style={{ width: "100%", maxWidth: 520, background: t.card, border: `1px solid ${t.warnbd}`, borderRadius: 16, padding: "30px 28px", boxShadow: "0 10px 30px rgba(0,0,0,.25)" }}>
        <h2 id="empty-bank-title" style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: 23, margin: "0 0 8px" }}>
          Nessuna domanda disponibile
        </h2>
        <p style={{ margin: "0 0 18px", color: t.mu, fontSize: 14.5, lineHeight: 1.55 }}>
          L'API risponde correttamente, ma il question bank è vuoto: il database non contiene
          nessuna domanda, quindi la sessione non può partire.
        </p>
        <div style={{ background: t.warnbg, border: `1px solid ${t.warnbd}`, borderRadius: 11, padding: "13px 15px", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, color: t.warn, fontSize: 12.5, fontWeight: 600, marginBottom: 9 }}>
            <span aria-hidden="true">⚠</span>
            <span>Database da popolare</span>
          </div>
          <p style={{ margin: "0 0 10px", color: t.warn, fontSize: 13.5, lineHeight: 1.55 }}>
            Di solito succede quando il volume del database è stato ricreato senza rilanciare
            l'importer, che non riparte da solo con un <code style={{ fontSize: 12.5 }}>docker compose up</code>:
          </p>
          <code
            style={{
              display: "block", background: t.card, border: `1px solid ${t.warnbd}`, borderRadius: 8,
              padding: "10px 12px", fontSize: 12.5, color: t.tx2,
              fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
              overflowX: "auto", whiteSpace: "pre",
            }}
          >
            {IMPORT_COMMAND}
          </code>
        </div>
        <button
          onClick={onClose}
          style={{
            width: "100%", padding: 14, borderRadius: 11, border: "none", background: t.ac,
            fontSize: 14.5, fontWeight: 600, color: "#fff", font: "inherit",
          }}
        >
          Ho capito
        </button>
      </div>
    </div>
  );
}
