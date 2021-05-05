import { useLocation } from "react-router";
import styled from "styled-components";

import { useMarkdown } from "../../hooks/useMarkdown";

import { Markdown } from "../../components/Markdown";

export function Sub() {
  const location = useLocation();

  const content = useMarkdown(decodeURIComponent(location.pathname));

  return (
    <S.Container>{content ? <Markdown content={content} /> : null}</S.Container>
  );
}

export const S = {
  Container: styled.div``,
};
