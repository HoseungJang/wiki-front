import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import styled from "styled-components";

import { Color } from "../../constants/color";

export const documentNavigationHeight = 60;

export function Navigation() {
  return (
    <S.Container>
      <Link className="link-to-main" to="/">
        <AiFillHome className="icon" />
      </Link>
    </S.Container>
  );
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

    > .link-to-main {
      width: 30px;
      height: 30px;

      > .icon {
        width: 100%;
        height: 100%;

        color: ${Color.Blue300};

        &:hover {
          color: ${Color.Blue200};
        }
      }
    }
  `,
};
