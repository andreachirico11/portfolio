import { Validator } from '../types';

const emailReg = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$');

export default function _(message: string): Validator {
  return (value: any) =>
    !!!value || typeof value !== 'string' ? null : emailReg.test(value) ? null : message;
}
