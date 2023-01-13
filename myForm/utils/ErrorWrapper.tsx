import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

interface Props extends ComponentPropsWithoutRef<'span'> {
  children: ReactNode;
  isOnError: boolean;
  errors: string[];
}

export const ErrorWrapper: FC<Props> = ({ children, isOnError, errors = [] }) => {
  return (
    <div className={`flex flex-col ${isOnError ? '' : 'mb-[14px]'}`}>
      {children}
      {isOnError && (
        <span
          className={`
        text-goodGreen p-error
          leading-[10px] desktop:leading-[12px] 
          block mt-[4px]
        `}
        >
          {errors[0]}
        </span>
      )}
    </div>
  );
};
