import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../theme/ThemeContext";
import type { QuestionDto } from "../../types/question";
import { isQuestionAnswered } from "../../utils/questionShape";
import { groupTypeLabel, type SessionUnits } from "../../utils/groups";

/** Serve sia come larghezza del pannello sia come corsa dello scorrimento, quindi e' una sola costante. */
const PANEL_WIDTH = "min(340px, 84vw)";
const SLIDE = "transform .28s ease";

interface QuestionNavigatorProps {
  open: boolean;
  /** Aperto per cercare i buchi (dal riepilogo): il filtro parte gia' attivo. */
  focusUnanswered: boolean;
  questions: QuestionDto[];
  units: SessionUnits;
  /** Per unita', se tutte le sue domande hanno risposta: lo stesso array che conta il footer. */
  unitAnswered: boolean[];
  answers: Record<number, string[]>;
  /** Chiavi per indice di sessione, come nel reducer. */
  flags: Record<number, boolean>;
  currentIndex: number;
  onOpen: () => void;
  onClose: () => void;
  onSelect: (index: number) => void;
}

/**
 * Elenco completo delle domande della sessione, in un pannello che scorre fuori dal bordo
 * sinistro. La linguetta resta sempre a vista sul bordo, come il segnalibro di un quaderno:
 * il pannello e' un posto dove tornare di continuo, non un comando fra gli altri, e nella
 * barra in alto — incastrato fra cronometro e contatore — non si leggeva come tale.
 *
 * Nasce da un problema concreto: il riepilogo di fine sessione dice quante domande sono
 * rimaste senza risposta ma non quali, e trovarle con Next/Previous su 60-80 domande e'
 * impraticabile. Qui ogni voce porta il suo semaforo e un click salta direttamente alla
 * domanda; il filtro "Only unanswered" riduce l'elenco ai soli buchi.
 *
 * L'elenco e' per unita' come tutti i conteggi mostrati all'utente (un gruppo di sotto-domande
 * vale una voce, vedi sessionUnits), con le sotto-domande annidate sotto la loro: il semaforo
 * dell'unita' e' verde solo quando lo sono tutte.
 */
export function QuestionNavigator({
  open, focusUnanswered, questions, units, unitAnswered, answers, flags, currentIndex,
  onOpen, onClose, onSelect,
}: QuestionNavigatorProps) {
  const { tokens: t } = useTheme();
  const [onlyUnanswered, setOnlyUnanswered] = useState(false);
  const currentRef = useRef<HTMLButtonElement | null>(null);

  // Il pannello resta montato anche da chiuso (deve poter scorrere), quindi il filtro si
  // allinea al motivo dell'apertura a ogni apertura, non una volta sola alla creazione.
  useEffect(() => {
    if (open) setOnlyUnanswered(focusUnanswered);
  }, [open, focusUnanswered]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Con 80 voci la domanda corrente sarebbe quasi sempre fuori schermo all'apertura.
  useEffect(() => {
    if (open) currentRef.current?.scrollIntoView({ block: "center" });
  }, [open]);

  const totalUnits = units.members.length;
  const answeredUnits = unitAnswered.filter(Boolean).length;
  const missing = totalUnits - answeredUnits;

  const visibleUnits = units.members
    .map((memberIndexes, unit) => ({ unit, memberIndexes }))
    .filter(({ unit }) => !onlyUnanswered || !unitAnswered[unit]);

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          style={{ position: "fixed", inset: 0, zIndex: 34, background: "rgba(10,12,16,.45)" }}
        />
      )}

      {/* Pannello e linguetta scorrono insieme: da chiuso il pannello e' oltre il bordo e resta
          fuori la sola linguetta; da aperto la linguetta diventa la maniglia per richiudere.
          zIndex sopra l'header (5) ma sotto l'overlay di pausa (40), che deve coprire tutto. */}
      <div
        style={{
          position: "fixed", left: 0, top: 0, bottom: 0, zIndex: 35, display: "flex",
          alignItems: "stretch", transition: SLIDE,
          transform: open ? "translateX(0)" : `translateX(calc(-1 * ${PANEL_WIDTH}))`,
        }}
      >
        <aside
          id="question-navigator"
          aria-label="All questions"
          aria-hidden={!open}
          style={{
            width: PANEL_WIDTH, height: "100%", display: "flex", flexDirection: "column",
            background: t.card, borderRight: `1px solid ${t.bd}`, boxShadow: `0 10px 30px ${t.sh}`,
            // Da chiuso il contenuto esce anche dal percorso del tab, ma solo a scorrimento
            // finito: nasconderlo subito farebbe sparire il pannello invece di farlo uscire.
            visibility: open ? "visible" : "hidden",
            transition: open ? undefined : "visibility 0s linear .28s",
          }}
        >
          <div style={{ flexShrink: 0, padding: "18px 16px 12px", borderBottom: `1px solid ${t.bd}` }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontWeight: 600, fontSize: 18, color: t.tx }}>
                  All questions
                </div>
                <div style={{ fontSize: 12.5, color: t.mu, marginTop: 4 }}>
                  {answeredUnits} of {totalUnits} answered
                  {missing > 0 ? ` · ${missing} left` : ""}
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close the question list"
                style={{
                  flex: "none", width: 30, height: 30, borderRadius: 8, border: `1px solid ${t.bd3}`,
                  background: t.card, color: t.tx2, fontSize: 14, lineHeight: 1, font: "inherit",
                }}
              >
                ✕
              </button>
            </div>

            <button
              onClick={() => setOnlyUnanswered((v) => !v)}
              aria-pressed={onlyUnanswered}
              style={{
                marginTop: 12, padding: "7px 12px", borderRadius: 999,
                border: `1.5px solid ${onlyUnanswered ? t.ac : t.bd3}`,
                background: onlyUnanswered ? t.acs : t.card,
                color: onlyUnanswered ? t.ac : t.tx2, fontSize: 12.5, fontWeight: 600,
              }}
            >
              Only unanswered
            </button>
          </div>

          {/* minHeight 0: senza, il flex item non scende sotto l'altezza del contenuto e la lista non scrolla. */}
          <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "12px 14px 20px", display: "flex", flexDirection: "column", gap: 7 }}>
            {visibleUnits.length === 0 && (
              <p style={{ margin: "10px 2px", fontSize: 13.5, color: t.mu, lineHeight: 1.55 }}>
                Every question has an answer.
              </p>
            )}

            {visibleUnits.map(({ unit, memberIndexes }) => {
              const answered = unitAnswered[unit];

              if (memberIndexes.length === 1) {
                const index = memberIndexes[0];
                const current = index === currentIndex;
                return (
                  <UnitButton
                    key={unit}
                    buttonRef={current ? currentRef : undefined}
                    label={`Question ${unit + 1}`}
                    current={current}
                    answered={answered}
                    flagged={!!flags[index]}
                    onClick={() => onSelect(index)}
                  />
                );
              }

              const answeredMembers = memberIndexes.filter((i) =>
                isQuestionAnswered(questions[i], answers[questions[i].number] ?? []),
              ).length;
              const groupCurrent = memberIndexes.includes(currentIndex);
              // La testata del gruppo porta alla prima sotto-domanda scoperta, non alla prima in
              // assoluto: chi apre l'elenco per un semaforo rosso cerca quella.
              const entryIndex =
                memberIndexes.find((i) => !isQuestionAnswered(questions[i], answers[questions[i].number] ?? [])) ??
                memberIndexes[0];

              return (
                <div
                  key={unit}
                  style={{
                    border: `1.5px solid ${groupCurrent ? t.ac : t.bd3}`, borderRadius: 11,
                    background: groupCurrent ? t.acs : t.sub, padding: 6,
                  }}
                >
                  <button
                    onClick={() => onSelect(entryIndex)}
                    style={{
                      display: "flex", alignItems: "center", gap: 9, width: "100%", padding: "6px 6px 8px",
                      border: "none", background: "transparent", textAlign: "left",
                      color: groupCurrent ? t.ac : t.tx2, fontSize: 13.5, fontWeight: 600,
                    }}
                  >
                    <span style={{ flex: 1, minWidth: 0 }}>
                      Question {unit + 1}
                      <span style={{ display: "block", fontSize: 11, fontWeight: 500, color: t.fa, marginTop: 2 }}>
                        {groupTypeLabel(questions[memberIndexes[0]].groupType)} · {answeredMembers}/{memberIndexes.length}
                      </span>
                    </span>
                    <Dot answered={answered} />
                  </button>

                  <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                    {memberIndexes.map((index, position) => {
                      const current = index === currentIndex;
                      return (
                        <UnitButton
                          key={index}
                          buttonRef={current ? currentRef : undefined}
                          label={`Part ${position + 1}`}
                          current={current}
                          answered={isQuestionAnswered(questions[index], answers[questions[index].number] ?? [])}
                          flagged={!!flags[index]}
                          onClick={() => onSelect(index)}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        <button
          onClick={open ? onClose : onOpen}
          aria-expanded={open}
          aria-controls="question-navigator"
          aria-label={open ? "Close the question list" : "Show all questions"}
          style={{
            alignSelf: "center", flex: "none", display: "flex", flexDirection: "column",
            alignItems: "center", gap: 9, width: 34, padding: "18px 0",
            border: `1px solid ${t.bd}`, borderLeft: "none", borderRadius: "0 12px 12px 0",
            background: t.card, color: t.tx2, boxShadow: `2px 3px 14px ${t.sh}`,
            fontSize: 11, fontWeight: 700, letterSpacing: ".14em",
          }}
        >
          {/* La freccia indica sempre il verso del prossimo scorrimento. */}
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {open ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
          </svg>
          <span style={{ writingMode: "vertical-rl", textTransform: "uppercase" }}>Questions</span>
          {/* Il pallino rosso da fuori: qualcosa e' rimasto scoperto, senza dover aprire. */}
          {missing > 0 && (
            <span
              role="img"
              aria-label={`${missing} unanswered`}
              title={`${missing} unanswered`}
              style={{ fontSize: 10, lineHeight: 1, color: t.er }}
            >
              ●
            </span>
          )}
        </button>
      </div>
    </>
  );
}

function UnitButton({
  label, current, answered, flagged, onClick, buttonRef,
}: {
  label: string;
  current: boolean;
  answered: boolean;
  flagged: boolean;
  onClick: () => void;
  buttonRef?: React.Ref<HTMLButtonElement>;
}) {
  const { tokens: t } = useTheme();
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      aria-current={current ? "true" : undefined}
      style={{
        display: "flex", alignItems: "center", gap: 9, padding: "9px 11px", borderRadius: 9,
        border: `1.5px solid ${current ? t.ac : t.bd3}`, background: current ? t.acs : t.card,
        color: current ? t.ac : t.tx2, textAlign: "left",
        // Nessun font:"inherit": la shorthand azzererebbe fontSize/fontWeight dichiarati qui.
        fontSize: 13.5, fontWeight: current ? 600 : 500,
      }}
    >
      <span style={{ flex: 1, minWidth: 0 }}>{label}</span>
      {flagged && (
        <span role="img" aria-label="Flagged for review" title="Flagged for review" style={{ flex: "none", fontSize: 11, lineHeight: 1, color: t.warn }}>
          ⚑
        </span>
      )}
      <Dot answered={answered} />
    </button>
  );
}

/** Verde significa "risposta data", non "risposta giusta": la correzione non e' ancora avvenuta.
 *  L'etichetta serve perche' il colore da solo non e' leggibile da tutti (screen reader, daltonismo). */
function Dot({ answered }: { answered: boolean }) {
  const { tokens: t } = useTheme();
  return (
    <span
      role="img"
      aria-label={answered ? "Answered" : "Not answered"}
      title={answered ? "Answered" : "Not answered"}
      style={{ flex: "none", fontSize: 10, lineHeight: 1, color: answered ? t.ok : t.er }}
    >
      ●
    </span>
  );
}
