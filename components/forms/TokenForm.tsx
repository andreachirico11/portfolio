import React, { useState } from 'react';
import { Form } from './Form';
import { Input } from './controls/Input';

interface Props {}

export const TokenForm: React.FC<Props> = () => {
  const [passCode, setPasscode] = useState('');
  const onChange = (_: string, value: string) => {
    setPasscode(value);
  };

  return (
    <Form title='Ask for my Resume!' buttonLabel='Download!' className='right'>
      <Input onChange={onChange} placeholder='Passcode' name='passcode' />
    </Form>
  );
};
