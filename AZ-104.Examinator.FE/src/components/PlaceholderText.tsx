import { Fragment } from "react";
import { hoistPlaceholders } from "../utils/placeholders";

interface PlaceholderTextProps {
  text: string;
}

/**
 * Rende un testo del dataset spostando in testa a ogni segmento il segnaposto
 * ("[answer choice]", "[box 1]", ...) e mostrandolo in grassetto.
 * Vedi utils/placeholders.ts per il perche'.
 */
export function PlaceholderText({ text }: PlaceholderTextProps) {
  return (
    <>
      {hoistPlaceholders(text).map((segment, i) => (
        <Fragment key={i}>
          {segment.token && <strong style={{ fontWeight: 700 }}>{segment.token}</strong>}
          {segment.token && segment.text ? " " : ""}
          {segment.text}
          {segment.separator}
        </Fragment>
      ))}
    </>
  );
}
