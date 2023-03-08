import { ErrorTypes } from '../enums';

export abstract class BaseError extends Error {
  constructor(public type: ErrorTypes, public originalError: any) {
    super();
  }
}

export class WrongTokenError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.WRONG_TOKEN, originalError);
  }
}

export class CorruptedFileError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.CORRUPTED_FILE, originalError);
  }
}

export class MissingDataError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.MISSING_DATA, originalError);
  }
}

export class MissingEnvironmentError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.MISSING_ENV, originalError);
  }
}

export class EmailError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.EMAIL_API, originalError);
  }
}

export class SengridError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.EMAIL_API, originalError);
  }
}

export class UnauthorizedError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.UNAUTHORIZED, originalError);
  }
}

export class GithubResponseError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.GITHUB, originalError);
  }
}

export class UnknownError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.UNKWNOWN, originalError);
  }
}

export class CheerioError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.CHEERIO, originalError);
  }
}

export class PdfParsingError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.PARSING, originalError);
  }
}

export class BrowserLaunchError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.PUPPETTEER_LAUNCH, originalError);
  }
}

export class CreatingHtmlError extends BaseError {
  constructor(originalError: any) {
    super(ErrorTypes.HTML_CREATION, originalError);
  }
}
