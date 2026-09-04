import { useTheme } from "../../theme/ThemeContext";
import type { PromptOptionsDto } from "../../types/question";
import type { AnswerRowDto } from "../../types/answer";

interface RowSelectAnswerProps {
  prompts: PromptOptionsDto[];
  value: string[];
  onChange: (next: string[]) => void;
  /** Presente solo dopo la rivelazione: risposta corretta per riga, posizionale come prompts. */
  answerRows?: AnswerRowDto[];
}

export function RowSelectAnswer({ prompts, value, onChange, answerRows }: RowSelectAnswerProps) {
  const { tokens: t } = useTheme();

  function pick(rowIndex: number, label: string) {
    const next = [...value];
    next[rowIndex] = label;
    onChange(next);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {prompts.map((row, ri) => {
        const correctAnswer = answerRows?.[ri]?.answer;
        return (
          <div key={`${row.prompt}-${ri}`} style={{ border: `1px solid ${t.bd2}`, borderRadius: 12, padding: "16px 17px", background: t.sub }}>
            <div style={{ fontSize: 14.5, lineHeight: 1.5, marginBottom: 12, fontFamily: "'Source Serif 4', Georgia, serif" }}>
              {row.prompt}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {row.options.map((label) => {
                const sel = value[ri] === label;
                let bd = sel ? t.ac : t.bd3;
                let bg = sel ? t.acs : t.card;
                let fg = sel ? t.ac : t.tx2;
                let mark = "";
                if (correctAnswer !== undefined) {
                  if (label === correctAnswer) {
                    bd = t.ok; bg = t.okbg; fg = t.ok; mark = "  ✓";
                  } else if (sel) {
                    bd = t.er; bg = t.erbg; fg = t.er; mark = "  ✕";
                  }
                }
                return (
                  <button
                    key={label}
                    onClick={() => pick(ri, label)}
                    style={{
                      padding: "9px 15px", borderRadius: 9, fontSize: 13.5, fontWeight: 500,
                      border: `1.5px solid ${bd}`, background: bg, color: fg, font: "inherit",
                    }}
                  >
                    {label}
                    {mark}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
