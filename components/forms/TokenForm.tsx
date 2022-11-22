import { FC } from 'react';
import { FormState, MyForm, Input, Validators } from '../../myForm';

interface Props {
  onSubmit: (formState: FormState) => void;
}

export const TokenForm: FC<Props> = ({ onSubmit }) => {
  return (
    <MyForm
      title='Ask for my Resume!'
      buttonLabel='Download!'
      className='mb-28'
      config={{
        passcode: { initialvalue: '', validators: [Validators.required('Password is Required')] },
      }}
      onSubmit={onSubmit}
    >
      <Input placeholder='Passcode' name='passcode' />
    </MyForm>
  );
};
