import { FC } from 'react';
import { FormState, MyForm, Input } from '../../myForm';

interface Props {}

export const TokenForm: FC<Props> = () => {
  const onSubmit = (formState: FormState) => {
    console.log(formState);
  };

  return (
    <MyForm
      title='Ask for my Resume!'
      buttonLabel='Download!'
      className='right'
      formState={{ passcode: '' }}
      onSubmit={onSubmit}
    >
      <Input placeholder='Passcode' name='passcode' />
    </MyForm>
  );
};
