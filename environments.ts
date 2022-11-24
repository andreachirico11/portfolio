export default class Environments {
  static get IUBENDA_URL() {
    return process.env.NEXT_PUBLIC_IUBENDA_URL || '';
  }
  static get OWNER_MAIL() {
    return process.env.NEXT_PUBLIC_OWNER_MAIL || '';
  }
  static get API_URL() {
    return process.env.NEXT_PUBLIC_API_URL || '';
  }
}
