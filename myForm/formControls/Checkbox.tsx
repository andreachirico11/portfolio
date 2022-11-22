import React, { ReactNode, useRef, FC, ComponentPropsWithoutRef, MouseEvent } from 'react';
import { FormFieldBaseProps } from '../types';
import { ErrorWrapper } from '../utils/ErrorWrapper';
import useFocusBorderRef from '../utils/useFocusBorderRef';

interface Props
  extends Omit<ComponentPropsWithoutRef<'input'>, 'onChange' | 'name'>,
    FormFieldBaseProps {
  children?: ReactNode;
  stringLabel?: string;
}

const DefaultCheckMark: FC = () => <div className='w-3/5 rounded-full h-3/5 bg-custom-grey' />;

export const Checkbox: FC<Props> = ({
  children,
  stringLabel,
  useFormContext,
  name,
  initialState,
  validators,
  ...props
}) => {
  if (!useFormContext) {
    throw new Error('no context');
  }
  const inputRef = useRef<HTMLInputElement>(null);
  const { ref, onFocus, onBlur } = useFocusBorderRef<HTMLDivElement>();
  const [{ value, errors, isOnError }, onChange] = useFormContext(name, initialState!, validators);
  const toggle = (e: MouseEvent) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  return (
    <ErrorWrapper errors={errors} isOnError={isOnError}>
      <div className='flex items-center w-full px-3 text-inherit'>
        <label className='flex items-center'>
          <div
            ref={ref}
            onClick={toggle}
            onMouseEnter={onFocus}
            onMouseLeave={onBlur}
            className='flex items-center cursor-pointer justify-center w-[1em] text-center rounded-full h-[1em] border-[0.1em] border-custom-grey mr-2'
          >
            {value && <DefaultCheckMark />}
          </div>
          <input
            {...props}
            ref={inputRef}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            type='checkbox'
            name={name}
            checked={value}
            className='w-0 h-0 opacity-0'
          />
          <span className='text-inherit'>{stringLabel || children}</span>
        </label>
      </div>
    </ErrorWrapper>
  );
};
