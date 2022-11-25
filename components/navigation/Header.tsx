import React, { useContext, useEffect, useState } from 'react';
import { ActiveLinkContext } from '../../context/ActiveLinkContext';
import { ISection } from '../../types';
import { HeaderLink } from './HeaderLink';

interface Props extends React.ComponentPropsWithoutRef<'nav'> {}

export const Header: React.FC<Props> = () => {
  const { sections: getSections, registerToSectionUpdate } = useContext(ActiveLinkContext)!;
  const [sections, setSections] = useState<ISection[]>([]);

  useEffect(() => {
    setSections(getSections());
    return registerToSectionUpdate(() => {
      setSections(getSections());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className='fixed top-0 z-10 flex justify-between min-w-full p-5 text-sm tracking-widest uppercase xl:py-8 lg:text-2xl sm:justify-evenly sm:text-base md:text-lg bg-custom-red font-os text-custom-white drop-shadow-custom'>
      {sections.slice(1).map((section) => (
        <HeaderLink key={section.id + section.label} section={section} />
      ))}
    </nav>
  );
};
