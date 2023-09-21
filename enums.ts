export enum Sections {
  intro = 'intro',
  works = 'works',
  about = 'about',
  contacts = 'contacts',
}

export enum AvailableColors {
  'gray' = 'gray',
  'goodGreen' = 'goodGreen',
  'white' = 'white',
}

export enum ErrorTypes {
  WRONG_TOKEN,
  CORRUPTED_FILE,
  MISSING_DATA,
  EMAIL_API,
  SENDGRID,
  UNAUTHORIZED,
  GITHUB,
  UNKWNOWN,
  CHEERIO,
  PARSING,
  HTML_CREATION,
  MISSING_ENV,
  PUPPETTEER_LAUNCH,
  LOCAL_FETCHING
}

export enum AnimationType {
  down = 'down',
  left = 'left',
  right = 'right',
  off = 'off',
}

export enum ModalTypes {
  info = 'info',
  error = 'error',
  multipleChoice = 'multipleChoice'
}
