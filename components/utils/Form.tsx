import React, { ReactNode } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'form'> {
  children: ReactNode;
  title: string;
  buttonLabel: string;
}

export const Form: React.FC<Props> = ({
  children,
  className,
  title,
  buttonLabel,
  ...formProps
}) => (
  <form className={`w-3/4 max-w-xl mb-28 lg:w-96 ${className}`} {...formProps}>
    <h4 className='text-xl text-center mb-7 font-code text-custom-yellow sm:text-3xl md:text-4xl'>
      {title}
    </h4>
    {children}
    <button
      type='button'
      className='w-full px-3 py-2 text-sm text-center transition duration-300 ease-in-out focus:outline-none hover:tracking-widest focus:tracking-widest sm:text-lg md:text-xl font-code text-custom-red bg-custom-grey rounded-custom'
    >
      {buttonLabel}
    </button>
  </form>
);
