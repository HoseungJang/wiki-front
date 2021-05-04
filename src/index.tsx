import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Document } from "./pages/Document";
import { ScrollToTop } from "./ScrollToTop";

render(
  <BrowserRouter>
    <ScrollToTop />
    <Route path="*" component={Document} />
  </BrowserRouter>,
  document.getElementById("root")
);
