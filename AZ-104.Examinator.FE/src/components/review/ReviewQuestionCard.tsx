import { useTheme } from "../../theme/ThemeContext";
import { useDisplaySettings } from "../../settings/DisplaySettingsContext";
import type { QuestionDto } from "../../types/question";
import type { QuestionAnswerDto } from "../../types/answer";
import { getAnswerShape, questionTypeLabel, formatYourAnswer } from "../../utils/questionShape";
import { pointsEarned } from "../../utils/grading";
import { splitPreamble } from "../../utils/preamble";
import { ImageStack } from "../session/ImageStack";
import { PlaceholderText } from "../PlaceholderText";

interface ReviewQuestionCardProps {
  /** Posizione nella sessione, 1-based: e' il "Question N" dell'intestazione. */
  position: number;
  /** null se il numero non esiste piu' nel question bank (dataset reimportato dopo il tentativo). */
  question: QuestionDto | null;
  submitted: string[];
  correct: QuestionAnswerDto | null;
}

/**
 * Una domanda gia' corretta, con accanto la risposta data e quella giusta.
 * Condivisa fra la revisione di fine sessione (dove si mostrano solo le domande
 * che hanno perso punti) e la rilettura di un tentativo dello storico (dove si
 * mostrano tutte): la colorazione del riquadro "Your answer" segue il punteggio,
 * non il contesto in cui la card e' usata.
 */
export function ReviewQuestionCard({ position, question, submitted, correct }: ReviewQuestionCardProps) {
  const { tokens: t } = useTheme();
  const { questionFontSize } = useDisplaySettings();

  if (!question || !correct) {
    return (
      <div style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: "22px 26px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: t.fa, marginBottom: 8 }}>Question {position}</div>
        <div style={{ fontSize: 14, color: t.mu, lineHeight: 1.5 }}>
          This question is no longer in the question bank, so its text and solution cannot be shown.
        </div>
        <div style={{ fontSize: 14, color: t.tx2, marginTop: 10, whiteSpace: "pre-line" }}>
          Your answer: {submitted.length ? submitted.join(" · ") : "Not answered"}
        </div>
      </div>
    );
  }

  const shape = getAnswerShape(question);
  const [earned, pointsTotal] = pointsEarned(shape, submitted, correct, question.options.map((o) => o.letter));
  const allCorrect = earned >= pointsTotal;

  return (
    <div style={{ background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14, padding: "26px 26px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: t.fa }}>Question {position}</span>
        <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: t.bg, color: t.mu }}>
          {questionTypeLabel(question, shape)}
        </span>
        <span style={{ fontSize: 12, color: allCorrect ? t.ok : t.fa2, marginLeft: "auto", fontVariantNumeric: "tabular-nums" }}>
          {earned} / {pointsTotal} points
        </span>
      </div>
      <p style={{ margin: "0 0 20px", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: questionFontSize, lineHeight: 1.5 }}>
        {/* Nella revisione le istruzioni d'esame si scartano del tutto: sono le stesse per 103 domande
            e qui interessa solo capire la risposta. Nella sessione restano, dietro il riquadro collassabile. */}
        {splitPreamble(question.text).body}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginBottom: 18 }}>
        <div style={{ border: `1px solid ${allCorrect ? t.okbd : t.erbd}`, background: allCorrect ? t.okbg : t.erbg, borderRadius: 10, padding: "14px 15px" }}>
          <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: allCorrect ? t.ok : t.er, marginBottom: 7 }}>
            Your answer
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.5, whiteSpace: "pre-line", color: t.tx2 }}>
            {formatYourAnswer(question, submitted)}
          </div>
        </div>
        <div style={{ border: `1px solid ${t.okbd}`, background: t.okbg, borderRadius: 10, padding: "14px 15px" }}>
          <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.ok, marginBottom: 7 }}>
            Correct answer
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.5, whiteSpace: "pre-line", color: t.tx2 }}>
            <PlaceholderText text={correct.answerText} />
          </div>
        </div>
      </div>
      <ImageStack filenames={correct.images} />
      {correct.explanation.trim() !== "" && (
        <>
          <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.mu, marginBottom: 7 }}>
            Explanation
          </div>
          <div style={{ fontSize: 14.5, lineHeight: 1.6, color: t.tx2 }}>{correct.explanation}</div>
        </>
      )}
    </div>
  );
}
