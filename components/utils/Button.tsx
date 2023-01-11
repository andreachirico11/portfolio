import React, { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: string;
  onclick?: () => void;
}

export const Button: React.FC<Props> = ({ children, className, onclick, ...props }) => {
  return (
    <>
      <button
        {...props}
        onClick={onclick}
        className={`
        py-3 bg-white border-4 px-2 rounded-custom text-gray btn-text
        relative border-goodGreen overflow-hidden
        animated-btn
      ${className}
      `}
      >
        {children}
      </button>
    </>
  );
};
