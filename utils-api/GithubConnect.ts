import axios from 'axios';

export class GithubUtilConnect {
  constructor(private githubToken: string) {}

  getCvFileFromGithub(fileUrl: string) {
    return axios.get<string>(fileUrl, {
      headers: {
        accept: 'application/vnd.github.html+json',
        authorization: this.githubToken,
      },
    });
  }
}
