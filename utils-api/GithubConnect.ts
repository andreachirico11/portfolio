import axios from 'axios';
import { GithubResponseError } from '../types/errors';

export class GithubUtilConnect {
  constructor(private githubToken: string) {}

  async getCvFileFromGithub(fileUrl: string, branchName?: string) {
    try {
      if (!!branchName) {
        fileUrl = fileUrl + '?ref=' + branchName;
      }
      const res = await axios.get<string>(fileUrl, {
        headers: {
          accept: 'application/vnd.github.html+json',
          authorization: this.githubToken,
        },
      });
      if (res.status !== 200) {
        throw '';
      }
      return res.data;
    } catch (error) {
      throw new GithubResponseError(error);
    }
  }
}
