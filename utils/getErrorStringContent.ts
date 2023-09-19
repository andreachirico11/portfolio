import { ErrorTypes } from '../enums';
import { HttpErrorResponse } from '../types';
import { BaseError } from '../types/errors';

export function getModalErrorContent(error: unknown | HttpErrorResponse) {
  if (isAnHttpError(error)) {
    switch (error.errCode) {
      case ErrorTypes.MISSING_DATA:
        return 'The request contains incorrect data';
      case ErrorTypes.EMAIL_API:
        return error.content || 'There was an error with Email service';
      case ErrorTypes.UNAUTHORIZED:
        return 'The password is invalid';
      case ErrorTypes.GITHUB:
        return 'There was an error retrieving the file from github';
      case ErrorTypes.CHEERIO:
        return 'The provided html in invalid';
      case ErrorTypes.PARSING:
      case ErrorTypes.HTML_CREATION:
      case ErrorTypes.PUPPETTEER_LAUNCH:
        return 'Error during the file parsing';
      case ErrorTypes.MISSING_ENV:
        return 'Missing Environments';
        case ErrorTypes.LOCAL_FETCHING:
          return 'Error fetching local file';
      case ErrorTypes.UNKWNOWN:
      default:
        return 'Unkwnown Error';
    }
  }
  return 'Unregistered Error';
}

export function isAnHttpError(error: unknown): error is HttpErrorResponse {
  return !!error && !!(error as HttpErrorResponse).errCode;
}

export function isAKnownError(error: unknown): error is BaseError {
  return !!error && !!(error as BaseError).type;
}
