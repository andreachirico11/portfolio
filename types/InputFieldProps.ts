import { ComponentPropsWithoutRef } from 'react';

interface WithCustomOnChange {
  onChange: (name: string, value: any) => void;
}

export interface InputFieldProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange'>,
    WithCustomOnChange {}

export interface TextareaFieldProps
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange'>,
    WithCustomOnChange {}
