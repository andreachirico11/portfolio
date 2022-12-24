import React, { ComponentPropsWithoutRef, FC } from 'react';
import { FormFieldBaseProps } from '../types';
import { ErrorWrapper } from '../utils/ErrorWrapper';
import useFocusBorderRef from '../utils/useFocusBorderRef';

interface Props
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'name'>,
    FormFieldBaseProps {
  label: string;
}

export const Input: FC<Props> = ({
  useFormContext,
  name,
  initialState,
  validators,
  label,
  ...props
}) => {
  if (!useFormContext) {
    throw new Error('no context');
  }
  const [{ value, errors, isOnError, touched }, onChange] = useFormContext(
    name,
    initialState!,
    validators
  );
  const { ref, onFocus, onBlur } = useFocusBorderRef<HTMLInputElement>(
    'border-goodGreen',
    'border-white'
  );
  return (
    <ErrorWrapper errors={errors} isOnError={isOnError && touched}>
      <label className='p-m' htmlFor={props.id}>
        {label}
      </label>
      <input
        className='pl-1 bg-transparent border-4 border-white outline-none p-sm rounded-custom'
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
