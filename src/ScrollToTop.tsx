import { useEffect } from "react";
import { useHistory } from "react-router";

export function ScrollToTop() {
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      if (history.action !== "POP") {
        window.scrollTo(0, 0);
      }
    });
  }, [history]);

  return <></>;
}
