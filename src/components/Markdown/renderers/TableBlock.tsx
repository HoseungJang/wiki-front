import { ReactNode } from "react";
import styled from "styled-components";

import { Color } from "../../../constants/color";

import { useTheme, Theme } from "../../../contexts/Theme";

export function TableBlock({ children }: { children: ReactNode }) {
  const { currentTheme } = useTheme();

  return (
    <S.Container t={currentTheme}>
      <table>{children}</table>
    </S.Container>
  );
}

const S = {
  Container: styled.div<{ t: Theme }>`
    width: 100%;

    word-break: keep-all;

    overflow-x: scroll;

    > table {
      width: fit-content;

      border-spacing: 0;

      > thead {
        > tr {
          > th {
            padding: 6px 13px;

            box-sizing: border-box;

            border: 1px solid ${({ t }) => ({ light: Color.Grey200, dark: Color.Black50 }[t])};

            &:not(:last-child) {
              border-right: none;
            }
          }
        }
      }

      > tbody {
        > tr {
          > td {
            padding: 6px 13px;

            box-sizing: border-box;

            border: 1px solid ${({ t }) => ({ light: Color.Grey200, dark: Color.Black50 }[t])};
            border-top: none;

            &:not(:last-child) {
              border-right: none;
            }
          }
        }
      }
    }
  `,
};
