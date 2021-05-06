import { ReactNode } from "react";
import styled from "styled-components";

import { Color } from "../../constants/color";

import { Theme, useTheme } from "../../contexts/Theme";

export function Page({ children }: { children: ReactNode }) {
  const { currentTheme } = useTheme();

  return <S.Container t={currentTheme}>{children}</S.Container>;
}

const S = {
  Container: styled.div<{ t: Theme }>`
    flex: 1;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ t }) =>
      ({ light: Color.Grey50, dark: Color.Black50 }[t])};

    color: ${({ t }) => ({ light: Color.Black, dark: Color.Grey300 }[t])};
  `,
};
