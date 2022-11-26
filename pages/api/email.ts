import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { EmailRequest } from '../../types';
import { EmailError, MissingDataError, UnknownError } from '../../types/errors';
import * as sgMail from '@sendgrid/mail';
import { errorLogger, generateEmailmessage, isEmailValid } from '../../utils-api';
import { isAKnownError } from '../../utils';

sgMail.setApiKey(Environments.SENDGRID_API_KEY);

export default async function handler(req: EmailRequest, res: NextApiResponse<EmailError | {}>) {
  const { name, email, message, policy } = req.body;
  let errorStatusCode = 500;
  try {
    if (!name || !email || !message || !policy || !isEmailValid(email)) {
      errorStatusCode = 403;
      throw new MissingDataError();
    }
    const [response] = await sgMail.send(
      generateEmailmessage(
        req.body,
        Environments.PERSONAL_MAIL,
        Environments.PERSONAL_TRANSPORT_MAIL
      )
    );
    if (response.statusCode !== 202) {
      throw new EmailError(
        !!Environments.PERSONAL_MAIL
          ? `Please contact me at the following adress: ${Environments.PERSONAL_MAIL}`
          : undefined
      );
    }
    return res.status(200).end();
  } catch (error) {
    res.status(errorStatusCode);
    if (isAKnownError(error)) {
      errorLogger(error);
      res.send(error);
    } else {
      errorLogger(new UnknownError(), error);
      res.send(new UnknownError());
    }
  }
}
