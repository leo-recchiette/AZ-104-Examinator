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
  /**
   * Valorizzato solo dentro una card di gruppo (ReviewGroupCard): la cornice la mette il
   * contenitore, l'intestazione diventa "Part N" e il corpo arriva gia' senza lo scenario
   * condiviso, che il gruppo mostra una volta sola in cima.
   */
  asPart?: { number: number; body: string };
}

/**
 * Una domanda gia' corretta, con accanto la risposta data e quella giusta.
 * Condivisa fra la revisione di fine sessione (dove si mostrano solo le domande
 * che hanno perso punti) e la rilettura di un tentativo dello storico (dove si
 * mostrano tutte): la colorazione del riquadro "Your answer" segue il punteggio,
 * non il contesto in cui la card e' usata.
 */
export function ReviewQuestionCard({ position, question, submitted, correct, asPart }: ReviewQuestionCardProps) {
  const { tokens: t } = useTheme();
  const { questionFontSize } = useDisplaySettings();

  // Dentro un gruppo la card non ha cornice propria: si separa dalla parte precedente
  // (o dallo scenario condiviso) con un filetto.
  const frame = asPart
    ? { borderTop: `1px solid ${t.bd2}`, paddingTop: 20, marginTop: 20 }
    : { background: t.card, border: `1px solid ${t.bd}`, borderRadius: 14 };
  const label = asPart ? `Part ${asPart.number}` : `Question ${position}`;

  if (!question || !correct) {
    return (
      <div style={{ ...frame, padding: asPart ? "20px 0 0" : "22px 26px" }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: t.fa, marginBottom: 8 }}>{label}</div>
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
  // Punteggio pieno non vuol dire risposta identica: le scelte in piu' non tolgono punti
  // (regola Microsoft, vedi ScoreService), quindi una multiple choice con una lettera in piu'
  // - o una sequenza con passi in coda - vale comunque tutto pur restando diversa dalla
  // soluzione, e va mostrata. Solo quando coincidono davvero i due riquadri direbbero la
  // stessa cosa e se ne mostra uno.
  const sameAsCorrect =
    allCorrect && submitted.length === (shape === "options" ? correct.correctLetters.length : correct.answerRows.length);

  return (
    <div style={{ ...frame, padding: asPart ? "20px 0 0" : "26px 26px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: t.fa }}>{label}</span>
        <span style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: t.bg, color: t.mu }}>
          {questionTypeLabel(question, shape)}
        </span>
        <span style={{ fontSize: 12, color: allCorrect ? t.ok : t.fa2, marginLeft: "auto", fontVariantNumeric: "tabular-nums" }}>
          {earned} / {pointsTotal} points
        </span>
      </div>
      <p style={{ margin: "0 0 20px", fontFamily: "'Source Serif 4', Georgia, serif", fontSize: questionFontSize, lineHeight: 1.5 }}>
        {/* Nella revisione le istruzioni d'esame si scartano del tutto: sono le stesse per 103 domande
            e qui interessa solo capire la risposta. Nella sessione restano, dietro il riquadro collassabile.
            Dentro un gruppo il corpo arriva gia' tagliato dello scenario condiviso. */}
        {asPart ? asPart.body : splitPreamble(question.text).body}
      </p>
      {/* L'exhibit sta sopra le colonne: e' il contesto della domanda, va guardato prima
          di leggere il confronto fra risposta data e soluzione. */}
      <ImageStack filenames={correct.images} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginBottom: 18 }}>
        {!sameAsCorrect && (
          <div style={{ border: `1px solid ${allCorrect ? t.okbd : t.erbd}`, background: allCorrect ? t.okbg : t.erbg, borderRadius: 10, padding: "14px 15px" }}>
            <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: allCorrect ? t.ok : t.er, marginBottom: 7 }}>
              Your answer
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.5, whiteSpace: "pre-line", color: t.tx2 }}>
              {formatYourAnswer(question, submitted)}
            </div>
          </div>
        )}
        <div style={{ border: `1px solid ${t.okbd}`, background: t.okbg, borderRadius: 10, padding: "14px 15px" }}>
          <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 700, color: t.ok, marginBottom: 7 }}>
            Correct answer
          </div>
          <div style={{ fontSize: 14, lineHeight: 1.5, whiteSpace: "pre-line", color: t.tx2 }}>
            <PlaceholderText text={correct.answerText} />
          </div>
        </div>
      </div>
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
