import { IEmail } from '../types/IEmail';

export function emailMessageCreator({ name, email, message }: IEmail, from: string, to: string) {
  return {
    to,
    from,
    subject: 'Someone wrote from your portfolio',
    html: `
        <div><h1>Name: ${name}</h1></div>
        <br>
        <div><h3>Email: ${email}</h3></div>
        <br>
        <div><p>${message}</p></div>
        `,
  };
}
