import React, { ComponentPropsWithoutRef, FC } from 'react';
import { FormFieldBaseProps } from '../types';
import useFocusBorderRef from '../utils/useFocusBorderRef';
import { ErrorWrapper } from '../utils/ErrorWrapper';

interface Props
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'name'>,
    FormFieldBaseProps {}

export const Input: FC<Props> = ({ useFormContext, name, initialState, validators, ...props }) => {
  if (!useFormContext) {
    throw new Error('no context');
  }
  const [{ value, errors, isOnError }, onChange] = useFormContext(name, initialState!, validators);
  const { ref, onFocus, onBlur } = useFocusBorderRef<HTMLInputElement>();
  return (
    <ErrorWrapper errors={errors} isOnError={isOnError}>
      <input
        className={`
      w-full px-3 py-2 text-xs 
      bg-transparent border outline-none 
      sm:text-sm md:text-base border-custom-grey 
      font-os text-custom-white placeholder-custom-grey 
      rounded-custom
      outline-dotted
      `}
        {...props}
        onChange={onChange}
        value={value}
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onFocus}
        onMouseLeave={onBlur}
      />
    </ErrorWrapper>
  );
};
