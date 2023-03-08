import { BrowserLaunchError, PdfParsingError } from '../types/errors';
import chromium from '@sparticuz/chromium';
import { launch as coreLaunch, Browser as CoreBrowser } from 'puppeteer-core';
import { launch, Browser } from 'puppeteer';
import Environments from '../environments';

type Browsers = Browser | CoreBrowser;

export class PdfParser {
  private browser: Browsers;

  private constructor(b: Browsers) {
    this.browser = b;
  }

  static async init() {
    try {
      const { args, defaultViewport, executablePath } = chromium;
      const browserOptions = {
        args,
        defaultViewport,
        executablePath: await executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
      };
      return new PdfParser(
        Environments.PRODUCTION ? await coreLaunch(browserOptions) : await launch(browserOptions)
      );
    } catch (error) {
      throw new BrowserLaunchError(error);
    }
  }

  async parseAndClose(htmlString: string) {
    try {
      const page = await this.browser.newPage();
      await page.setContent(htmlString, { waitUntil: 'networkidle2' });
      const output = await page.pdf({ format: 'a4' });
      this.browser.close();
      return output;
    } catch (error) {
      throw new PdfParsingError(error);
    }
  }
}
