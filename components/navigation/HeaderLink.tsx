import React from 'react';
import { ISection } from '../../types';
import { SectionColors } from '../../types/Colors';

interface Props {
  section: ISection;
  className: string;
  colors: SectionColors;
}

export const HeaderLink: React.FC<Props> = ({
  section,
  className,
  colors: { activeColor, color },
}) => {
  return (
    <a
      href={'#' + section.id}
      className={`text-${section.active ? activeColor : color} ${className}`}
    >
      {section.label}
    </a>
  );
};
