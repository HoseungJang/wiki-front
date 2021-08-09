import { render } from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { ThemeContextProvider } from "./contexts/Theme";

import { Page } from "./components/Layout/Page";
import { NotFound } from "./pages/NotFound";
import { Document } from "./pages/Document";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;

    font-size: 10px;
    font-family: 'NEXON Lv2 Gothic';
    line-height: 1.4;

    @font-face {
      font-family: 'NEXON Lv2 Gothic';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv2 Gothic.woff') format('woff');
      font-weight: normal;
      font-style: normal;
    }

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
