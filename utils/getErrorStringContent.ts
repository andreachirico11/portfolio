import { BaseError, CorruptedFileError, ErrorTypes, WrongTokenError } from '../types/errors';

export function getErrorStringContent(error: any) {
  return error instanceof WrongTokenError
    ? 'Your passcode is incorrect'
    : error instanceof CorruptedFileError
    ? 'The received file is corrupted'
    : 'There was an error generating the resume';
}

export function getErrorMessages(error: unknown) {
  return isAKnownError(error) ? handleError(error) : 'Unregistered error';
}

function handleError(error: BaseError) {
  switch (error.type) {
    case ErrorTypes.MISSING_DATA:
      return error.errorMessage || 'The request contains incorrect data';
    case ErrorTypes.EMAIL_API:
      return error.errorMessage || 'There was an error with Email service';
    case ErrorTypes.UNAUTHORIZED:
      return 'The password is invalid';
    case ErrorTypes.GITHUB:
      return 'There was an error retrieving the file from github';
    case ErrorTypes.CHEERIO:
      return 'The provided html in invalid';
    case ErrorTypes.PARSING:
    case ErrorTypes.HTML_CREATION:
      return 'Error during the file parsing';
    case ErrorTypes.UNKWNOWN:
    default:
      return 'Unkwnown Error';
  }
}

export function isAKnownError(error: unknown): error is BaseError {
  return !!error && !!(error as BaseError).type;
}
