import { ChangeEvent, ReactNode } from 'react';
import useFormState from './state/useFormState';

export type HtmlInputs = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export type FormState = {
  [key: string]: ControlState;
};

export type ControlState = {
  value: any;
  isOnError: boolean;
  errors: string[];
};

export type UseFormContextFieldType = [ControlState, (event: ChangeEvent<HtmlInputs>) => void];

export type UseFormContextMasterType = () => () => FormState;

export type Subscriber = () => void;

export type UseFormStateType = ReturnType<typeof useFormState>;

export interface FormProps extends Omit<React.ComponentPropsWithoutRef<'form'>, 'onSubmit'> {
  children: ReactNode;
  title: string;
  buttonLabel: string;
  onSubmit: (formState: FormState) => void;
  useFormContextMaster: UseFormContextMasterType;
  useFormContextInvalidState: () => boolean;
}

export interface FormFieldBaseProps {
  name: string;
  initialState?: ControlState;
  validators?: Validator[];
  useFormContext?: (
    fieldName: string,
    initialState: ControlState,
    validators?: Validator[]
  ) => UseFormContextFieldType;
}

export type Validator = (value: any) => string | null;

export interface FormConfig {
  [key: string]: {
    initialvalue?: any;
    validators: Validator[];
  };
}

export class WrongTokenError extends Error {}

export class CorruptedFileError extends Error {}
