import React, { ReactNode, useContext } from 'react';
import { ActiveLinkContext, useActiveLinkContext } from '../../context/ActiveLinkContext';
import { ISection } from '../../types';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  section: ISection;
  justify?: 'center' | 'between';
}

export const Section: React.FC<Props> = ({ children, className, section, justify = 'center' }) => {
  const ref = useActiveLinkContext<HTMLElement>();
  return (
    <section
      ref={ref}
      id={section.id}
      className={`min-h-screen flex flex-col items-center justify-${justify} ${className} `}
    >
      {children}
    </section>
  );
};
