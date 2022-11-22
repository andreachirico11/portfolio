import { ChangeEvent, ReactNode } from 'react';
import useFormState from './state/useFormState';

export type HtmlInputs = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export type FormState = {
  [key: string]: any;
};

export type UseFormContextFieldType = [any, (event: ChangeEvent<HtmlInputs>) => void];

export type UseFormContextMasterType = () => () => FormState;

export type Subscriber = () => void;

export type UseFormStateType = ReturnType<typeof useFormState>;

export interface FormProps extends Omit<React.ComponentPropsWithoutRef<'form'>, 'onSubmit'> {
  children: ReactNode;
  title: string;
  buttonLabel: string;
  onSubmit: (formState: FormState) => void;
  useFormContextMaster: UseFormContextMasterType;
  classes?: string;
}

export interface FormFieldBaseProps {
  name: string;
  useFormContext?: (fieldName: string) => UseFormContextFieldType;
}
