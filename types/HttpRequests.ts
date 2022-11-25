import { IncomingHttpHeaders } from 'http';
import { NextApiRequest } from 'next';
import { IEmail } from './IEmail';

export interface EmailRequest extends NextApiRequest {
  body: IEmail;
}

interface TokenHeaders extends IncomingHttpHeaders {
  token: string;
}

export interface CvRequest extends NextApiRequest {
  headers: TokenHeaders;
}
