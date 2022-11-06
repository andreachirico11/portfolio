import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'nav'> {}

export const Header: React.FC<Props> = () => (
  <nav className='fixed top-0 z-10 flex justify-between min-w-full p-5 text-sm tracking-widest uppercase xl:py-8 lg:text-2xl sm:justify-evenly sm:text-base md:text-lg bg-custom-red font-os text-custom-white drop-shadow-custom'>
    <a href='#works' className='hover:drop-shadow-custom'>
      works
    </a>
    <a href='#about' className='hover:drop-shadow-custom'>
      about
    </a>
    <a href='#contact' className='hover:drop-shadow-custom'>
      contact
    </a>
  </nav>
);
