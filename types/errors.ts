export enum ErrorTypes {
  WRONG_TOKEN,
  CORRUPTED_FILE,
  MISSING_DATA,
  EMAIL_API,
  UNAUTHORIZED,
  GITHUB,
  UNKWNOWN,
  CHEERIO,
  PARSING,
  HTML_CREATION,
}

export abstract class BaseError extends Error {
  constructor(public type: ErrorTypes, public errorMessage?: string) {
    super();
  }
}

export class WrongTokenError extends BaseError {
  constructor() {
    super(ErrorTypes.WRONG_TOKEN);
  }
}

export class CorruptedFileError extends BaseError {
  constructor() {
    super(ErrorTypes.CORRUPTED_FILE);
  }
}

export class MissingDataError extends BaseError {
  constructor(public errorMessage?: string) {
    super(ErrorTypes.MISSING_DATA, errorMessage);
  }
}

export class EmailError extends BaseError {
  constructor(public errorMessage?: string) {
    super(ErrorTypes.EMAIL_API, errorMessage);
  }
}

export class UnauthorizedError extends BaseError {
  constructor() {
    super(ErrorTypes.UNAUTHORIZED);
  }
}

export class GithubResponseError extends BaseError {
  constructor() {
    super(ErrorTypes.GITHUB);
  }
}

export class UnknownError extends BaseError {
  constructor() {
    super(ErrorTypes.UNKWNOWN);
  }
}

export class CheerioError extends BaseError {
  constructor() {
    super(ErrorTypes.CHEERIO);
  }
}

export class PdfParsingError extends BaseError {
  constructor() {
    super(ErrorTypes.PARSING);
  }
}

export class CreatingHtmlError extends BaseError {
  constructor() {
    super(ErrorTypes.HTML_CREATION);
  }
}
