import { Validator } from '../types';

export default function _(message: string): Validator {
  return (value: any) => (!!!value ? message : null);
}
