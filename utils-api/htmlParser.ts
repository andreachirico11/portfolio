import { load } from 'cheerio';
import { CheerioError } from '../types/errors';

export function htmlParser(rawHtml: string | Buffer) {
  try {
    const $ = load(rawHtml);
    const preContent = $('pre').text();
    return load(preContent).html();
  } catch (error) {
    throw new CheerioError();
  }
}
