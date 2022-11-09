import React, { ChangeEvent, useEffect, useState } from 'react';
import { Form } from './Form';
import { Input } from './controls/Input';
import { Textarea } from './controls/Textarea';
import { Checkbox } from './controls/Checkbox';
import Ennvironments from '../../environments';

interface Props {}

export const EmailForm: React.FC<Props> = () => {
  const [formState, setFormState] = useState({
    privacy: false,
  });
  const onChange = (name: string, value: any) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form title='Contact Me!' buttonLabel='Send!' className='left'>
      <Input placeholder='Your Name' name='name' onChange={onChange} />
      <Input type='email' placeholder='Your Email' name='email' onChange={onChange} />
      <Textarea name='message' placeholder='Your Message' onChange={onChange} />
      <Checkbox name='privacy' onChange={onChange} value={formState.privacy}>
        <a
          href={Ennvironments.IUBENDA_URL}
          className='text-xs tracking-widest text-center iubenda-white iubenda-noiframe iubenda-embed sm:text-sm font-os text-custom-grey focus:outline-none hover:text-custom-yellow focus:text-custom-yellow '
          title='Privacy Policy '
        >
          Accept Privacy Policy
        </a>
      </Checkbox>
    </Form>
  );
};
