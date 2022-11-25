export enum ErrorTypes {
  WRONG_TOKEN,
  CORRUPTED_FILE,
  MISSING_DATA,
  EMAIL_API,
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
