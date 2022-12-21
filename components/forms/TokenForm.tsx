import { FC } from 'react';
import { useShowAnimationContext } from '../../context/ShowAnimationContext';
import { AnimationType } from '../../enums';
import { FormState, MyForm, Input, Validators } from '../../myForm';

interface Props {
  onSubmit: (formState: FormState) => void;
}

export const TokenForm: FC<Props> = ({ onSubmit }) => {
  const animationRef = useShowAnimationContext<HTMLDivElement>(AnimationType.right);
  return (
    <div className='w-3/4 max-w-xl lg:w-96' ref={animationRef}>
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
    </div>
  );
};
