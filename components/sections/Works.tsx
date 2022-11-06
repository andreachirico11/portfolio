import Image from 'next/image';
import React from 'react';

interface Props {}

export const Works: React.FC<Props> = () => (
  <>
    <div className='flex w-full max-w-2xl mb-10 overflow-hidden down lg:mb-20 bg-custom-grey rounded-custom'>
      <div className='flex flex-col justify-center w-full px-8 py-6 sm:w-3/4'>
        <h4 className='text-xl tracking-widest text-center capitalize md:text-3xl sm:text-left sm:text-2xl font-code text-custom-yellow drop-shadow-custom'>
          students manager
        </h4>
        <p className='my-3 text-xs tracking-widest text-center md:text-base sm:my-6 sm:text-sm sm:text-left font-os text-custom-white'>
          A full-stack web app for managing students lessons, print receipts and so on...
        </p>
        <div className='flex justify-between px-10 sm:justify-start sm:pl-0'>
          <a href='https://github.com/andreachirico11/Students_Manager'>
            <Image
              width={34}
              height={34}
              src='/assets/github.png'
              alt='github'
              className='w-auto transition duration-300 ease-in-out h-7 sm:h-9 sm:mr-10 hover:scale-110 hover:rotate-180'
            />
          </a>
          <a href='https://studentsmanager.netlify.app/'>
            <Image
              width={34}
              height={34}
              src='/assets/website.png'
              alt='web'
              className='w-auto transition duration-300 ease-in-out h-7 sm:h-9 hover:scale-110 hover:rotate-180'
            />
          </a>
        </div>
      </div>
      <div className='hidden w-1/4 sm:block'>
        <Image
          width={560}
          height={467}
          src='/assets/demo-students.png'
          alt='Students Manager Website'
          className='w-auto h-full'
        />
      </div>
    </div>
    <div className='flex w-full max-w-2xl mb-10 overflow-hidden down lg:mb-20 bg-custom-grey rounded-custom'>
      <div className='flex flex-col justify-center w-full px-8 py-6 sm:w-3/4'>
        <h4 className='text-xl tracking-widest text-center capitalize md:text-3xl sm:text-left sm:text-2xl font-code text-custom-yellow drop-shadow-custom'>
          eredi casassa
        </h4>
        <p className='my-3 text-xs tracking-widest text-center md:text-base sm:my-6 sm:text-sm sm:text-left font-os text-custom-white'>
          A nice shop website, with an old marine flavour
        </p>
        <div className='flex justify-between px-10 sm:justify-start sm:pl-0'>
          <a href='https://github.com/andreachirico11/Eredi-Casassa'>
            <Image
              width={34}
              height={34}
              src='/assets/github.png'
              alt='github'
              className='w-auto transition duration-300 ease-in-out h-7 sm:h-9 sm:mr-10 hover:scale-110 hover:rotate-180'
            />
          </a>
          <a href='https://www.eredicasassa.com/'>
            <Image
              width={34}
              height={34}
              src='/assets/website.png'
              alt='web'
              className='w-auto transition duration-300 ease-in-out h-7 sm:h-9 hover:scale-110 hover:rotate-180'
            />
          </a>
        </div>
      </div>
      <div className='hidden w-1/4 sm:block'>
        <Image
          width={555}
          height={465}
          src='/assets/demo-casassa.png'
          alt='Eredi Casassa Website'
          className='w-auto h-full'
        />
      </div>
    </div>
    <div className='flex w-full max-w-2xl mb-10 overflow-hidden down lg:mb-20 bg-custom-grey rounded-custom'>
      <div className='flex flex-col justify-center w-full px-8 py-6 sm:w-3/4'>
        <h4 className='text-xl tracking-widest text-center capitalize md:text-3xl sm:text-left sm:text-2xl font-code text-custom-yellow drop-shadow-custom'>
          my portfolio
        </h4>
        <p className='my-3 text-xs tracking-widest text-center md:text-base sm:my-6 sm:text-sm sm:text-left font-os text-custom-white'>
          Who says that portfolios are always static websites? This one has backend too
        </p>
        <div className='flex justify-between px-10 sm:justify-start sm:pl-0'>
          <a href='https://github.com/andreachirico11/portfolio'>
            <Image
              width={34}
              height={34}
              src='/assets/github.png'
              alt='github'
              className='w-auto transition duration-300 ease-in-out h-7 sm:h-9 sm:mr-10 hover:scale-110 hover:rotate-180'
            />
          </a>
          <a href='https://www.andreachirico.com/'>
            <Image
              width={34}
              height={34}
              src='/assets/website.png'
              alt='web'
              className='w-auto transition duration-300 ease-in-out h-7 sm:h-9 hover:scale-110 hover:rotate-180'
            />
          </a>
        </div>
      </div>
      <div className='hidden w-1/4 sm:block'>
        <Image
          width={458}
          height={450}
          src='/assets/demo-portfolio.png'
          alt='demo-portfolio'
          className='w-auto h-full'
        />
      </div>
    </div>

    <div className='flex items-center justify-center py-2 border bg-custom-grey down rounded-custom px-7 border-custom-yellow'>
      <a
        href='https://github.com/andreachirico11'
        className='text-xs tracking-widest text-center sm:text-sm font-os text-custom-white focus:outline-none hover:text-custom-yellow focus:text-custom-yellow '
      >
        And many more on my Github page
      </a>
    </div>
  </>
);
