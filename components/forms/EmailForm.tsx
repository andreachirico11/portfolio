import React from 'react';
import Environments from '../../environments';
import { Checkbox, FormState, Input, MyForm, Textarea, Validators } from '../../myForm';
import { Anchor } from '../utils/Anchor';

interface Props {
  onSubmit: (formState: FormState) => void;
}

export const EmailForm: React.FC<Props> = ({ onSubmit }) => {
  return (
    <MyForm
      title='Contact Me!'
      buttonLabel='Send!'
      className='left'
      config={{
        name: {
          initialvalue: '',
          validators: [
            Validators.required('Required Field'),
            Validators.minLenght(4, 'The name is too short'),
          ],
        },
        email: {
          initialvalue: '',
          validators: [
            Validators.required('Required Field'),
            Validators.email('The mail format is invalid'),
          ],
        },
        message: {
          initialvalue: '',
          validators: [
            Validators.required('Required Field'),
            Validators.minLenght(20, 'Please write something more!'),
          ],
        },
        privacy: { initialvalue: false, validators: [Validators.required('Required Field')] },
      }}
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
