import { Github } from "../service/github";
import useSWR from "swr";

export function useMarkdown() {
  const { data } = useSWR(
    decodeURIComponent(window.location.pathname.slice(1)) || "README.md",
    async (path: string) => {
      return await Github.getContent(path);
    },
    { dedupingInterval: 3600 * 60 }
  );

  return data ?? null;
}
