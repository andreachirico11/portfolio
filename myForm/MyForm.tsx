import React, { Children, cloneElement, isValidElement, ReactElement } from 'react';
import createFormContext from './state/FormContext';
import { FormLayout } from './utils/FormLayout';
import { FormFieldBaseProps, FormProps, FormState } from './types';
import formGuard from './utils/formGuard';

interface Props extends Omit<FormProps, 'children' | 'useFormContextMaster'> {
  children: ReactElement<FormFieldBaseProps> | ReactElement<FormFieldBaseProps>[];
  formState: FormState;
}

export const MyForm: React.FC<Props> = ({ children, formState, ...formProps }) => {
  formGuard(children);
  const {
    Provider,
    useFormContextField: useFormContext,
    useFormContextMaster,
  } = createFormContext(formState);

  const overridenChildren = Children.map(children, (child) =>
    cloneElement(child, { useFormContext })
  );
  return (
    <Provider>
      <FormLayout {...formProps} useFormContextMaster={useFormContextMaster}>
        {overridenChildren}
      </FormLayout>
    </Provider>
  );
};
