import React from 'react';
import { useShowAnimationContext } from '../../context/ShowAnimationContext';
import { AnimationType } from '../../enums';
import Environments from '../../environments';
import { Checkbox, FormState, Input, MyForm, Textarea, Validators } from '../../myForm';

interface Props {
  onSubmit: (formState: FormState) => void;
  className?: string;
}

export const EmailForm: React.FC<Props> = ({ onSubmit, className = '' }) => {
  const animationRef = useShowAnimationContext<HTMLDivElement>(AnimationType.left);
  return (
    <div className={className} ref={animationRef}>
      <MyForm
        title='Contact Me!'
        buttonLabel='Send'
        config={{
          name: {
            initialvalue: '',
            validators: [
              Validators.required('The Field is Required'),
              Validators.minLenght(2, 'The name is too short'),
            ],
          },
          email: {
            initialvalue: '',
            validators: [
              Validators.required('The Field is Required'),
              Validators.email('The mail format is invalid'),
            ],
          },
          message: {
            initialvalue: '',
            validators: [Validators.required('The Field is Required')],
          },
          privacy: { initialvalue: false, validators: [Validators.required('Required Field')] },
        }}
        onSubmit={onSubmit}
      >
        <Input label='Name' name='name' />
        <Input type='email' label='Email' name='email' />
        <Textarea name='message' label='Message' />
        <Checkbox name='privacy'>
          <a tabIndex={-1} href={Environments.IUBENDA_URL} className='p-m hover:text-goodGreen'>
            Accept Privacy Policy
          </a>
        </Checkbox>
      </MyForm>
    </div>
  );
};
