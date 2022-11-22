import { Validator } from '../types';

export default function _(minLength: number, message: string): Validator {
  return (value: any) =>
    !!!value || typeof value !== 'string' ? null : value.length >= minLength ? null : message;
}
