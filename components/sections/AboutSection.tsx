import Image from 'next/image';
import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'section'> {}

export const AboutSection: React.FC<Props> = () => (
  <section
    id='about'
    className='flex flex-col items-center justify-center min-h-screen px-10 py-20 bg-custom-yellow lg:flex-row-reverse'
  >
    <Image
      width={1080}
      height={441}
      src='/assets/me.jpeg'
      alt='my pic'
      className='w-3/5 max-w-xs rounded-full right drop-shadow-custom'
    />
    <div className='max-w-2xl px-8 text-center lg:text-left left'>
      <h4 className='my-10 text-3xl capitalize sm:text-5xl md:text-6xl font-code text-custom-red drop-shadow-custom'>
        hey
      </h4>
      <p className='text-xs leading-5 tracking-widest sm:leading-8 font-os text-custom-blue sm:text-sm md:text-base md:leading-10'>
        I write <span className='text-custom-red'>code</span> and it’s what I want to do.
        <br />I worked as Frontend developer with <span className='text-custom-red'>
          Angular
        </span>{' '}
        but I’m also pretty decent working with Backend mainly in{' '}
        <span className='text-custom-red'>Node.js</span>.
        <br />
        I live in Italy but I’m passionate about Nordic countries.
        <br />
        You can contact me and also ask for a <span className='text-custom-red'>passcode</span> to
        download my resume from this website
      </p>
    </div>
  </section>
);
