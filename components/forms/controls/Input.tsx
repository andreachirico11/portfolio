import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'input'> {}

export const Input: React.FC<Props> = (props) => (
  <input
    {...props}
    className='w-full px-3 py-2 mb-5 text-xs bg-transparent border outline-none sm:text-sm md:text-base border-custom-grey font-os text-custom-white placeholder-custom-grey rounded-custom'
  />
);
