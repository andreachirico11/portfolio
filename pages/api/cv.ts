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
    temporaryFileLocation = Environments.PRODUCTION
      ? temporaryHtmlFileName
      : 'public/' + temporaryHtmlFileName,
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
    console.log('token valid');

    const githubFile = await github.getCvFileFromGithub(Environments.FILE_URL);
    console.log('fetched from github');

    const htmlStringFile = htmlParser(githubFile);
    console.log('parsed to string');

    htmlFileRef = new HtmlFile(htmlStringFile, temporaryFileLocation);
    const fileLocation = `${apiLocationUrl}/${temporaryHtmlFileName}`;
    console.log('temporary html created at the url: ', fileLocation);

    const buffer = await parseHtmlPageToBuffer(fileLocation);
    console.log('parsed to buffer');

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
    if (htmlFileRef && !Environments.KEEP_FILE) htmlFileRef.delete();
  }
}
