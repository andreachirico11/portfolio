export default class Environments {
  static get IUBENDA_URL() {
    return process.env.NEXT_PUBLIC_IUBENDA_URL || '';
  }
  static get CV_TITLE() {
    return process.env.NEXT_PUBLIC_CV_TITLE || '';
  }
  static get FILE_URL() {
    return process.env.FILE_URL || '';
  }
  static get GITHUB_TOKEN() {
    return process.env.GITHUB_TOKEN || '';
  }
  static get TOKEN() {
    return process.env.TOKEN || '';
  }
  static get SENDGRID_API_KEY() {
    return process.env.SENDGRID_API_KEY || '';
  }
  static get PERSONAL_MAIL() {
    return process.env.PERSONAL_MAIL || '';
  }
  static get PERSONAL_TRANSPORT_MAIL() {
    return process.env.PERSONAL_TRANSPORT_MAIL || '';
  }
  static get PRODUCTION() {
    return process.env.PRODUCTION || false;
  }
  static get KEEP_FILE() {
    return process.env.KEEP_FILE || false;
  }
  static get ERROR_LOGS_OFF() {
    return process.env.ERROR_LOGS_OFF || false;
  }
  static get INFO_LOGS_OFF() {
    return process.env.INFO_LOGS_OFF || false;
  }
}