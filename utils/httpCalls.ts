import { EmailErrorResponse } from '../types';
import { BaseError } from '../types/errors';

export async function sendMail(name: string, email: string, message: string, policy: boolean) {
  const res = await fetch('api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message, policy }),
  });
  if (!res.ok) {
    throw (await res.json()) as EmailErrorResponse;
  }
}

export async function fetchFile(token: string) {
  const res = await fetch('api/cv', { headers: { token } });
  if (!res.ok) {
    throw (await res.json()) as BaseError;
  }
  return res.blob();
}
