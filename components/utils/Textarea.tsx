import React from 'react';

interface Props {
  name: string;
  placeholder: string;
}

export const Textarea: React.FC<Props> = ({ name, placeholder }) => (
  <div className='w-full px-3 py-6 mb-5 border border-custom-grey rounded-custom'>
    <textarea
      name={name}
      className='w-full text-xs bg-transparent outline-none resize-none placeholder-custom-grey font-os md:text-base sm:text-sm text-custom-white'
      placeholder={placeholder}
    ></textarea>
  </div>
);
