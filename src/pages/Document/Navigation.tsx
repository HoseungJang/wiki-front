import styled from "styled-components";

import { Color } from "../../constants/color";

export const documentNavigationHeight = 60;

export function Navigation() {
  return <S.Container></S.Container>;
}

const S = {
  Container: styled.div`
    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    z-index: 1;

    width: 100%;
    height: ${documentNavigationHeight}px;

    display: flex;
    align-items: center;

    padding: 0 40px;

    box-sizing: border-box;

    background-color: ${Color.White};

    box-shadow: 1px 1px 10px ${Color.Grey50};
  `,
};
