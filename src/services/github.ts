import { Octokit } from "@octokit/rest";
import { decode } from "js-base64";
import { AES, enc } from "crypto-js";

export class Github {
  private static readonly instance = new Octokit({
    auth: AES.decrypt(
      process.env.REACT_APP_ENCRYPTED_GITHUB_TOKEN,
      process.env.REACT_APP_CRYPTO_KEY
    ).toString(enc.Utf8),
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
