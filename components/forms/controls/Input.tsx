import React, { ChangeEvent, FC, ReactNode } from 'react';
import { InputFieldProps } from '../../../types';

interface Props extends InputFieldProps {}

export const Input: FC<Props> = ({ onChange, ...props }) => {
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <input
      onChange={onValueChange}
      {...props}
      className='w-full px-3 py-2 mb-5 text-xs bg-transparent border outline-none sm:text-sm md:text-base border-custom-grey hover:border-custom-yellow font-os text-custom-white placeholder-custom-grey rounded-custom'
    />
  );
};
