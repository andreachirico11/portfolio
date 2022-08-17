const axios = require('axios');

class GithubUtil {
  constructor(token) {
    this.authorization = token;
  }

  getCvFileFromGithub(FILE_URL) {
    return axios.get(FILE_URL, {
      headers: {
        accept: 'application/vnd.github.html+json',
        authorization: this.authorization,
      },
    });
  }
}

module.exports = GithubUtil;
