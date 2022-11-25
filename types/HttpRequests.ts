import { NextApiRequest } from 'next';
import { IEmail } from './IEmail';

export interface EmailRequest extends NextApiRequest {
  body: IEmail;
}
