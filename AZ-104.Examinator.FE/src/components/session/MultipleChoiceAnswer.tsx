import { useTheme } from "../../theme/ThemeContext";
import type { OptionDto } from "../../types/question";
import { gradeMultipleChoice } from "../../utils/grading";

interface MultipleChoiceAnswerProps {
  options: OptionDto[];
  value: string[];
  onChange: (next: string[]) => void;
  /** Presente solo dopo la rivelazione: lettere corrette secondo il backend. */
  correctLetters?: string[];
}

/**
 * Sempre multi-selezione, badge quadrato: il DTO pre-risposta non rivela se
 * la domanda vuole una sola risposta o piu' (altrimenti la domanda non
 * avrebbe senso), quindi a differenza del mockup (che lo sapeva in anticipo
 * dai dati finti) qui non si puo' distinguere mono/multi prima di rivelare.
 */
export function MultipleChoiceAnswer({ options, value, onChange, correctLetters }: MultipleChoiceAnswerProps) {
  const { tokens: t } = useTheme();
  const revealed = correctLetters !== undefined;
  const grades = revealed ? gradeMultipleChoice(value, correctLetters, options.map((o) => o.letter)) : null;

  function toggle(letter: string) {
    onChange(value.includes(letter) ? value.filter((l) => l !== letter) : [...value, letter]);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {options.map((option) => {
        const grade = grades?.find((g) => g.letter === option.letter);
        const sel = value.includes(option.letter);
        let bd = sel ? t.ac : t.bd;
        let bg = sel ? t.acs : t.card;
        let mark = "";
        let markFg = t.ok;
        if (grade) {
          if (grade.correct) {
            bd = t.ok;
            bg = t.okbg;
            mark = grade.selected ? "Correct" : "Missed";
          } else if (grade.selected) {
            bd = t.er;
            bg = t.erbg;
            mark = "Incorrect";
            markFg = t.er;
          }
        }
        return (
          <button
            key={option.letter}
            onClick={() => toggle(option.letter)}
            style={{
              display: "flex", alignItems: "flex-start", gap: 14, textAlign: "left",
              padding: "15px 17px", borderRadius: 11, border: `1.5px solid ${bd}`, background: bg,
              color: "inherit", transition: "border-color .15s, background .15s", font: "inherit",
            }}
          >
            <span
              style={{
                flex: "none", width: 26, height: 26, borderRadius: 7, display: "grid", placeItems: "center",
                fontSize: 12.5, fontWeight: 700, background: sel ? t.ac : t.card, color: sel ? "#fff" : t.mu,
                border: `1.5px solid ${sel ? t.ac : t.bd3}`,
              }}
            >
              {option.letter}
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.5, paddingTop: 3 }}>{option.text}</span>
            {mark && (
              <span style={{ flex: "none", marginLeft: "auto", fontSize: 13, fontWeight: 600, color: markFg, paddingTop: 4 }}>
                {mark}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
