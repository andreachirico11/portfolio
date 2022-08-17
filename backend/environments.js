const { PORT, FILE_URL, GITHUB_TOKEN } = process.env;
const TEMPORARY_PDF_NAME = 'temp.pdf';
const FILE_OPTIONS = {
  format: 'A4',
  orientation: 'portrait',
  border: {
    top: '0',
    bottom: '0',
  },
};

module.exports = { PORT, FILE_URL, GITHUB_TOKEN, TEMPORARY_PDF_NAME, FILE_OPTIONS };
