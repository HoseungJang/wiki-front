import axios from "axios";

export class Github {
  private static readonly instance = axios.create({
    baseURL: "https://raw.githubusercontent.com/HoseungJang/wiki-base/master",
  });

  public static async getContent(path: string) {
    return (await this.instance.get(path)).data;
  }
}
