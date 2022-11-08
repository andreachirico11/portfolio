export default class Ennvironments {
  static get IUBENDA_URL() {
    return process.env.NEXT_PUBLIC_IUBENDA_URL || '';
  }
}
