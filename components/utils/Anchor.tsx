import React, { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'a'> {
  children: string;
}

export const Anchor: React.FC<Props> = ({ children, ...props }) => (
  <a
    {...props}
    className='text-xs tracking-widest text-center iubenda-white iubenda-noiframe iubenda-embed sm:text-sm font-os text-custom-grey focus:outline-none hover:text-custom-yellow focus:text-custom-yellow '
  >
    {children}
  </a>
);
