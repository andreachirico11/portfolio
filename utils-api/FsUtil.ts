import { promises } from 'fs';
import { FetchingFromLocalError } from '../types/errors';

export class FsUtil {
  static fetcCvFile(fileUrl: string) {
    try {
      return promises.readFile(fileUrl, 'utf8')
    } catch (error) {
      throw new FetchingFromLocalError(error);
    }
  }
}