import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { EmailRequest, HttpErrorResponse } from '../../types';
import { ErrorTypes, MissingDataError, UnknownError } from '../../types/errors';
import * as sgMail from '@sendgrid/mail';
import { errorLogger, generateEmailmessage, log } from '../../utils-api';
import { isAKnownError, isEmailValid } from '../../utils';

sgMail.setApiKey(Environments.SENDGRID_API_KEY);

export default async function handler(
  req: EmailRequest,
  res: NextApiResponse<HttpErrorResponse | {}>
) {
  const { name, email, message, policy } = req.body;
  let errorStatusCode = 500;
  try {
    if (!name || !email || !message || !policy || !isEmailValid(email)) {
      errorStatusCode = 403;
      throw new MissingDataError(null);
    }

    log('Seding message trought sendgrid');
    const [response] = await sgMail.send(
      generateEmailmessage(
        req.body,
        Environments.PERSONAL_MAIL,
        Environments.PERSONAL_TRANSPORT_MAIL
      )
    );

    if (response.statusCode !== 202) {
      log('Badly sent message');
      throw response;
    }
    log('Message sent succesfully!');

    res.status(200).end();
  } catch (error) {
    res.status(errorStatusCode);
    const content = `Please contact me at the following adress: ${Environments.PERSONAL_MAIL}`;
    if (isAKnownError(error)) {
      errorLogger(error);
      res.send({ errCode: error.type, content });
    } else {
      errorLogger(new UnknownError(error));
      res.send({ errCode: ErrorTypes.EMAIL_API, content });
    }
  }
}
