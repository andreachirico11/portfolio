import { unlinkSync, writeFileSync } from 'fs';
import { CreatingHtmlError, PdfParsingError } from '../types/errors';

export class HtmlFile {
  private pathTitle: string;
  constructor(htmlString: string, fileName: string, publicFolder = 'public') {
    try {
      this.pathTitle = publicFolder + '/' + fileName;
      writeFileSync(this.pathTitle, htmlString);
    } catch (error) {
      throw new CreatingHtmlError();
    }
  }
  delete() {
    unlinkSync(this.pathTitle);
  }
}
