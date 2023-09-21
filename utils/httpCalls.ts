import { HttpErrorResponse } from '../types';

export async function sendMail(name: string, email: string, message: string, policy: boolean) {
  const res = await fetch('api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, message, policy }),
  });
  if (!res.ok) {
    throw (await res.json()) as HttpErrorResponse;
  }
}


export async function fetchCv(locale: string, token?: string) {
  const res = await fetch('api/cv', { headers: {locale, ...token && {token} } });
  if (!res.ok) {
    throw (await res.json()) as HttpErrorResponse;
  }
  return res.blob();
}
