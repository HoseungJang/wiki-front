import { createElement } from "react";

export function HeadingBlock({
  level,
  children,
}: {
  level: number;
  children: any;
}) {
  const id = (children[0] as string).replace(/ /g, "-");
  return createElement(`h${level}`, { id }, children);
}
