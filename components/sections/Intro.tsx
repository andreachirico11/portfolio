import React from 'react';
import { Sections } from '../../enums';
import { AnchorButton } from '../utils/AnchorButton';

interface Props {}

export const Intro: React.FC<Props> = () => {
  return (
    <>
      <div className='flex flex-col justify-end h-[50vh] mb-14 mobile:mb-20'>
        <h1 className='text-white h1'>Hello There !</h1>
        <h2 className='mt-8 h2 text-gray mobile:mt-11'>I&apos;m Andrea Chirico</h2>
        <p className='mt-10 text-white mobile:mt-14 p-lg'>
          A passionate software developer with a love for clean code{' '}
        </p>
      </div>
      <AnchorButton
        animationOff={true}
        href={'#' + Sections.works}
        label='Check out my work'
        className='px-7'
      />
    </>
  );
};
