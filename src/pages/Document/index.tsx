import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Main } from "./Main";
import { Sub } from "./Sub";

export function Document() {
  return (
    <S.Container>
      <Switch>
        <Route exact path="" component={Main} />
        <Route component={Sub} />
      </Switch>
    </S.Container>
  );
}

export const S = {
  Container: styled.main`
    padding: 20px 200px;
  `,
};
