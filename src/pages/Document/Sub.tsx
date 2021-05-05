import styled from "styled-components";

import { Markdown } from "../../components/Markdown";
import { useMarkdown } from "../../hooks/useMarkdown";

export function Sub() {
  const content = useMarkdown(
    decodeURIComponent(window.location.pathname.slice(1))
  );

  return (
    <S.Container>{content ? <Markdown content={content} /> : null}</S.Container>
  );
}

export const S = {
  Container: styled.div`
    padding: 20px 200px;
  `,
};
