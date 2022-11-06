import React from 'react';

interface Props {
  href: string;
  label: string;
}

export const AnchorButton: React.FC<Props> = ({ href, label }) => (
  <div className='flex items-center justify-center py-2 border bg-custom-grey down rounded-custom px-7 border-custom-yellow'>
    <a
      href={href}
      className='text-xs tracking-widest text-center sm:text-sm font-os text-custom-white focus:outline-none hover:text-custom-yellow focus:text-custom-yellow '
    >
      {label}
    </a>
  </div>
);
