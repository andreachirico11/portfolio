import { FC } from 'react';

interface Props {
  buttonLabel: string;
  useFormContextInvalidState: () => boolean;
}

export const SubmitButton: FC<Props> = ({ buttonLabel, useFormContextInvalidState }) => {
  const isFormInvalid = useFormContextInvalidState();
  return (
    <button
      type='submit'
      disabled={isFormInvalid}
      className={`
      py-1 text-center btn-text text-gray
      px-4 rounded-custom bg-white w-fit 

      transition duration-300 ease-in-out 
      
      enabled:focus:outline-none
      enabled:hover:tracking-widest 
      enabled:focus:tracking-widest

      disabled:opacity-50
    `}
    >
      {buttonLabel}
    </button>
  );
};
