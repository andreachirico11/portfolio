import React from 'react';
import { ISection } from '../../types';

interface Props {
  section: ISection;
}

export const HeaderLink: React.FC<Props> = ({ section }) => (
  <a href={'#' + section.id} className='hover:drop-shadow-custom'>
    {section.label}
  </a>
);
