import Image from 'next/image';
import React from 'react';
import { IIconLinkProps } from '../../types';
import { IconLink } from '../utils/IconLink';

interface Props {
  title: string;
  description: string;
  github: string;
  website: string;
  src: string;
}

export const WorkCard: React.FC<Props> = ({ title, description, github, website, src }) => (
  <div className='flex w-full max-w-2xl mb-10 overflow-hidden down lg:mb-20 bg-custom-grey rounded-custom'>
    <div className='flex flex-col justify-center w-full px-8 py-6 sm:w-3/4'>
      <h4 className='text-xl tracking-widest text-center capitalize md:text-3xl sm:text-left sm:text-2xl font-code text-custom-yellow drop-shadow-custom'>
        {title}
      </h4>
      <p className='my-3 text-xs tracking-widest text-center md:text-base sm:my-6 sm:text-sm sm:text-left font-os text-custom-white'>
        {description}
      </p>
      <div className='flex justify-between px-10 sm:justify-start sm:pl-0'>
        <IconLink
          href={github}
          alt='github'
          imageSrc='/assets/github.png'
          classNames='h-7 sm:h-9 sm:mr-10'
        />
        <IconLink
          href={website}
          alt='website'
          imageSrc='/assets/website.png'
          classNames='h-7 sm:h-9'
        />
      </div>
    </div>
    <div className='hidden w-1/4 sm:block'>
      <Image width={560} height={467} src={src} alt={title} className='w-auto h-full' />
    </div>
  </div>
);
