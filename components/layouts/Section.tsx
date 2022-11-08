import React, { ReactNode } from 'react';
import { ISection } from '../../types';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  section: ISection;
  justify?: 'center' | 'between';
}

export const Section: React.FC<Props> = ({ children, className, section, justify = 'center' }) => (
  <section
    id={section.id}
    className={`min-h-screen flex flex-col items-center justify-${justify} ${className} `}
  >
    {children}
  </section>
);
