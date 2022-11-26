import { unlinkSync, writeFileSync } from 'fs';
import { CreatingHtmlError } from '../types/errors';

export class HtmlFile {
  constructor(htmlString: string, private path: string) {
    try {
      writeFileSync(this.path, htmlString);
    } catch (error) {
      throw new CreatingHtmlError(error);
    }
  }
  delete() {
    unlinkSync(this.path);
  }
}
