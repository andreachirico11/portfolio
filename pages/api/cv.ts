import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { CvRequest, HttpErrorResponse } from '../../types';
import { MissingDataError, UnauthorizedError, UnknownError } from '../../types/errors';
import { GithubUtilConnect, htmlParser, errorLogger, log } from '../../utils-api';
import { isAKnownError } from '../../utils';
import { parseHtmlPageToBuffer } from '../../utils-api/parseHtmlPageToBuffer';
import { ErrorTypes } from '../../enums';

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

    const githubFile = await github.getCvFileFromGithub(Environments.FILE_URL);
    log('fetched from github');

    const htmlStringFile = htmlParser(githubFile);
    log('parsed to string');

    const buffer = await parseHtmlPageToBuffer(htmlStringFile);
    log('parsed to buffer');

    res.setHeader('Content-Type', 'application/pdf');
    res.send(buffer);
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
