import { ChangeEvent, createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { FormState, HtmlInputs, UseFormContextFieldType, UseFormStateType } from '../types';
import useFormState from './useFormState';

const isACheckBox = (element: HtmlInputs): element is HTMLInputElement =>
  element.type.toLowerCase() === 'checkbox';

export default function createFormContext(formState: FormState) {
  const FormContext = createContext<UseFormStateType | null>(null);

  const Provider = ({ children }: { children: ReactNode }) => {
    return <FormContext.Provider value={useFormState(formState)}>{children}</FormContext.Provider>;
  };

  const useFormContextField = (fieldName: string): UseFormContextFieldType => {
    const formState = useContext(FormContext);

    if (!formState) {
      throw new Error('no state');
    }

    const [value, setValue] = useState(formState.get(fieldName));

    const onChange = (event: ChangeEvent<HtmlInputs>) => {
      formState.set(
        fieldName,
        isACheckBox(event.target) ? event.target.checked : event.target.value
      );
    };

    useEffect(() => {
      return formState.subscribe(fieldName, () => {
        setValue(formState.get(fieldName));
      });
    }, []);

    return [value, onChange];
  };

  const useFormContextMaster = () => {
    const formState = useContext(FormContext);
    return formState!.getWhole;
  };

  return { Provider, useFormContextField, useFormContextMaster };
}
