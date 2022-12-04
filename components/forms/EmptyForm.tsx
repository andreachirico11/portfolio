import { FC, FormEvent } from 'react';
import { useShowAnimationContext } from '../../context/ShowAnimationContext';
import { AnimationType } from '../../types';

interface Props {
  onSubmit: () => void;
}

export const EmptyForm: FC<Props> = ({ onSubmit }) => {
  const animationRef = useShowAnimationContext<HTMLDivElement>(AnimationType.right);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className='w-3/4 max-w-xl lg:w-96' ref={animationRef}>
      <form className='w-100' onSubmit={submit}>
        <h4 className='text-xl text-center mb-7 font-code text-custom-yellow sm:text-3xl md:text-4xl'>
          Ask for my Resume!
        </h4>
        <button
          type='submit'
          className={`
    w-full px-3 py-2 text-sm text-center 
    transition duration-300 ease-in-out 
    enabled:focus:outline-none enabled:hover:tracking-widest enabled:focus:tracking-widest 
    sm:text-lg md:text-xl font-code text-custom-red 
    bg-custom-grey rounded-custom
    disabled:opacity-50
    `}
        >
          Download!!!
        </button>
      </form>
    </div>
  );
};
