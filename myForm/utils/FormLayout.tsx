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
  className,
  ...formProps
}) => {
  const getWholeState = useFormContextMaster();
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(getWholeState());
  };
  return (
    <form {...formProps} className={`w-3/4 max-w-xl lg:w-96 ${className}`} onSubmit={submit}>
      <h4 className='text-xl text-center mb-7 font-code text-custom-yellow sm:text-3xl md:text-4xl'>
        {title}
      </h4>
      {children}
      <SubmitButton
        useFormContextInvalidState={useFormContextInvalidState}
        buttonLabel={buttonLabel}
      />
    </form>
  );
};
