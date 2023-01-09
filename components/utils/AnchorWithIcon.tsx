import React, { ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

interface Props extends ComponentPropsWithoutRef<'span'> {
  href: string;
  label: string | JSX.Element;
  src: string;
}

export const AnchorWithIcon: React.FC<Props> = ({ label, href, src }) => (
  <span className='flex items-center text-white '>
    <div className='w-[20px] h-[20px] tablet:w-[50px] tablet:h-[50px] relative'>
      <Image fill={true} src={src} alt={src} sizes='60px' />
    </div>
    <a href={href} className='ml-6 p-sm tablet:p-m leading-0'>
      {label}
    </a>
  </span>
);
