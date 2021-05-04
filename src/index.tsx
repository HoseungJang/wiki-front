import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
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
    <BrowserRouter>
      <ScrollToTop />
      <Route exact path="/not-found" component={NotFound} />
      <Route component={Document} />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
