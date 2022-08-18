const { PORT } = require('./environments');
const puppeteer = require('puppeteer');

module.exports = async function () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/temp-html`);
  const result = await page.pdf({ format: 'A4' });
  browser.close();
  return result;
};
