import * as sgMail from '@sendgrid/mail';
import { EmailError, MissingEnvironmentError, SengridError } from '../types/errors';
import { IEmail } from '../types/IEmail';
import { generateDownloadedCvNotification, generateEmailmessage } from './generateEmailMessage';

class _SendgridUtil {
  private constructor(apikey: string, private personalMail: string, private personalTransportMail: string) {
    if (!!!apikey || !!! personalMail || !!!personalTransportMail) {
      throw new MissingEnvironmentError(null);
    }
    sgMail.setApiKey(apikey);
  }

  static configure(apikey: string,  personalMail: string,  personalTransportMail: string) {
    return new _SendgridUtil(apikey, personalMail,personalTransportMail);
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

export default _SendgridUtil;

