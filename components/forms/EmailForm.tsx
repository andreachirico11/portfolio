import React from 'react';
import Environments from '../../environments';
import { Checkbox, FormState, Input, MyForm, Textarea } from '../../myForm';
import { Anchor } from '../utils/Anchor';

interface Props {}

export const EmailForm: React.FC<Props> = () => {
  const onSubmit = (formState: FormState) => {
    console.log(formState);
  };

  return (
    <MyForm
      title='Contact Me!'
      buttonLabel='Send!'
      className='left'
      formState={{ name: '', email: '', message: '', privacy: false }}
      onSubmit={onSubmit}
    >
      <Input placeholder='Your Name' name='name' />
      <Input type='email' placeholder='Your Email' name='email' />
      <Textarea name='message' placeholder='Your Message' />
      <Checkbox name='privacy'>
        <Anchor href={Environments.IUBENDA_URL} title='Privacy Policy '>
          Accept Privacy Policy
        </Anchor>
      </Checkbox>
    </MyForm>
  );
};
