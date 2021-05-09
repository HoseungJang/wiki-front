import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import slug from "remark-slug";
import styled from "styled-components";

import { AnchorBlock } from "./renderers/AnchorBlock";
import { ImageBlock } from "./renderers/ImageBlock";
import { CodeBlock } from "./renderers/CodeBlock";
import { TableBlock } from "./renderers/TableBlock";
import { BlockquoteBlock } from "./renderers/BlockquoteBlock";

export function Markdown({ content }: { content: string }) {
  return (
    <S.Container>
      <ReactMarkdown
        remarkPlugins={[gfm, slug]}
        components={{
          a: AnchorBlock,
          img: ImageBlock,
          code: CodeBlock,
          table: TableBlock,
          blockquote: BlockquoteBlock,
        }}
      >
        {content}
      </ReactMarkdown>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
};
