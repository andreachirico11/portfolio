import { FormConfig, FormState } from '../types';

export function formStateBuilder(config: FormConfig): FormState {
  const keys = Object.keys(config);
  const output: FormState = {};
  keys.forEach((k) => {
    output[k] = {
      value: config[k].initialvalue,
      errors: [],
      isOnError: true,
      touched: false,
    };
  });
  return output;
}
