import { Fragment } from "react";
import { hoistPlaceholders } from "../utils/placeholders";

interface PlaceholderTextProps {
  text: string;
}

/** Vedi utils/placeholders.ts. */
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
