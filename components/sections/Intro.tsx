import React from 'react';
import { Button } from '../utils/Button';

interface Props {}

export const Intro: React.FC<Props> = () => (
  <>
    <div className='flex flex-col justify-end h-[50vh] mb-20'>
      <h1 className='ml-8 text-white h1'>Hello There !</h1>
      <h2 className='ml-8 h2 text-gray mt-11'>I&apos;m Andrea Chirico</h2>
      <p className='ml-8 text-white mt-14 p-lg'>
        A passionate software developer with a love for clean code{' '}
      </p>
    </div>
    <Button className='ml-5'>Check out my work</Button>
  </>
);
