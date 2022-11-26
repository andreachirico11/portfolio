import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { CvRequest, HttpErrorResponse } from '../../types';
import { ErrorTypes, MissingDataError, UnauthorizedError, UnknownError } from '../../types/errors';
import { GithubUtilConnect, htmlParser, HtmlFile, errorLogger, log } from '../../utils-api';
import { isAKnownError } from '../../utils';
import { parseHtmlPageToBuffer } from '../../utils-api/parseHtmlPageToBuffer';

export default async function handler(
  req: CvRequest,
  res: NextApiResponse<HttpErrorResponse | {}>
) {
  const tk = req.headers.token,
    apiLocationUrl = req.headers.referer || 'http://localhost:3000/',
    temporaryHtmlFileName = 'temp.html',
    temporaryFileLocation = Environments.PRODUCTION
      ? temporaryHtmlFileName
      : 'public/' + temporaryHtmlFileName,
    github = new GithubUtilConnect(Environments.GITHUB_TOKEN);
  let htmlFileRef: HtmlFile | null = null,
    errorStatusCode = 500;

  try {
    if (!tk) {
      errorStatusCode = 403;
      throw new MissingDataError(null);
    }
    if (tk !== Environments.TOKEN) {
      errorStatusCode = 401;
      throw new UnauthorizedError(null);
    }
    log('token valid');

    const githubFile = await github.getCvFileFromGithub(Environments.FILE_URL);
    log('fetched from github');

    const htmlStringFile = htmlParser(githubFile);
    log('parsed to string');

    htmlFileRef = new HtmlFile(htmlStringFile, temporaryFileLocation);
    const fileLocation = `${apiLocationUrl}/${temporaryHtmlFileName}`;
    log('temporary html created at the url: ' + fileLocation);

    const buffer = await parseHtmlPageToBuffer(fileLocation);
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
  } finally {
    if (htmlFileRef && !Environments.KEEP_FILE) htmlFileRef.delete();
  }
}
