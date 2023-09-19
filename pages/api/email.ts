import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { EmailRequest, HttpErrorResponse } from '../../types';
import { EmailError, MissingDataError, UnknownError } from '../../types/errors';
import { errorLogger, log, spacer } from '../../utils-api';
import { isAKnownError, isEmailValid } from '../../utils';
import sendgrid from '../../utils-api/SendgridUtil';

export default async function handler(
  req: EmailRequest,
  res: NextApiResponse<HttpErrorResponse | {}>
) {
  const { SENDGRID_API_KEY, PERSONAL_MAIL, PERSONAL_TRANSPORT_MAIL } = Environments;

  spacer();

  const { name, email, message, policy } = req.body;
  let errorStatusCode = 500;
  try {
    const sendgridUtil = sendgrid.configure(
      SENDGRID_API_KEY,
      PERSONAL_MAIL,
      PERSONAL_TRANSPORT_MAIL
    );

    if (!name || !email || !message || !policy || !isEmailValid(email)) {
      errorStatusCode = 403;
      throw new MissingDataError(null);
    }
    log('Seding message trought sendgrid');

    await sendgridUtil.sendEmail(req.body);
    log('Message sent succesfully!');

    res.status(200).end();
  } catch (error) {
    const content = `Please contact me at the following adress: ${PERSONAL_MAIL}`;
    const parsed = isAKnownError(error) ? error : new EmailError(error);
    errorLogger(parsed);
    res.status(parsed.errCode);
    res.send({ errCode: parsed.type, content });
  }
}
