import { EmailError } from './errors';

export interface ErrorResponse {
  error: Error;
}

export interface EmailErrorResponse extends ErrorResponse {
  error: EmailError;
}
