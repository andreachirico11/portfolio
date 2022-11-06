import Image from 'next/image';
import React from 'react';

interface Props {
  href: string;
  imageSrc: string;
  alt: string;
  width?: number;
  height?: number;
}

const defaultDimension = 34;

export const FooterLink: React.FC<Props> = ({
  href,
  imageSrc,
  alt,
  width = defaultDimension,
  height = defaultDimension,
}) => (
  <a href={href}>
    <Image
      width={width}
      height={height}
      src={imageSrc}
      alt={alt}
      className='w-auto h-10 transition duration-300 ease-in-out hover:scale-110 hover:rotate-180'
    />
  </a>
);
