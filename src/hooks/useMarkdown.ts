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
    if (history.location.hash !== "" && data) {
      window.location.hash = "";
      window.location.hash = history.location.hash;
    }
  }, [history, data]);

  return data ?? null;
}