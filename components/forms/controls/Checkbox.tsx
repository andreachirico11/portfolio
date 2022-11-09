import React, { ChangeEvent, ReactNode, useRef, useState, FC } from 'react';
import { useFocus } from '../../../hooks';
import { InputFieldProps } from '../../../types';

interface Props extends InputFieldProps {
  children?: ReactNode;
  stringLabel?: string;
  checked: boolean;
}

const DefaultCheckMark: FC = () => <div className='w-3/5 rounded-full h-3/5 bg-custom-grey' />;

export const Checkbox: FC<Props> = ({
  children,
  stringLabel,
  name = '',
  onChange,
  checked = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setChecked] = useState(checked);
  const [focused, onFocus, onBlur] = useFocus(false);
  const toggle = () => {
    if (inputRef.current) {
      inputRef.current.checked = !inputRef.current.checked;
      setChecked(inputRef.current.checked);
    }
  };
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange(name, e.target.checked);
  };

  return (
    <div className='flex items-center w-full px-3 mb-5 text-inherit'>
      <label className='flex items-center'>
        <div
          onClick={toggle}
          onMouseEnter={onFocus}
          onMouseLeave={onBlur}
          className={`flex items-center cursor-pointer justify-center w-[1em] text-center rounded-full h-[1em] border-[0.1em]  mr-2 border-${
            focused ? 'custom-yellow' : 'custom-grey'
          }`}
        >
          {isChecked && <DefaultCheckMark />}
        </div>
        <input
          ref={inputRef}
          onChange={onCheckboxChange}
          checked={checked}
          onFocus={onFocus}
          onBlur={onBlur}
          type='checkbox'
          name={name}
          className='w-0 h-0 opacity-0'
        />
        <span className='text-inherit'>{stringLabel || children}</span>
      </label>
    </div>
  );
};
