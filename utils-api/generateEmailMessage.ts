import { IEmail } from '../types/IEmail';

export function generateEmailmessage({ name, email, message }: IEmail, to: string, from: string) {
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

export function generateDownloadedCvNotification(to: string, from: string) {
  return {
    to,
    from,
    subject: 'Someone downloaded your cv',
    html: '<body></body>',
  };
}
