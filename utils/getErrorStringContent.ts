import { WrongTokenError, CorruptedFileError } from '../myForm';

export function getErrorStringContent(error: any) {
  return error instanceof WrongTokenError
    ? 'Your passcode is incorrect'
    : error instanceof CorruptedFileError
    ? 'The received file is corrupted'
    : 'There was an error generating the resume';
}
