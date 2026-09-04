import { useTheme } from "../../theme/ThemeContext";
import { imageUrl } from "../../utils/images";

interface ImageStackProps {
  filenames: string[];
}

/** Pila di screenshot (spesso 1, a volte 2-3 per domanda): usata sia per le immagini pre-risposta che per quelle della spiegazione. */
export function ImageStack({ filenames }: ImageStackProps) {
  const { tokens: t } = useTheme();
  if (filenames.length === 0) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
      {filenames.map((filename) => (
        <img
          key={filename}
          src={imageUrl(filename)}
          alt=""
          style={{ maxWidth: "100%", borderRadius: 10, border: `1px solid ${t.bd2}`, display: "block" }}
        />
      ))}
    </div>
  );
}
