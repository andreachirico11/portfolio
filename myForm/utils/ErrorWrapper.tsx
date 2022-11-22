import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import { ErrorSpan } from './ErrorSpan';

interface Props extends ComponentPropsWithoutRef<'span'> {
  children: ReactNode;
  isOnError: boolean;
  errors: string[];
}

export const ErrorWrapper: FC<Props> = ({ children, isOnError, errors = [] }) => {
  return (
    <div className={`pb-1`}>
      {children}
      {isOnError ? <ErrorSpan content={errors[0]} /> : <span className='block h-3 mt-2'></span>}
    </div>
  );
};
