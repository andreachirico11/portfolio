import Image from 'next/image';
import React from 'react';
import { useShowAnimationContext } from '../../context/ShowAnimationContext';
import { AnimationType } from '../../enums';

interface Props {}

export const About: React.FC<Props> = () => {
  const animationRefImg = useShowAnimationContext<HTMLDivElement>(AnimationType.right);
  const animationRefContent = useShowAnimationContext<HTMLDivElement>(AnimationType.left);

  return (
    <>
      <div className='w-3/5 max-w-xs' ref={animationRefImg}>
        <Image
          width={1080}
          height={441}
          src='/assets/me.jpeg'
          alt='my pic'
          className='rounded-full w-100 drop-shadow-custom'
        />
      </div>
      <div className='max-w-2xl px-8 text-center lg:text-left' ref={animationRefContent}>
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
    </>
  );
};
