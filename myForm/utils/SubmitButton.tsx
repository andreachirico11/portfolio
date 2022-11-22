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
    w-full px-3 py-2 text-sm text-center 
    transition duration-300 ease-in-out 
    enabled:focus:outline-none enabled:hover:tracking-widest enabled:focus:tracking-widest 
    sm:text-lg md:text-xl font-code text-custom-red 
    bg-custom-grey rounded-custom
    disabled:opacity-50
    `}
    >
      {buttonLabel}
    </button>
  );
};
