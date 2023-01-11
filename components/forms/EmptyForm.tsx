import { FC, FormEvent } from 'react';

interface Props {
  onSubmit: () => void;
  className?: string;
}

export const EmptyForm: FC<Props> = ({ onSubmit, className = '' }) => {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className={className}>
      <form onSubmit={submit}>
        <h4 className='mb-4 h4'>Interested?</h4>
        <button
          type='submit'
          className={`
          py-2 text-center btn-text text-gray
          px-2 rounded-custom bg-white 
          tablet:px-8 
          animated-btn
      `}
        >
          Download My Resume
        </button>
      </form>
    </div>
  );
};
