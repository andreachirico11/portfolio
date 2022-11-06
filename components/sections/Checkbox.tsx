import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  label?: string;
  name: string;
}

export const Checkbox: React.FC<Props> = ({ children, label, name }) => (
  <div className='flex items-center w-full px-3 mb-5'>
    <label>
      <input type='checkbox' name={name} className='hidden' />
      <span>{label || children}</span>
    </label>
  </div>
);
