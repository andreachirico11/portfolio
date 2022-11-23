import React from 'react';
import { useShowAnimationContext } from '../../context/ShowAnimationContext';

interface Props {
  href: string;
  label: string;
}

export const AnchorButton: React.FC<Props> = ({ href, label }) => {
  const animationRef = useShowAnimationContext<HTMLDivElement>();
  return (
    <div
      className='flex items-center justify-center py-2 border bg-custom-grey rounded-custom px-7 border-custom-yellow'
      ref={animationRef}
    >
      <a
        href={href}
        className='text-xs tracking-widest text-center sm:text-sm font-os text-custom-white focus:outline-none hover:text-custom-yellow focus:text-custom-yellow '
      >
        {label}
      </a>
    </div>
  );
};
