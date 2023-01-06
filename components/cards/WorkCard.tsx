import Image from 'next/image';
import React from 'react';
import { useShowAnimationContext } from '../../context/ShowAnimationContext';
import { Anchor } from '../utils/Anchor';

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
      className='max-w-3xl overflow-hidden bg-white border-4 text-gray border-goodGreen rounded-custom tablet:flex'
      ref={animationRef}
    >
      <div className='flex flex-col items-center py-5 tablet:pl-10 tablet:items-start tablet:w-2/3'>
        <h4 className='capitalize h3'>{title}</h4>
        <p className='my-5 text-center max-w-1/2 p-sm tablet:text-left max-w-[70%] tablet:max-w-none'>
          {description}
        </p>
        <div className='flex justify-evenly'>
          <Anchor label='website' url={website} className='mr-2 tablet:mr-10' />
          <Anchor label='github' url={github} />
        </div>
      </div>
      <div className='hidden w-1/3 tablet:block'>
        <Image width={560} height={467} src={src} alt={title} className='w-auto h-full' />
      </div>
    </div>
  );
};
