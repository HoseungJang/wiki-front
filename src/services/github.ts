import { Octokit } from "@octokit/rest";
import { decode } from "js-base64";

export class Github {
  private static readonly instance = new Octokit({
    auth: process.env.REACT_APP_GITHUB_TOKEN,
    baseUrl: "https://api.github.com",
  });

  private static readonly owner = "HoseungJang";
  private static readonly repo = "wiki-base";

  public static async getContent(path: string) {
    const { content } = (
      await this.instance.repos.getContent({
        owner: this.owner,
        repo: this.repo,
        path,
      })
    ).data as { content: string };

    return decode(content);
  }
}
