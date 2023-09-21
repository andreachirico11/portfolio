import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { CvRequest, HttpErrorResponse } from '../../types';
import {
  MissingDataError,
  MissingEnvironmentError,
  UnauthorizedError,
  UnknownError,
} from '../../types/errors';
import { GithubUtilConnect, htmlParser, errorLogger, log, spacer } from '../../utils-api';
import { isAKnownError } from '../../utils';
import { PdfParser } from '../../utils-api/parseHtmlPageToBuffer';
import sendgrid from '../../utils-api/SendgridUtil';
import { FsUtil } from '../../utils-api/FsUtil';

export default async function handler(
  req: CvRequest,
  res: NextApiResponse<HttpErrorResponse | {}>
) {
  const {
    GITHUB_TOKEN,
    PROTECTED_CV,
    TOKEN,
    LOCAL_CV_PATH,
    FILE_URL,
    CV_BRANCH,
    SENDGRID_API_KEY,
    PERSONAL_MAIL,
    PERSONAL_TRANSPORT_MAIL,
    DOWNLOAD_NOTIFICATION,
  } = Environments;

  spacer();
  const {token, locale} = req.headers;

  try {
    
    if (PROTECTED_CV) {
      checkForCvToken(token, TOKEN);
      log('cv token is valid');
    }
    
    log(`Getting the cv for locale: ${locale} ${PROTECTED_CV ? 'and with token: ' + token : ''}`);

    const stringFile = await (!!LOCAL_CV_PATH
      ? fetchFromLocalFile(LOCAL_CV_PATH, locale)
      : fetchFromGithub(FILE_URL, GITHUB_TOKEN, CV_BRANCH, locale));
    log('File Fetched');

    log('starting parser');
    const pdfParser = await PdfParser.init();
    log('parser successfully started');

    const buffer = await pdfParser.parseAndClose(stringFile);
    log('file converted to buffer');

    if (DOWNLOAD_NOTIFICATION) {
      await sendNotificationEmail(SENDGRID_API_KEY, PERSONAL_MAIL, PERSONAL_TRANSPORT_MAIL);
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.send(buffer);
    log('file sent');
    
  } catch (error) {

    const parsed = isAKnownError(error) ? error : new UnknownError(error);
    errorLogger(parsed);
    res.status(parsed.errCode);
    res.send({ errCode: parsed.type });

  }
}

function checkForCvToken(tk: string, TOKEN: string) {
  if (!tk) {
    throw new MissingDataError(null);
  }
  if (tk !== TOKEN) {
    throw new UnauthorizedError(null);
  }
}

function fetchFromLocalFile(LOCAL_CV_PATH: string, locale: string) {
  const url = LOCAL_CV_PATH  + locale + '.html';
  log('fetching file from local path: ' + url);
  return FsUtil.fetcCvFile(url);
}

async function fetchFromGithub(FILE_URL: string, GITHUB_TOKEN: string, CV_BRANCH: string, locale: string) {
  if (!FILE_URL || !GITHUB_TOKEN) {
    throw new MissingEnvironmentError(null);
  }
  const url = FILE_URL + locale + '.html';
  let fetchLog = 'fetching from url: ' + url;
  if (!!CV_BRANCH) {
    fetchLog = fetchLog + ` on branch: ${CV_BRANCH}`;
  }
  log(fetchLog);
  const github = new GithubUtilConnect(GITHUB_TOKEN);
  const file = await github.getCvFileFromGithub(url, CV_BRANCH);
  log('fetched from github');
  const stringFile = htmlParser(file);
  log('parsed to html string');
  return stringFile;
}

async function sendNotificationEmail( SENDGRID_API_KEY: string,
  PERSONAL_MAIL: string,
  PERSONAL_TRANSPORT_MAIL: string) {
  // SEPARATED ERROR HANDLING BECAUSE OF RANDOM ERRORS WHICH SOMETIMS
  // BLOCK CV DOWNLOAD
  try {
    const sendgridUtil = sendgrid.configure(
      SENDGRID_API_KEY,
      PERSONAL_MAIL,
      PERSONAL_TRANSPORT_MAIL
    );
    await sendgridUtil.sendCvDownloadNotification();
    log('notification email sent');
  } catch (error) {
    errorLogger('Unable to send notification email');
  }

}
