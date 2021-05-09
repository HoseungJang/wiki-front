import styled from "styled-components";

import { Color } from "../../../constants/color";

import { useTheme, Theme } from "../../../contexts/Theme";

export function BlockquoteBlock(props: any) {
  const { currentTheme } = useTheme();

  return <S.Container t={currentTheme}>{props.children}</S.Container>;
}

const S = {
  Container: styled.blockquote<{ t: Theme }>`
    width: 100%;

    padding: 0 20px;
    margin: 0;

    box-sizing: border-box;

    background-color: ${({ t }) => ({ light: Color.Grey100, dark: Color.Black50 }[t])};
  `,
};
