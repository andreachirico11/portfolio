import React, { useContext, useEffect, useState } from 'react';
import { SectionsContext } from '../../context/ActiveLinkContext';
import { Sections } from '../../enums';
import { ISection } from '../../types';
import getSectionColorCombination from '../../types/Colors';
import { HeaderLink } from './HeaderLink';

interface Props extends React.ComponentPropsWithoutRef<'nav'> {}

export const Header: React.FC<Props> = () => {
  const { sections: getSections, registerToSectionUpdate } = useContext(SectionsContext)!;
  const [sections, setSections] = useState<ISection[]>([]);
  let sectionColors = getSectionColorCombination(Sections.intro),
    activeSection = sections.find((s) => s.active);
  if (activeSection) {
    sectionColors = getSectionColorCombination(activeSection.id);
  }

  useEffect(() => {
    setSections(getSections());
    return registerToSectionUpdate(() => {
      setSections(getSections());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className='fixed top-0 z-10 flex justify-end min-w-full py-4 pr-5 tracking-widest uppercase nav-text'>
      {sections.slice(1).map((section, i, sections) => (
        <HeaderLink
          key={section.id + section.label}
          section={section}
          colors={sectionColors}
          className={`${sections.length - 1 !== i ? 'mr-5' : ''}`}
        />
      ))}
    </nav>
  );
};
