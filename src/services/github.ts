import axios from "axios";

export class Github {
  private static readonly axiosInstance = axios.create({
    baseURL: "https://raw.githubusercontent.com/HoseungJang/wiki/master",
  });

  public static async getContent(path: string) {
    return (await this.axiosInstance.get(path)).data as string;
  }

  public static getContentURL(path: string) {
    return `${this.axiosInstance.defaults.baseURL}${path}`;
  }
}
