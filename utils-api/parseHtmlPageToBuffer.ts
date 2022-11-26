import { PdfParsingError } from '../types/errors';
import puppeteer from 'puppeteer';

export async function parseHtmlPageToBuffer(htmlString: string) {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setContent(htmlString);
    const result = await page.pdf({ format: 'A4' });
    browser.close();
    return result;
  } catch (e) {
    throw new PdfParsingError(e);
  }
}
