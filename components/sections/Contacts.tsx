import React from 'react';
import { Form } from '../utils/Form';

interface Props extends React.ComponentPropsWithoutRef<'section'> {}

export const Contacts: React.FC<Props> = () => (
  <>
    <Form title='Ask for my Resume!' buttonLabel='Download!' className='right'>
      <input
        type='text'
        placeholder='Passcode'
        name='passcode'
        id='token'
        className='w-full px-3 py-2 mb-5 text-xs bg-transparent border outline-none sm:text-sm md:text-base border-custom-grey font-os text-custom-white placeholder-custom-grey rounded-custom'
      />
    </Form>
    <Form title='Contact Me!' buttonLabel='Send!' className='left'>
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
    </Form>
  </>
);
