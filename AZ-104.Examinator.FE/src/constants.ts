/**
 * Numeri di business della Simulazione: fissi, non configurabili dall'utente.
 *
 * Attenzione a EXAM_QUESTION_COUNT: finisce in getExam(count), che sorteggia UNITA' e non
 * domande (una serie di scenario o un case study occupano un posto solo, ma tornano interi).
 * 54 e' quindi il numero di posti estratti, non di domande servite: quelle sono di piu'.
 */
export const EXAM_QUESTION_COUNT = 54;
export const EXAM_TIME_LIMIT_MINUTES = 100;
export const EXAM_TIME_LIMIT_SECONDS = EXAM_TIME_LIMIT_MINUTES * 60;

/** Soglia di superamento: combacia con quella reale dell'esame AZ-104 (700/1000). */
export const PASS_MARK_PERCENT = 70;

export const MAX_QUESTION_COUNT = 606;
