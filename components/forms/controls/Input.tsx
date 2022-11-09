import React, { ChangeEvent, FC } from 'react';
import { useFocus } from '../../../hooks';
import { InputFieldProps } from '../../../types';

interface Props extends InputFieldProps {}

export const Input: FC<Props> = ({ onChange, ...props }) => {
  const [focused, onFocus, onBlur] = useFocus(false);
  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <input
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onValueChange}
      {...props}
      className={`
      w-full px-3 py-2 mb-5 text-xs 
      bg-transparent border outline-none 
      sm:text-sm md:text-base 
      border-${focused ? 'custom-yellow' : 'custom-grey'}
    hover:border-custom-yellow font-os text-custom-white
    placeholder-custom-grey rounded-custom`}
    />
  );
};
