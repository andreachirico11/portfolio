import Image from 'next/image';
import React from 'react';
import { FooterLink } from './FooterLink';

interface Props extends React.ComponentPropsWithoutRef<'footer'> {}

export const Footer: React.FC<Props> = () => (
  <footer className='flex items-center py-4 justify-evenly bg-custom-red'>
    <FooterLink
      href='https://www.linkedin.com/in/andrea-chirico-b5b98b143/'
      imageSrc='/assets/linkedin.png'
      alt='linkedin'
    />
    <FooterLink
      href='https://github.com/andreachirico11'
      imageSrc='/assets/github.png'
      alt='github'
    />
    <FooterLink
      href='https://www.facebook.com/andrea.chirico.927'
      imageSrc='/assets/facebook.png'
      alt='facebook'
    />
  </footer>
);
