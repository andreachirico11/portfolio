import Image from 'next/image';
import React from 'react';
import { IIconLinkProps } from '../../types';

interface Props extends IIconLinkProps {}

const defaultDimension = 34;

export const IconLink: React.FC<Props> = ({
  href,
  imageSrc,
  alt,
  width = defaultDimension,
  height = defaultDimension,
  classNames = '',
}) => (
  <a href={href}>
    <Image
      width={width}
      height={height}
      src={imageSrc}
      alt={alt}
      className={`w-auto h-10 transition duration-300 ease-in-out hover:scale-110 hover:rotate-180 ${classNames}`}
    />
  </a>
);
