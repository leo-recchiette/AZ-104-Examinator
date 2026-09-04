import { useTheme } from "../theme/ThemeContext";

/** Bottone tema flottante per le schermate mode/config (mockup: showFloatToggle). */
export function FloatingThemeToggle() {
  const { theme, tokens: t, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed", top: 20, right: 20, zIndex: 20, display: "flex", alignItems: "center", gap: 8,
        padding: "9px 14px", borderRadius: 999, border: `1px solid ${t.bd}`, background: t.card,
        color: t.mu, fontSize: 13, fontWeight: 500, boxShadow: `0 1px 3px ${t.sh}`, font: "inherit",
      }}
    >
      <span style={{ fontSize: 14 }}>{dark ? "☀" : "☾"}</span>
      {dark ? "Light mode" : "Dark mode"}
    </button>
  );
}
