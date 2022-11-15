export default class Environments {
  static get IUBENDA_URL() {
    return process.env.NEXT_PUBLIC_IUBENDA_URL || '';
  }
}
