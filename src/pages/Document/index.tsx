import styled from "styled-components";
import ReactMarkdown from "react-markdown";

import { useMarkdown } from "../../hooks/useMarkdown";

import { HeadingBlock } from "../../components/MarkdownRenderers/HeadingBlock";
import { AnchorBlock } from "../../components/MarkdownRenderers/AnchorBlock";

export function Document() {
  const markdown = useMarkdown();

  return (
    <S.Container>
      {markdown ? (
        <ReactMarkdown
          components={{
            h1: HeadingBlock,
            h2: HeadingBlock,
            h3: HeadingBlock,
            h4: HeadingBlock,
            a: AnchorBlock,
          }}
        >
          {markdown}
        </ReactMarkdown>
      ) : null}
    </S.Container>
  );
}

export const S = {
  Container: styled.div`
    padding: 20px 200px;
  `,
};
