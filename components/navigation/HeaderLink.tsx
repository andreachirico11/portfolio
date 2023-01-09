import React from 'react';
import { ISection } from '../../types';
import { SectionColors } from '../../types/Colors';
import { SpanFillAnimated } from '../utils/TextFillAnimation';

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
      data-text={section.label}
      className={`text-${section.active ? activeColor : color}  ${className}`}
    >
      <SpanFillAnimated label={section.label} color={activeColor} />
    </a>
  );
};
