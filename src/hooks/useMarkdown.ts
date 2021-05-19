import { useEffect } from "react";
import { useHistory } from "react-router";
import useSWR from "swr";

import { Github } from "../services/github";

export function useMarkdown(path: string) {
  const history = useHistory();

  const { data } = useSWR(
    path,
    async () => {
      try {
        return await Github.getContent(path);
      } catch (error) {
        history.replace("/not-found");
      }
    },
    { dedupingInterval: 3600 * 60, shouldRetryOnError: false }
  );

  useEffect(() => {
    if (data !== undefined) {
      return history.listen(() => {
        const targetElement = document.getElementById(decodeURIComponent(history.location.hash.slice(1)));

        if (targetElement) {
          window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
        } else if (history.action !== "POP") {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      });
    }
  }, [data, history]);

  return data ?? null;
}
