import React, { ComponentPropsWithoutRef, FC } from 'react';
import { FormFieldBaseProps } from '../types';
import useFocusBorderRef from '../utils/useFocusBorderRef';

interface Props
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'name'>,
    FormFieldBaseProps {}

export const Input: FC<Props> = ({ useFormContext, name, ...props }) => {
  if (!useFormContext) {
    throw new Error('no context');
  }
  const [value, onChange] = useFormContext(name);
  const { ref, onFocus, onBlur } = useFocusBorderRef<HTMLInputElement>();
  return (
    <input
      className='w-full px-3 py-2 mb-5 text-xs bg-transparent border outline-none sm:text-sm md:text-base border-custom-grey font-os text-custom-white placeholder-custom-grey rounded-custom'
      {...props}
      onChange={onChange}
      value={value}
      ref={ref}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
    />
  );
};
