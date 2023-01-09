import React, { CSSProperties, useRef } from 'react';
import { AvailableColors } from '../../enums';
import { getColorValue } from '../../types/Colors';

interface Props {
  color: AvailableColors;
  label: string;
  underline?: boolean;
}

export const SpanFillAnimated: React.FC<Props> = ({ color, label, underline = false }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const onEnter = () => {
    ref.current!.classList.remove('w-0');
    ref.current!.classList.add('w-full');
  };
  const onLeave = () => {
    ref.current!.classList.remove('w-full');
    ref.current!.classList.add('w-0');
  };
  const style: CSSProperties = underline
    ? { color: getColorValue(color), textDecoration: 'underline' }
    : { color: getColorValue(color) };
  return (
    <span onMouseEnter={onEnter} onMouseLeave={onLeave} className='relative '>
      {label}
      <span
        ref={ref}
        className='absolute left-0 w-0 h-full overflow-hidden transition-[width]  duration-300'
        style={style}
      >
        {label}
      </span>
    </span>
  );
};
