import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { CvRequest, HttpErrorResponse } from '../../types';
import {
  MissingDataError,
  MissingEnvironmentError,
  UnauthorizedError,
  UnknownError,
} from '../../types/errors';
import { GithubUtilConnect, htmlParser, errorLogger, log } from '../../utils-api';
import { isAKnownError } from '../../utils';
import { PdfParser } from '../../utils-api/parseHtmlPageToBuffer';
import { ErrorTypes } from '../../enums';
import sendgrid from '../../utils-api/SendgridUtil';

export default async function handler(
  req: CvRequest,
  res: NextApiResponse<HttpErrorResponse | {}>
) {
  const tk = req.headers.token,
    github = new GithubUtilConnect(Environments.GITHUB_TOKEN);
  let errorStatusCode = 500;

  try {
    if (Environments.PROTECTED_CV) {
      if (!tk) {
        errorStatusCode = 403;
        throw new MissingDataError(null);
      }
      if (tk !== Environments.TOKEN) {
        errorStatusCode = 401;
        throw new UnauthorizedError(null);
      }
      log('token valid');
    }

    if (!Environments.FILE_URL || !Environments.GITHUB_TOKEN) {
      errorStatusCode = 500;
      throw new MissingEnvironmentError(null);
    }

    let fetchLog = 'fetching from url: ' + Environments.FILE_URL;
    if (!!Environments.CV_BRANCH) {
      fetchLog = fetchLog + ` on branch: ${Environments.CV_BRANCH}`; 
    } 
    log(fetchLog);
    const githubFile = await github.getCvFileFromGithub(Environments.FILE_URL, Environments.CV_BRANCH);
    log('fetched from github');

    const htmlStringFile = htmlParser(githubFile);
    log('parsed to string');

    log('starting parser');
    const pdfParser = await PdfParser.init();
    log('parser successfully started');

    const buffer = await pdfParser.parseAndClose(htmlStringFile);
    log('file converted to buffer');

    if (Environments.DOWNLOAD_NOTIFICATION) {
      const sendgridUtil = sendgrid.configure(
        Environments.SENDGRID_API_KEY,
        Environments.PERSONAL_MAIL,
        Environments.PERSONAL_TRANSPORT_MAIL
      )
      await sendgridUtil.sendCvDownloadNotification();
      log('notification email sent');
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.send(buffer);
    log('file sent');
  } catch (error) {
    res.status(errorStatusCode);
    if (isAKnownError(error)) {
      errorLogger(error);
      res.send({ errCode: error.type });
    } else {
      errorLogger(new UnknownError(error));
      res.send({ errCode: ErrorTypes.UNKWNOWN });
    }
  }
}
