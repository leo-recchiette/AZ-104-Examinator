import { useTheme } from "../theme/ThemeContext";

/** Bottone tema icona-soltanto per gli header di sessione/revisione. */
export function ThemeIconButton() {
  const { theme, tokens: t, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      style={{
        width: 32, height: 32, borderRadius: 9, border: `1px solid ${t.bd3}`, background: t.card,
        color: t.mu, fontSize: 14, padding: 0, display: "grid", placeItems: "center", font: "inherit",
      }}
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}
