import React from 'react';
import { Form } from './Form';
import { Input } from './controls/Input';

interface Props {}

export const TokenForm: React.FC<Props> = () => (
  <Form title='Ask for my Resume!' buttonLabel='Download!' className='right'>
    <Input type='text' placeholder='Passcode' name='passcode' id='token' />
  </Form>
);
