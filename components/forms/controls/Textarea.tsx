import React, { ChangeEvent } from 'react';
import { useFocus } from '../../../hooks';
import { TextareaFieldProps } from '../../../types';

interface Props extends TextareaFieldProps {}

export const Textarea: React.FC<Props> = ({ onChange, ...props }) => {
  const [focused, onFocus, onBlur] = useFocus(false);
  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  return (
    <div
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
      className={`w-full px-3 py-6 mb-5 border border-${
        focused ? 'custom-yellow' : 'custom-grey'
      } rounded-custom`}
    >
      <textarea
        onChange={onValueChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
        className='w-full text-xs bg-transparent outline-none resize-none placeholder-custom-grey font-os md:text-base sm:text-sm text-custom-white'
      ></textarea>
    </div>
  );
};
