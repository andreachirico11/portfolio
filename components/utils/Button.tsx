import React, { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: string;
}

export const Button: React.FC<Props> = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`py-3 bg-white border-4 px-7 border-green rounded-custom text-gray btn-text
      ${className}
      `}
  >
    {children}
  </button>
);
