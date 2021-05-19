import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Color } from "../../constants/color";

import { useTheme, Theme } from "../../contexts/Theme";

import { Navigation, documentNavigationHeight } from "./Navigation";
import { Main } from "./Main";
import { Sub } from "./Sub";

export function Document() {
  const { currentTheme } = useTheme();

  return (
    <>
      <Navigation />
      <S.Container t={currentTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route component={Sub} />
        </Switch>
      </S.Container>
    </>
  );
}

export const S = {
  Container: styled.main<{ t: Theme }>`
    flex: 1;

    position: relative;

    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: column;

    padding: ${documentNavigationHeight}px 40px 20px;

    box-sizing: border-box;

    background-color: ${({ t }) => ({ light: Color.White, dark: Color.Black100 }[t])};

    overflow-x: hidden;
  `,
};
