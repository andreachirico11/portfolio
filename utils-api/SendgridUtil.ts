import * as sgMail from '@sendgrid/mail';
import Environments from '../environments';
import { EmailError, MissingEnvironmentError, SengridError } from '../types/errors';
import { IEmail } from '../types/IEmail';
import { generateDownloadedCvNotification, generateEmailmessage } from './generateEmailMessage';

class _SendgridUtil {
  constructor(apikey: string, private personalMail: string, private personalTransportMail: string) {
    if (!apikey || !personalMail || !personalTransportMail) {
      throw new MissingEnvironmentError(null);
    }
    sgMail.setApiKey(apikey);
  }

  async sendEmail(body: IEmail) {
    const [response] = await sgMail.send(
      generateEmailmessage(body, this.personalMail, this.personalTransportMail)
    );
    if (response.statusCode !== 202) {
      throw new EmailError(response);
    }
  }

  async sendCvDownloadNotification() {
    let sentWithError = false;
    try {
      const [response] = await sgMail.send(
        generateDownloadedCvNotification(this.personalMail, this.personalTransportMail)
      );
      if (response.statusCode !== 202) {
        sentWithError = true;
        throw '';
      }
      return response;
    } catch (error) {
      if (sentWithError) {
        throw new SengridError(null);
      }
    }
  }
}

export default new _SendgridUtil(
  Environments.SENDGRID_API_KEY,
  Environments.PERSONAL_MAIL,
  Environments.PERSONAL_TRANSPORT_MAIL
);
