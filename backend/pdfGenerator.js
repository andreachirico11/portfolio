const { TEMPORARY_PDF_NAME, FILE_OPTIONS } = require('./environments');
const pdf = require('html-pdf');

module.exports = function (parsed) {
  return new Promise((res, rej) => {
    pdf.create(parsed, FILE_OPTIONS).toFile(TEMPORARY_PDF_NAME, function (err, file) {
      if (err) {
        rej('error during pdf creation');
      }
      res(file);
    });
  });
};
