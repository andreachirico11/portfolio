import type { NextApiResponse } from 'next';
import Environments from '../../environments';
import { EmailRequest } from '../../types';
import { EmailError, MissingDataError } from '../../types/errors';
import * as sgMail from '@sendgrid/mail';
import { IEmail } from '../../types/IEmail';

sgMail.setApiKey(Environments.SENDGRID_API_KEY);

export default async function handler(req: EmailRequest, res: NextApiResponse<EmailError | {}>) {
  const { name, email, message, policy } = req.body;
  if (!name || !email || !message || !policy || !isEmailValid(email)) {
    res.status(403).send(new MissingDataError());
  }
  try {
    const [response] = await sgMail.send(
      emailMessageCreator(
        req.body,
        Environments.PERSONAL_TRANSPORT_MAIL,
        Environments.PERSONAL_MAIL
      )
    );
    if (response.statusCode === 202) {
      return res.status(200).end();
    }
    throw response;
  } catch (error) {
    res
      .status(500)
      .send(
        new EmailError(
          !!Environments.PERSONAL_MAIL
            ? `Please contact me at the following adress: ${Environments.PERSONAL_MAIL}`
            : undefined
        )
      );
  }
}

function isEmailValid(email: string) {
  const emailReg = new RegExp(
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
  );
  return emailReg.test(email);
}
function emailMessageCreator(
  body: IEmail,
  PERSONAL_TRANSPORT_MAIL: string,
  PERSONAL_MAIL: string
): sgMail.MailDataRequired | sgMail.MailDataRequired[] {
  throw new Error('Function not implemented.');
}
