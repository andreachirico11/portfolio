import React from 'react';
import { Form } from '../utils/Form';
import { Input } from '../utils/Input';

interface Props {}

export const TokenForm: React.FC<Props> = () => (
  <Form title='Ask for my Resume!' buttonLabel='Download!' className='right'>
    <Input type='text' placeholder='Passcode' name='passcode' id='token' />
  </Form>
);
