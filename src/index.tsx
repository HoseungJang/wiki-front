import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { ScrollToTop } from "./ScrollToTop";
import { NotFound } from "./pages/NotFound";
import { Document } from "./pages/Document";

render(
  <BrowserRouter>
    <ScrollToTop />
    <Route path="/not-found" component={NotFound} />
    <Route path="*" component={Document} />
  </BrowserRouter>,
  document.getElementById("root")
);
