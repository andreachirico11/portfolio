import React from 'react';
import { Form } from '../utils/Form';
import { Input } from '../utils/Input';
import { Textarea } from '../utils/Textarea';
import { Checkbox } from '../sections/Checkbox';

interface Props {}

export const EmailForm: React.FC<Props> = () => (
  <Form title='Contact Me!' buttonLabel='Send!' className='left'>
    <Input placeholder='Your Name' name='name' />
    <Input type='email' placeholder='Your Email' name='email' />
    <Textarea name='message' placeholder='Your Message' />
    <Checkbox name='privacy'>
      <a
        href='https://www.iubenda.com/privacy-policy/59878709'
        className='text-xs tracking-widest text-center iubenda-white iubenda-noiframe iubenda-embed sm:text-sm font-os text-custom-grey focus:outline-none hover:text-custom-yellow focus:text-custom-yellow '
        title='Privacy Policy '
      >
        Accept Privacy Policy
      </a>
    </Checkbox>
  </Form>
);
