import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { EmailRequest, HttpErrorResponse } from '../../types';
import { MissingDataError, UnknownError } from '../../types/errors';
import { errorLogger, log } from '../../utils-api';
import { isAKnownError, isEmailValid } from '../../utils';
import { ErrorTypes } from '../../enums';
import sendgrid from '../../utils-api/SendgridUtil';

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

    await sendgrid.sendEmail(req.body);
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
