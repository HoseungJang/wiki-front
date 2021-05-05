import { Link } from "react-router-dom";
import styled from "styled-components";

import { Color } from "../../../constants/color";

export function AnchorBlock(props: any) {
  return props.href.startsWith("#") ? (
    <S.Hash href={props.href}>{props.children}</S.Hash>
  ) : (
    <S.Path to={props.href}>{props.children}</S.Path>
  );
}

const S = {
  Path: styled(Link)`
    font-weight: bold;
    color: ${Color.Blue300};
    text-decoration: none;

    &:hover {
      color: ${Color.Blue100};
    }
  `,
  Hash: styled.a`
    font-weight: bold;
    color: ${Color.Purple300};
    text-decoration: none;

    &:hover {
      color: ${Color.Purple100};
    }
  `,
};
