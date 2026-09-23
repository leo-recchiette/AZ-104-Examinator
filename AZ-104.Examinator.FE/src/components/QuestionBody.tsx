import { Fragment } from "react";
import { useTheme } from "../theme/ThemeContext";
import { QUESTION_FONT, QUESTION_FONT_FEATURES } from "../theme/fonts";
import { splitQuestionBody } from "../utils/questionBody";

interface QuestionBodyProps {
  text: string;
  fontSize: number;
  marginBottom: number;
}


export function QuestionBody({ text, fontSize, marginBottom }: QuestionBodyProps) {
  const { tokens: t } = useTheme();
  const segments = splitQuestionBody(text);

  return (
    <div lang="en" style={{ marginBottom }}>
      {segments.map((segment, i) => {
        const spacing = i === segments.length - 1 ? 0 : 12;

        if (segment.kind === "text") {
          return (
            <p
              key={i}
              style={{
                margin: `0 0 ${spacing}px`,
                fontFamily: QUESTION_FONT,
                fontFeatureSettings: QUESTION_FONT_FEATURES,
                fontSize,
                lineHeight: 1.55,
                textAlign: "justify",
                hyphens: "auto",
              }}
            >
              {segment.lead && <strong style={{ fontWeight: 700 }}>{segment.lead} </strong>}
              {segment.text}
            </p>
          );
        }

        if (segment.kind === "list") {
          return (
            <ul
              key={i}
              style={{
                display: "grid",
                gap: 7,
                margin: `0 0 ${spacing}px`,
                padding: "0 0 0 4px",
                listStyle: "none",
                fontFamily: QUESTION_FONT,
                fontFeatureSettings: QUESTION_FONT_FEATURES,
                fontSize,
                lineHeight: 1.5,
                textAlign: "justify",
                hyphens: "auto",
              }}
            >
              {segment.items.map((item, j) => (
                <li key={j} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 10 }}>
                  {/* Il pallino sta fuori dal testo: le voci vanno a capo restando allineate fra loro. */}
                  <span aria-hidden style={{ color: t.ac, lineHeight: 1.5 }}>
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "max-content 1fr",
              gap: "7px 20px",
              margin: i === segments.length - 1 ? 0 : "0 0 14px",
              padding: "13px 16px",
              border: `1px solid ${t.bd2}`,
              borderRadius: 11,
              background: t.sub,
            }}
          >
            {segment.pairs.map((pair, j) =>
              pair.value === "" ? (
                // Chiave senza valore ("Parameters:"): intestazione dei campi che seguono, su tutta la riga.
                <span key={j} style={{ gridColumn: "1 / -1", fontSize: 11.5, letterSpacing: ".05em", textTransform: "uppercase", fontWeight: 600, color: t.fa, marginTop: j === 0 ? 0 : 4 }}>
                  {pair.key}
                </span>
              ) : (
              <Fragment key={j}>
                <span style={{ fontSize: 11.5, letterSpacing: ".05em", textTransform: "uppercase", fontWeight: 600, color: t.fa, alignSelf: "center" }}>
                  {pair.key}
                </span>
                <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 13, color: t.tx2 }}>
                  {pair.value}
                </span>
              </Fragment>
              ),
            )}
          </div>
        );
      })}
    </div>
  );
}
