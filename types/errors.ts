import { ErrorTypes } from '../enums';

export abstract class BaseError extends Error {
  constructor(public type: ErrorTypes, public errCode: number, public originalError: any) {
    super();
  }
}

export class WrongTokenError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.WRONG_TOKEN, 401, originalError);
  }
}

export class CorruptedFileError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.CORRUPTED_FILE, 500, originalError);
  }
}

export class MissingDataError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.MISSING_DATA, 403, originalError);
  }
}

export class MissingEnvironmentError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.MISSING_ENV, 500, originalError);
  }
}

export class EmailError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.EMAIL_API, 500, originalError);
  }
}

export class SengridError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.EMAIL_API, 500, originalError);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.UNAUTHORIZED, 401, originalError);
  }
}

export class GithubResponseError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.GITHUB, 500, originalError);
  }
}

export class UnknownError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.UNKWNOWN, 500, originalError);
  }
}

export class CheerioError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.CHEERIO, 500, originalError);
  }
}

export class PdfParsingError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.PARSING, 500, originalError);
  }
}

export class BrowserLaunchError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.PUPPETTEER_LAUNCH, 500, originalError);
  }
}

export class CreatingHtmlError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.HTML_CREATION, 500, originalError);
  }
}

export class FetchingFromLocalError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.LOCAL_FETCHING, 500, originalError);
  }
}
