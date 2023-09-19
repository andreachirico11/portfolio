function booleanValue(value: string | undefined) {
  return value === '1';
}

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
  static get CV_BRANCH() {
    return process.env.CV_BRANCH || '';
  }
  static get GITHUB_TOKEN() {
    return process.env.GITHUB_TOKEN || '';
  }
  static get LOCAL_CV_PATH() {
    return process.env.LOCAL_CV_PATH || '';
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
  // SETTINGS
  static get PRODUCTION() {
    return  booleanValue(process.env.PRODUCTION);
  }
  static get ERROR_LOGS_OFF() {
    return booleanValue(process.env.ERROR_LOGS_OFF);
  }
  static get INFO_LOGS_OFF() {
    return booleanValue(process.env.INFO_LOGS_OFF);
  }
  static get PROTECTED_CV() {
    return booleanValue(process.env.PROTECTED_CV);
  }
  static get DOWNLOAD_NOTIFICATION() {
    return booleanValue(process.env.PROTECTED_CV);
  }
}
