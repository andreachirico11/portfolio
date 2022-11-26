import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { CvRequest } from '../../types';
import { BaseError, MissingDataError, UnauthorizedError, UnknownError } from '../../types/errors';
import { GithubUtilConnect, htmlParser, HtmlFile, errorLogger } from '../../utils-api';
import { isAKnownError } from '../../utils';
import { parseHtmlPageToBuffer } from '../../utils-api/parseHtmlPageToBuffer';

export default async function handler(req: CvRequest, res: NextApiResponse<BaseError | {}>) {
  const tk = req.headers.token,
    apiLocationUrl = req.headers.referer || 'http://localhost:3000/',
    temporaryHtmlFileName = 'temp.html',
    github = new GithubUtilConnect(Environments.GITHUB_TOKEN);
  let htmlFileRef: HtmlFile | null = null,
    errorStatusCode = 500;
  try {
    if (!tk) {
      errorStatusCode = 403;
      throw new MissingDataError();
    }
    if (tk !== Environments.TOKEN) {
      errorStatusCode = 401;
      throw new UnauthorizedError();
    }
    const githubFile = await github.getCvFileFromGithub(Environments.FILE_URL);
    const htmlStringFile = htmlParser(githubFile);
    htmlFileRef = new HtmlFile(htmlStringFile, temporaryHtmlFileName);
    const buffer = await parseHtmlPageToBuffer(`${apiLocationUrl}/${temporaryHtmlFileName}`);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(buffer);
  } catch (error) {
    res.status(errorStatusCode);
    if (isAKnownError(error)) {
      errorLogger(error);
      res.send(error);
    } else {
      errorLogger(new UnknownError(), error);
      res.send(new UnknownError());
    }
  } finally {
    if (htmlFileRef) htmlFileRef.delete();
  }
}
