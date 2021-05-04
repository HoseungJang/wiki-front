import ReactMarkdown from "react-markdown";

import { HeadingBlock } from "./renderers/HeadingBlock";
import { AnchorBlock } from "./renderers/AnchorBlock";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: HeadingBlock,
        h2: HeadingBlock,
        h3: HeadingBlock,
        h4: HeadingBlock,
        a: AnchorBlock,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
