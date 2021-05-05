import styled from "styled-components";

import { Github } from "../../../services/github";

export function ImageBlock(props: any) {
  return <S.Container src={Github.getContentURL(props.src)} alt="" />;
}

export const S = {
  Container: styled.img`
    max-width: 100%;

    object-fit: contain;
  `,
};
