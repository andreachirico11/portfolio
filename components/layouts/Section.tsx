import React, { ReactNode } from 'react';
import { useActiveLinkContext } from '../../context/ActiveLinkContext';
import { ISection } from '../../types';
import { getSectionColorCombination } from '../../types/Colors';
import { Curve } from './Curve';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  children: ReactNode;
  section: ISection;
  hasCurve?: boolean;
}

export const Section: React.FC<Props> = ({ children, className, section, hasCurve = false }) => {
  const ref = useActiveLinkContext<HTMLElement>();
  const { curve, background } = getSectionColorCombination(section.id);
  return hasCurve ? (
    <section
      ref={ref}
      id={section.id}
      className={`relative z-0 min-h-screen overflow-hidden bg-${background}`}
    >
      {hasCurve && <Curve colorId={curve} />}
      <div
        className={`min-h-screen relative z-1 flex flex-col items-center justify-center ${className} `}
      >
        {children}
      </div>
    </section>
  ) : (
    <section
      ref={ref}
      id={section.id}
      className={`min-h-screen flex flex-col items-center justify-center  bg-${background} ${className}`}
    >
      {children}
    </section>
  );
};
