import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { ScrollToTop } from "./ScrollToTop";
import { NotFound } from "./pages/NotFound";
import { Document } from "./pages/Document";

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;
  }
`;

render(
  <>
    <GlobalStyle />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/not-found" component={NotFound} />
        <Route component={Document} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
