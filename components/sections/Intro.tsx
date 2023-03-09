import React from 'react';
import { Sections } from '../../enums';
import { AnchorButton } from '../utils/AnchorButton';

interface Props {}

export const Intro: React.FC<Props> = () => {
  return (
    <>
      <div className='flex flex-col justify-end h-[50vh] mb-14 desktop:mb-32'>
        <h1 className='text-white h1'>Hello There !</h1>
        <h2 className='mt-8 h2 text-gray mobile:mt-11 tablet:mt-4'>I&apos;m Andrea Chirico</h2>
        <p className='mt-10 text-white desktop:mt-6 mobile:mt-14 tablet:mt-3 tab p-lg tablet:w-2/3'>
          A passionate software developer <br /> with a love for clean code
        </p>
      </div>
      <div className='flex'>
        <AnchorButton
          animationOff={true}
          href={'#' + Sections.works}
          label='Check out my work'
          className='text-white mr-14 px-7 !bg-gray border-gray'
        />
        <AnchorButton
          animationOff={true}
          href={'#' + Sections.contacts}
          label='Download my Resume'
          className='hidden text-white px-7 !bg-gray border-gray tablet:block'
        />
      </div>
    </>
  );
};
