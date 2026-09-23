export type QuestionType = "multiple_choice" | "drag_and_drop" | "hotspot" | "hotspot_yes_no";

export interface OptionDto {
  letter: string;
  text: string;
}

export interface PromptOptionsDto {
  prompt: string;
  options: string[];
}

/** Solo uno fra options/draggableItems/prompts e' popolato: vedi utils/questionShape.ts. */
export interface QuestionDto {
  number: number;
  type: QuestionType;
  text: string;
  options: OptionDto[];
  draggableItems: string[];
  /** Lunghezza della sequenza da comporre; 0 se non e' una sequenza. */
  sequenceLength: number;
  prompts: PromptOptionsDto[];
  /** Screenshot da mostrare PRIMA di rispondere (nomi file nudi, risolti con utils/images.ts#imageUrl). */
  images: string[];
  /** "ss01".."ss24"; null per le domande sciolte. */
  groupId: string | null;
  /** "scenario_series" | "case_study". Valorizzato se e solo se lo e' groupId. */
  groupType: string | null;
}
