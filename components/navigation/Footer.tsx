import Image from 'next/image';
import React from 'react';
import { IconLink } from '../utils/IconLink';

interface Props extends React.ComponentPropsWithoutRef<'footer'> {}

export const Footer: React.FC<Props> = () => (
  <footer className='flex items-center py-4 justify-evenly bg-custom-red'>
    <IconLink
      href='https://www.linkedin.com/in/andrea-chirico-b5b98b143/'
      imageSrc='/assets/linkedin.png'
      alt='linkedin'
    />
    <IconLink
      href='https://github.com/andreachirico11'
      imageSrc='/assets/github.png'
      alt='github'
    />
    <IconLink
      href='https://www.facebook.com/andrea.chirico.927'
      imageSrc='/assets/facebook.png'
      alt='facebook'
    />
  </footer>
);
