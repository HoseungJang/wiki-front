import { render } from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { ThemeContextProvider } from "./contexts/Theme";

import { Page } from "./components/Layout/Page";
import { NotFound } from "./pages/NotFound";
import { Document } from "./pages/Document";

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  html, body {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    font-size: 10px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    line-height: 1.4;

    ul {
      margin: 0;
      padding: 0;
  
      list-style: none;
    }

    > #root {
      width: 100%;
      min-height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      * {
        transition: background-color 0.3s;
      }
    }

    @media screen and (max-width: 768px) {
      font-size: 8px;
    }
  }
`;

render(
  <ThemeContextProvider>
    <HashRouter>
      <GlobalStyle />
      <Page>
        <Switch>
          <Route exact path="/not-found" component={NotFound} />
          <Route component={Document} />
        </Switch>
      </Page>
    </HashRouter>
  </ThemeContextProvider>,
  document.getElementById("root")
);
