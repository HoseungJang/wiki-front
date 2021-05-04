import { createElement } from "react";

export function HeadingBlock({
  level,
  children,
}: {
  level: number;
  children: any;
}) {
  return createElement(`h${level}`, { id: children[0] }, children);
}
