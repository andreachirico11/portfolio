const cheerio = require('cheerio');

function htmlParser(rawHtml) {
  const $ = cheerio.load(rawHtml, null, false);
  const preContent = $('pre').text();
  return cheerio.load(preContent).html();
}

module.exports = htmlParser;
