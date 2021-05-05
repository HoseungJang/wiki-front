import { Link } from "react-router-dom";
import { AiFillHome, AiFillGithub } from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";
import styled from "styled-components";

import { Color } from "../../constants/color";

import { useTheme, Theme } from "../../contexts/Theme";

export const documentNavigationHeight = 60;

export function Navigation() {
  const { currentTheme, changeTheme } = useTheme();

  return (
    <S.Container t={currentTheme}>
      <div className="links">
        <Link className="link" to="/">
          <AiFillHome className="icon" />
        </Link>
        <a className="link" href="https://github.com/HoseungJang/wiki-front">
          <AiFillGithub className="icon" />
        </a>
      </div>
      <button
        className="theme-change-button"
        onClick={() =>
          changeTheme(
            {
              light: Theme.Dark,
              dark: Theme.Light,
            }[currentTheme]
          )
        }
      >
        {{
          light: () => <FaSun className="icon" />,
          dark: () => <FaMoon className="icon" />,
        }[currentTheme]()}
      </button>
    </S.Container>
  );
}

const S = {
  Container: styled.div<{ t: Theme }>`
    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    z-index: 1;

    width: 100%;
    height: ${documentNavigationHeight}px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 40px;

    box-sizing: border-box;

    background-color: ${({ t }: { t: Theme }) =>
      ({ light: Color.White, dark: Color.Black }[t])};

    box-shadow: 1px 1px 10px
      ${({ t }: { t: Theme }) =>
        ({ light: Color.Grey50, dark: Color.Black50 }[t])};

    > .links {
      display: flex;

      > .link {
        width: 30px;
        height: 30px;

        &:not(:last-child) {
          margin-right: 10px;
        }

        > .icon {
          width: 100%;
          height: 100%;

          color: ${({ t }: { t: Theme }) =>
            ({ light: Color.Blue300, dark: Color.White }[t])};

          &:hover {
            color: ${({ t }: { t: Theme }) =>
              ({ light: Color.Blue200, dark: Color.Grey200 }[t])};
          }
        }
      }
    }

    > .theme-change-button {
      display: flex;

      background-color: transparent;

      border: none;

      cursor: pointer;

      > .icon {
        width: 30px;
        height: 30px;

        color: ${({ t }: { t: Theme }) =>
          ({ light: Color.Orange100, dark: Color.White }[t])};

        &:hover {
          color: ${({ t }: { t: Theme }) =>
            ({ light: Color.Orange50, dark: Color.Grey200 }[t])};
        }
      }
    }
  `,
};
