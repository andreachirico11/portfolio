import React, { useRef } from 'react';
import { useShowAnimationContext } from '../../context/ShowAnimationContext';
import { AnimationType } from '../../enums';
import { Button } from './Button';

interface Props {
  href: string;
  label: string;
  className?: string;
  animationOff?: boolean;
}

export const AnchorButton: React.FC<Props> = ({
  href,
  label,
  className = '',
  animationOff = false,
}) => {
  const animationRef = useShowAnimationContext<HTMLDivElement>(
    animationOff ? AnimationType.off : AnimationType.down
  );
  const r = useRef<HTMLAnchorElement>(null);
  const onClick = () => {
    r.current!.click();
  };
  return (
    <div className='' ref={animationRef}>
      <a ref={r} href={href} className='hidden' />
      <Button onclick={onClick} className={className}>
        {label}
      </Button>
    </div>
  );
};
