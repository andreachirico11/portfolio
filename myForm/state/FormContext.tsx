import { ChangeEvent, createContext, ReactNode, useContext, useEffect, useState } from 'react';
import {
  ControlState,
  FormState,
  HtmlInputs,
  UseFormContextFieldType,
  UseFormStateType,
  Validator,
} from '../types';
import useFormState from './useFormState';

const isACheckBox = (element: HtmlInputs): element is HTMLInputElement =>
  element.type.toLowerCase() === 'checkbox';

export default function createFormContext(formState: FormState) {
  const FormContext = createContext<UseFormStateType | null>(null);

  const Provider = ({ children }: { children: ReactNode }) => {
    return <FormContext.Provider value={useFormState(formState)}>{children}</FormContext.Provider>;
  };

  const useFormContextField = (
    fieldName: string,
    initialState: ControlState,
    validators: Validator[] = []
  ): UseFormContextFieldType => {
    const formState = useContext(FormContext);

    if (!formState) {
      throw new Error('no state');
    }

    const [controlState, setValue] = useState<ControlState>(initialState);

    const onChange = (event: ChangeEvent<HtmlInputs>) => {
      const value = isACheckBox(event.target) ? event.target.checked : event.target.value;
      let errors: string[] = [];
      if (validators.length) {
        validators.forEach((v) => {
          const error = v(value);
          if (error) {
            errors.push(error);
          }
        });
      }
      formState.set(fieldName, { errors, value, isOnError: errors.length > 0, touched: true });
    };

    useEffect(() => {
      return formState.subscribe(fieldName, initialState, () => {
        setValue(formState.get(fieldName));
      });
    }, []);

    return [controlState, onChange];
  };

  const useFormContextMaster = () => {
    const formState = useContext(FormContext);
    return formState!.getWhole;
  };

  const useFormContextInvalidState = () => {
    const formState = useContext(FormContext);
    if (!formState) {
      throw new Error('no state');
    }
    const [isFormInvalid, setIsFormInvalid] = useState(true);
    useEffect(() => {
      return formState.subscribeToInvalidity(() => {
        setIsFormInvalid(formState.isFormInvalid);
      });
    }, []);
    return isFormInvalid;
  };

  return { Provider, useFormContextField, useFormContextMaster, useFormContextInvalidState };
}
