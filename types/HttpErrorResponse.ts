import { ErrorTypes } from './errors';

export interface HttpErrorResponse {
  errCode: ErrorTypes;
  content?: string;
}
