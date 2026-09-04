import { useTheme } from "../theme/ThemeContext";

interface ThemeIconButtonProps {
  /** "onDark" e' usato sul banner blu di Exam/Review, dove il bottone galleggia su sfondo scuro indipendentemente dal tema. */
  variant?: "default" | "onDark";
}

/** Bottone tema icona-soltanto per gli header di sessione/revisione. */
export function ThemeIconButton({ variant = "default" }: ThemeIconButtonProps) {
  const { theme, tokens: t, toggleTheme } = useTheme();
  const dark = theme === "dark";
  const onDark = variant === "onDark";

  return (
    <button
      onClick={toggleTheme}
      style={{
        width: 32, height: 32, borderRadius: 9,
        border: onDark ? "1px solid rgba(255,255,255,.4)" : `1px solid ${t.bd3}`,
        background: onDark ? "rgba(255,255,255,.15)" : t.card,
        color: onDark ? "#fff" : t.mu, fontSize: 14, padding: 0, display: "grid", placeItems: "center", font: "inherit",
      }}
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}
