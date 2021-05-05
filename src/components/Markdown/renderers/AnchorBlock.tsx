import { Link } from "react-router-dom";
import styled from "styled-components";

import { Color } from "../../../constants/color";

export function AnchorBlock(props: any) {
  return props.href.startsWith("#") ? (
    <S.Hash href={props.href}>{props.children}</S.Hash>
  ) : props.href.startsWith("http") ? (
    <S.Anchor href={props.href}>{props.children}</S.Anchor>
  ) : (
    <S.Link to={props.href}>{props.children}</S.Link>
  );
}

const S = {
  Anchor: styled.a`
    font-weight: bold;
    color: ${Color.Blue300};
    text-decoration: none;

    &:hover {
      color: ${Color.Blue200};
    }
  `,
  Link: styled(Link)`
    font-weight: bold;
    color: ${Color.Blue300};
    text-decoration: none;

    &:hover {
      color: ${Color.Blue200};
    }
  `,
  Hash: styled.a`
    font-weight: bold;
    color: ${Color.Purple300};
    text-decoration: none;

    &:hover {
      color: ${Color.Purple200};
    }
  `,
};
