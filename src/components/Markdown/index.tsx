import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import slug from "remark-slug";

import { AnchorBlock } from "./renderers/AnchorBlock";
import { ImageBlock } from "./renderers/ImageBlock";
import { CodeBlock } from "./renderers/CodeBlock";
import { TableBlock } from "./renderers/TableBlock";

export function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[gfm, slug]}
      components={{
        a: AnchorBlock,
        img: ImageBlock,
        code: CodeBlock,
        table: TableBlock,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
