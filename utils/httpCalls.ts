import Environments from '../environments';

export async function sendMail(name: string, email: string, message: string, policy: boolean) {
  try {
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
  } catch (e) {
    throw new Error();
  }
}
