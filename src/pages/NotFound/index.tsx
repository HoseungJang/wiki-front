import styled from "styled-components";

export function NotFound() {
  return (
    <S.Container>
      <p>NOT FOUND</p>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    > p {
      font-size: 20px;
    }
  `,
};
