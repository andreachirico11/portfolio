import React, { ComponentPropsWithoutRef, FC } from 'react';

interface Props extends ComponentPropsWithoutRef<'span'> {
  content?: string;
}

export const ErrorSpan: FC<Props> = ({ content = '', className = '', ...props }) => {
  return (
    <span className={`text-white p-sm block mt-1 ${className}`} {...props}>
      {content}
    </span>
  );
};
