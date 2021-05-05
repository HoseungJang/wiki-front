import styled from "styled-components";

import { Markdown } from "../../components/Markdown";
import { useMarkdown } from "../../hooks/useMarkdown";

export function Main() {
  const content = useMarkdown("README.md");

  return (
    <S.Container>{content ? <Markdown content={content} /> : null}</S.Container>
  );
}

export const S = {
  Container: styled.div``,
};
