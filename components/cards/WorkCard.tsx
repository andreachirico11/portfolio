import Image from 'next/image';
import React from 'react';
import { useShowAnimationContext } from '../../context/ShowAnimationContext';
import { Anchor } from '../utils/Anchor';
import { IconLink } from '../utils/IconLink';

interface Props {
  title: string;
  description: string;
  github: string;
  website: string;
  src: string;
}

export const WorkCard: React.FC<Props> = ({ title, description, github, website, src }) => {
  const animationRef = useShowAnimationContext<HTMLDivElement>();
  return (
    <div
      className='py-5 text-center border-4 text-gray border-goodGreen rounded-custom'
      ref={animationRef}
    >
      <div className='flex flex-col justify-center'>
        <h4 className='capitalize h3'>{title}</h4>
        <p className='px-10 my-5 p-sm'>{description}</p>
        <div className='flex px-10 justify-evenly'>
          <Anchor label='website' url={website} className='mr-2' />
          <Anchor label='github' url={github} />
        </div>
      </div>
      <div className='hidden'>
        <Image width={560} height={467} src={src} alt={title} className='w-auto h-full' />
      </div>
    </div>
  );
};
