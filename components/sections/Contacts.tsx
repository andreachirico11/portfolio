import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'section'> {}

export const Contacts: React.FC<Props> = () => (
  <>
    <form className='w-3/4 max-w-xl mb-28 lg:w-96 right'>
      <h4 className='text-xl text-center mb-7 font-code text-custom-yellow sm:text-3xl md:text-4xl'>
        Ask for my Resume!
      </h4>
      <input
        type='text'
        placeholder='Passcode'
        name='passcode'
        id='token'
        className='w-full px-3 py-2 mb-5 text-xs bg-transparent border outline-none sm:text-sm md:text-base border-custom-grey font-os text-custom-white placeholder-custom-grey rounded-custom'
      />
      <button
        type='button'
        id='token-submit'
        className='w-full px-3 py-2 text-sm text-center transition duration-300 ease-in-out focus:outline-none hover:tracking-widest focus:tracking-widest sm:text-lg md:text-xl font-code text-custom-red bg-custom-grey rounded-custom'
      >
        Download!
      </button>
    </form>
    <form className='w-3/4 max-w-xl lg:w-96 left'>
      <h4 className='text-xl text-center mb-7 font-code text-custom-yellow sm:text-3xl md:text-4xl'>
        Contact Me!
      </h4>
      <input
        type='text'
        placeholder='Your Name'
        name='name'
        className='w-full px-3 py-2 mb-5 text-xs bg-transparent border outline-none sm:text-sm md:text-base border-custom-grey font-os text-custom-white placeholder-custom-grey rounded-custom'
      />
      <input
        type='email'
        placeholder='Your Email'
        name='email'
        className='w-full px-3 py-2 mb-5 text-xs bg-transparent border outline-none sm:text-sm md:text-base border-custom-grey font-os text-custom-white placeholder-custom-grey rounded-custom'
      />
      <div className='w-full px-3 py-6 mb-5 border border-custom-grey rounded-custom'>
        <textarea
          name='message'
          className='w-full text-xs bg-transparent outline-none resize-none placeholder-custom-grey font-os md:text-base sm:text-sm text-custom-white'
          placeholder='Your Message'
        ></textarea>
      </div>
      <div className='flex items-center w-full px-3 mb-5'>
        <label>
          <input type='checkbox' name='privacy' className='hidden' />
          <span>
            <a
              href='https://www.iubenda.com/privacy-policy/59878709'
              className='text-xs tracking-widest text-center iubenda-white iubenda-noiframe iubenda-embed sm:text-sm font-os text-custom-grey focus:outline-none hover:text-custom-yellow focus:text-custom-yellow '
              title='Privacy Policy '
            >
              Accept Privacy Policy
            </a>
          </span>
        </label>
      </div>
      <button
        type='button'
        id='email-submit'
        className='w-full px-3 py-2 text-sm text-center transition duration-300 ease-in-out border-transparent focus:outline-none hover:tracking-widest focus:tracking-widest sm:text-lg md:text-xl font-code text-custom-red bg-custom-grey rounded-custom'
      >
        Send!
      </button>
    </form>
  </>
);
