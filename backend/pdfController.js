const fs = require('fs');
const { GITHUB_TOKEN, FILE_URL, TEMPORARY_PDF_NAME } = require('./environments');
const GithubUtil = require('./githubUtil');
const htmlParser = require('./htmlParser');
const pdfGenerator = require('./pdfGenerator');

async function pdfController(req, res) {
  try {
    const resp = await new GithubUtil(GITHUB_TOKEN).getCvFileFromGithub(FILE_URL);
    const parsed = htmlParser(resp.data);
    const pdfFile = await pdfGenerator(parsed);
    res.setHeader('Content-Type', 'application/pdf');
    res.sendFile(pdfFile.filename, function (err) {
      if (err) {
        console.log(err);
      }
      fs.unlinkSync(TEMPORARY_PDF_NAME);
    });
  } catch (e) {
    console.error(e);
    if (e.response && e.response.data && e.response.data.message) {
      res.status(500).json('Github error: ' + e.response.data.message);
    }
    res.status(500).json('Unknown error');
  }
}

module.exports = pdfController;
