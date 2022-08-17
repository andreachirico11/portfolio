const cheerio = require('cheerio');

function htmlParser(rawHtml) {
  const $ = cheerio.load(rawHtml);
  return $('pre').html();
}

module.exports = htmlParser;
