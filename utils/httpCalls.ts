import Environments from '../environments';
import { EmailErrorResponse } from '../types';
import { WrongTokenError } from '../types/errors';

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
  const res = await fetch(Environments.API_URL + '/cv', { headers: { token } });
  if (res.status === 401) {
    throw new WrongTokenError();
  }
  if (res.status !== 200) {
    throw new Error();
  }
  return res.blob();
}
