import React, { ReactNode } from 'react';
import { ISection } from '../../types';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  section: ISection;
}

export const Section: React.FC<Props> = ({ children, className, section }) => (
  <section id={section.id} className={className}>
    {children}
  </section>
);
