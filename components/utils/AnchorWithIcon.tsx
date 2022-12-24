import React, { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

interface Props extends ComponentPropsWithoutRef<'span'> {
  href: string;
  label: string;
  src: string;
}

export const AnchorWithIcon: React.FC<Props> = ({ label, href, src }) => (
  <span className='flex text-white p-sm'>
    <Image width={20} height={20} src={src} alt={label} />
    <a href={href} className='ml-6'>
      {label}
    </a>
  </span>
);
