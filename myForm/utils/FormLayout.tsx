import { FC, FormEvent } from 'react';
import { FormProps } from '../types';
import { SubmitButton } from './SubmitButton';

interface Props extends FormProps {}

export const FormLayout: FC<Props> = ({
  children,
  title,
  buttonLabel,
  useFormContextMaster,
  useFormContextInvalidState,
  onSubmit,
  className = '',
  ...formProps
}) => {
  const getWholeState = useFormContextMaster();
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(getWholeState());
  };
  return (
    <form {...formProps} className={`grid ${className}`} onSubmit={submit}>
      <h4 className='mb-2 h4'>{title}</h4>
      {children}
      <SubmitButton
        useFormContextInvalidState={useFormContextInvalidState}
        buttonLabel={buttonLabel}
      />
    </form>
  );
};
