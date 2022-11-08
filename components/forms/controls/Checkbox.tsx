import React, { ChangeEvent, ReactNode, useRef, useState, FC } from 'react';

interface Props {
  children?: ReactNode;
  label?: string;
  name: string;
  onChange: (name: string, value: any) => void;
  value: boolean;
}

const DefaultCheckMark: FC = () => <div className='w-3/5 rounded-full h-3/5 bg-custom-grey' />;

export const Checkbox: FC<Props> = ({ children, label, name, onChange, value = false }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(value);
  const [focused, setFocused] = useState(false);
  const toggle = () => {
    if (inputRef.current) {
      inputRef.current.checked = !inputRef.current.checked;
      setChecked(inputRef.current.checked);
    }
  };
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
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
          {checked && <DefaultCheckMark />}
        </div>
        <input
          ref={inputRef}
          onChange={onCheckboxChange}
          checked={value}
          onFocus={onFocus}
          onBlur={onBlur}
          type='checkbox'
          name={name}
          className='w-0 h-0 opacity-0'
        />
        <span className='text-inherit'>{label || children}</span>
      </label>
    </div>
  );
};
