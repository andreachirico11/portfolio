import Image from 'next/image';
import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'footer'> {}

export const Footer: React.FC<Props> = () => (
  <footer className='flex items-center py-4 justify-evenly bg-custom-red'>
    <a href='https://www.linkedin.com/in/andrea-chirico-b5b98b143/'>
      <Image
        width={34}
        height={34}
        src='/assets/linkedin.png'
        alt='linkedin'
        className='w-auto h-10 transition duration-300 ease-in-out hover:scale-110 hover:rotate-180'
      />
    </a>
    <a href='https://github.com/andreachirico11'>
      <Image
        width={34}
        height={34}
        src='/assets/github.png'
        alt='github'
        className='w-auto transition duration-300 ease-in-out h-9 hover:scale-110 hover:rotate-180'
      />
    </a>
    <a href='https://www.facebook.com/andrea.chirico.927'>
      <Image
        width={34}
        height={34}
        src='/assets/facebook.png'
        alt='facebook'
        className='w-auto h-10 transition duration-300 ease-in-out hover:scale-110 hover:rotate-180'
      />
    </a>
  </footer>
);
