import { splitExplanation, splitUrls } from "../utils/explanation";

interface ExplanationTextProps {
  text: string;
}

/** Vedi utils/explanation.ts. */
export function ExplanationText({ text }: ExplanationTextProps) {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      {splitExplanation(text).map((block, i) =>
        block.lead === "Reference" ? (
          <div key={i} style={{ textAlign: "left" }}>
            <strong style={{ fontWeight: 700 }}>Reference:</strong>
            {splitUrls(block.text)
              .filter((segment) => segment.text.trim() !== "")
              .map((segment, j) => (
                <div key={j}>{segment.url ? <UrlText url={segment.text} /> : segment.text.trim()}</div>
              ))}
          </div>
        ) : (
          <div key={i}>
            {block.lead && <strong style={{ fontWeight: 700 }}>{block.lead}:</strong>}
            {block.lead && block.text ? " " : ""}
            {splitUrls(block.text).map((segment, j) =>
              segment.url ? <UrlText key={j} url={segment.text} /> : segment.text,
            )}
          </div>
        ),
      )}
    </div>
  );
}

function UrlText({ url }: { url: string }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" style={{ color: "inherit", fontStyle: "italic", overflowWrap: "anywhere" }}>
      {url}
    </a>
  );
}
