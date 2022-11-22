import React, { Children, cloneElement, ReactElement } from 'react';
import createFormContext from './state/FormContext';
import { FormLayout } from './utils/FormLayout';
import { FormConfig, FormFieldBaseProps, FormProps } from './types';
import formGuard from './utils/formGuard';
import { formStateBuilder } from './utils/formBuilder';

interface Props
  extends Omit<FormProps, 'children' | 'useFormContextMaster' | 'useFormContextInvalidState'> {
  children: ReactElement<FormFieldBaseProps> | ReactElement<FormFieldBaseProps>[];
  config: FormConfig;
}

export const MyForm: React.FC<Props> = ({ children, config, ...formProps }) => {
  formGuard(children);
  const formState = formStateBuilder(config);
  const {
    Provider,
    useFormContextField: useFormContext,
    useFormContextMaster,
    useFormContextInvalidState,
  } = createFormContext(formState);

  const overridenChildren = Children.map(children, (child) => {
    const name = child.props.name;
    return cloneElement(child, {
      useFormContext,
      initialState: formState[name],
      validators: config[name].validators,
    });
  });
  return (
    <Provider>
      <FormLayout
        {...formProps}
        useFormContextMaster={useFormContextMaster}
        useFormContextInvalidState={useFormContextInvalidState}
      >
        {overridenChildren}
      </FormLayout>
    </Provider>
  );
};
