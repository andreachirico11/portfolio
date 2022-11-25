import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { CvRequest } from '../../types';
import {
  BaseError,
  GithubResponseError,
  MissingDataError,
  UnauthorizedError,
  UnknownError,
} from '../../types/errors';
import axios from 'axios';
import { GithubUtilConnect, htmlParser, HtmlFile } from '../../utils-api';
import { isAKnownError } from '../../utils';
import { parseHtmlPageToBuffer } from '../../utils-api/parseHtmlPageToBuffer';

export default async function handler(req: CvRequest, res: NextApiResponse<BaseError | {}>) {
  const tk = req.headers.token,
    apiLocationUrl = req.headers.referer || 'http://localhost:3000/',
    temporaryHtmlFileName = 'temp.html',
    github = new GithubUtilConnect(Environments.GITHUB_TOKEN);
  let htmlFileRef: HtmlFile | null = null;
  if (!tk) {
    res.status(403).send(new MissingDataError());
  }
  if (tk !== Environments.TOKEN) {
    res.status(401).send(new UnauthorizedError());
  }
  try {
    const githubFile = await github.getCvFileFromGithub(Environments.FILE_URL);
    const htmlStringFile = htmlParser(githubFile.data);
    htmlFileRef = new HtmlFile(htmlStringFile, temporaryHtmlFileName);
    const buffer = await parseHtmlPageToBuffer(`${apiLocationUrl}/${temporaryHtmlFileName}`);
    res.setHeader('Content-Type', 'application/pdf');
    res.send(buffer);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return res.status(500).send(new GithubResponseError());
    }
    res.status(500).send(isAKnownError(error) ? error : new UnknownError());
  } finally {
    if (htmlFileRef) htmlFileRef.delete();
  }
}
