import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Color } from "../../constants/color";

import { Navigation, documentNavigationHeight } from "./Navigation";
import { Main } from "./Main";
import { Sub } from "./Sub";

export function Document() {
  return (
    <S.Container>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={Sub} />
      </Switch>
    </S.Container>
  );
}

export const S = {
  Container: styled.main`
    flex: 1;

    position: relative;

    width: 800px;
    max-width: 800px;

    display: flex;
    flex-direction: column;

    padding: ${documentNavigationHeight}px 40px 20px;

    box-sizing: border-box;

    background-color: ${Color.White};
  `,
};
