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
      ${isFormInvalid ? '' : 'animated-btn'}
      py-1 text-center btn-text text-gray
      px-4 rounded-custom bg-white w-fit
      tablet:px-8 
      disabled:opacity-50
    `}
    >
      {buttonLabel}
    </button>
  );
};
