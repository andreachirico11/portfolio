import { unlinkSync, writeFileSync } from 'fs';
import { PdfParsingError } from '../types/errors';

export class HtmlFile {
  private pathTitle: string;
  constructor(htmlString: string, fileName: string, publicFolder = 'public') {
    try {
      this.pathTitle = publicFolder + '/' + fileName;
      writeFileSync(this.pathTitle, htmlString);
    } catch (error) {
      throw new PdfParsingError();
    }
  }
  delete() {
    unlinkSync(this.pathTitle);
  }
}
