import { ErrorTypes } from '../enums';

export interface HttpErrorResponse {
  errCode: ErrorTypes;
  content?: string;
}
