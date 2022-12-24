import React, { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: string;
  onclick?: () => void;
}

export const Button: React.FC<Props> = ({ children, className, onclick, ...props }) => (
  <button
    {...props}
    onClick={onclick}
    className={`py-3 bg-white border-4 px-2 border-goodGreen rounded-custom text-gray btn-text
      ${className}
      `}
  >
    {children}
  </button>
);
