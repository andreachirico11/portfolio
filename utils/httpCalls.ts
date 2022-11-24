import Environments from '../environments';
import { WrongTokenError } from '../myForm';

export async function sendMail(name: string, email: string, message: string, policy: boolean) {
  const res = await fetch(Environments.API_URL + '/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message, policy }),
  });
  if (res.status === 202) {
    return;
  }
  throw new Error();
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
