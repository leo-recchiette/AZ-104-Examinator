import { Fragment } from "react";
import { useTheme } from "../theme/ThemeContext";
import { QUESTION_FONT, QUESTION_FONT_FEATURES } from "../theme/fonts";
import { splitQuestionBody } from "../utils/questionBody";

interface QuestionBodyProps {
  text: string;
  fontSize: number;
  marginBottom: number;
}

/**
 * Corpo della domanda: prosa normale, piu' le schede di configurazione rese come
 * coppie campo/valore invece che srotolate nel paragrafo (vedi utils/questionBody.ts).
 */
export function QuestionBody({ text, fontSize, marginBottom }: QuestionBodyProps) {
  const { tokens: t } = useTheme();
  const segments = splitQuestionBody(text);

  return (
    <div style={{ marginBottom }}>
      {segments.map((segment, i) =>
        segment.kind === "text" ? (
          <p
            key={i}
            style={{
              margin: i === segments.length - 1 ? 0 : "0 0 12px",
              fontFamily: QUESTION_FONT,
              fontFeatureSettings: QUESTION_FONT_FEATURES,
              fontSize,
              lineHeight: 1.55,
            }}
          >
            {segment.lead && <strong style={{ fontWeight: 700 }}>{segment.lead} </strong>}
            {segment.text}
          </p>
        ) : (
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
            {segment.pairs.map((pair, j) => (
              <Fragment key={j}>
                <span style={{ fontSize: 11.5, letterSpacing: ".05em", textTransform: "uppercase", fontWeight: 600, color: t.fa, alignSelf: "center" }}>
                  {pair.key}
                </span>
                <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 13, color: t.tx2 }}>
                  {pair.value}
                </span>
              </Fragment>
            ))}
          </div>
        ),
      )}
    </div>
  );
}
