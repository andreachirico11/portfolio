import React from 'react';
import { ISection } from '../../types';
import { HeaderLink } from './HeaderLink';

interface Props extends React.ComponentPropsWithoutRef<'nav'> {
  sections: ISection[];
}

export const Header: React.FC<Props> = ({ sections }) => (
  <nav className='fixed top-0 z-10 flex justify-between min-w-full p-5 text-sm tracking-widest uppercase xl:py-8 lg:text-2xl sm:justify-evenly sm:text-base md:text-lg bg-custom-red font-os text-custom-white drop-shadow-custom'>
    {sections.map((section) => (
      <HeaderLink key={section.id + section.label} section={section} />
    ))}
  </nav>
);
