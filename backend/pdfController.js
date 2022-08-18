const { GITHUB_TOKEN, FILE_URL } = require('./environments');
const GithubUtil = require('./githubUtil');
const htmlParser = require('./htmlParser');
const pdfGenerator = require('./pdfGenerator');
const { SharedService } = require('./sharedService');

async function pdfController(req, res) {
  try {
    const resp = await new GithubUtil(GITHUB_TOKEN).getCvFileFromGithub(FILE_URL);
    SharedService.generatedHtml = htmlParser(resp.data);
    const buffer = await pdfGenerator();
    res.type('application/pdf');
    res.send(buffer);
  } catch (e) {
    console.error(e);
    if (e.response && e.response.data && e.response.data.message) {
      res.status(500).json('Github error: ' + e.response.data.message);
    }
    res.status(500).json('Unknown error');
  }
}

module.exports = pdfController;
