import Environments from '../environments';
import {
  BaseError,
  CheerioError,
  CreatingHtmlError,
  EmailError,
  GithubResponseError,
  MissingDataError,
  PdfParsingError,
  UnauthorizedError,
} from '../types/errors';

export function errorLogger(error: BaseError) {
  if (!Environments.ERROR_LOGS_OFF) {
    const sysError = error.originalError;
    if (error instanceof MissingDataError) {
      printErr('Missing data in the request', sysError);
    } else if (error instanceof EmailError) {
      printErr('Sendgrid error', sysError);
    } else if (error instanceof UnauthorizedError) {
      printErr('Wrong Credentials', sysError);
    } else if (error instanceof GithubResponseError) {
      printErr('Cannot retrieve the file from github', sysError);
    } else if (error instanceof CheerioError) {
      printErr('Cheerio failed parsing the html', sysError);
    } else if (error instanceof PdfParsingError) {
      printErr('Error parsing pdf', sysError);
    } else if (error instanceof CreatingHtmlError) {
      printErr('Error generating html', sysError);
    } else {
      printErr('Unknown Error', sysError);
    }
  }
}

function printErr(e: string, sys?: unknown) {
  console.log('\n\n>------------------------------\n');
  console.log(e);
  if (sys) {
    console.log('\n');
    console.log(sys);
  }
  console.log('\n------------------------------<');
}
