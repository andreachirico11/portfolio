import React from 'react';

interface Props {}

export const Intro: React.FC<Props> = () => (
  <>
    <h1 className='mb-5 text-center uppercase h1 md:mb-10 text-custom-yellow drop-shadow-custom'>
      andrea chirico
    </h1>
    <h4 className='text-xl text-center capitalize sm:text-3xl md:text-4xl font-os text-custom-white drop-shadow-custom'>
      software developer
    </h4>
  </>
);
