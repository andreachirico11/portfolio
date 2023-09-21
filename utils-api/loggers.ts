import Environments from '../environments';
import {
  BaseError,
  BrowserLaunchError,
  CheerioError,
  CreatingHtmlError,
  EmailError,
  GithubResponseError,
  MissingDataError,
  MissingEnvironmentError,
  PdfParsingError,
  SengridError,
  UnauthorizedError,
} from '../types/errors';


export function log(message: string) {
  if (!Environments.INFO_LOGS_OFF) {
    console.log('\n\n>>>>> I N F O <<<<<\n');
    console.log(message);
    console.log('\n>>>>> ------- <<<<<');
  }
}

export function spacer() {
  if (!Environments.INFO_LOGS_OFF) {
    let i = 0;
    while (i < 100) {
      console.log('');
      i++;
    }
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
  }
}


export function errorLogger(error: BaseError | string) {
  if (!Environments.ERROR_LOGS_OFF) {
    if (typeof error === 'string') {
      return printErr(error);
    }
    const sysError = error.originalError;
    if (error instanceof MissingDataError) {
      printErr('Missing data in the request', sysError);
    } else if (error instanceof SengridError) {
      printErr('Sendgrid error', sysError);
    } else if (error instanceof EmailError) {
      printErr('Email Generic error', sysError);
    } else if (error instanceof MissingEnvironmentError) {
      printErr('Missing Environments', sysError);
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
    } else if (error instanceof BrowserLaunchError) {
      printErr('Error launching browser', sysError);
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

