export type QuestionType = "multiple_choice" | "drag_and_drop" | "hotspot" | "hotspot_yes_no";

export interface OptionDto {
  letter: string;
  text: string;
}

export interface PromptOptionsDto {
  prompt: string;
  options: string[];
}

/**
 * Quale campo tra options/draggableItems/prompts e' popolato dipende dalla
 * FORMA della risposta, non da "type": una minoranza di domande drag_and_drop
 * sono in realta' a selezione per riga (prompts popolato), indistinguibili da
 * un hotspot lato contratto. Vedi utils/questionShape.ts.
 */
export interface QuestionDto {
  number: number;
  type: QuestionType;
  text: string;
  options: OptionDto[];
  draggableItems: string[];
  prompts: PromptOptionsDto[];
}
