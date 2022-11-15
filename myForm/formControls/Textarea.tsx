import { ComponentPropsWithoutRef, FC } from 'react';
import { FormFieldBaseProps } from '../types';
import useFocusBorderRef from '../utils/useFocusBorderRef';

interface Props
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange' | 'name'>,
    FormFieldBaseProps {}

export const Textarea: FC<Props> = ({ useFormContext, name, ...props }) => {
  if (!useFormContext) {
    throw new Error('no context');
  }
  const [value, onChange] = useFormContext(name);
  const { ref, onFocus, onBlur } = useFocusBorderRef<HTMLDivElement>();
  return (
    <div
      ref={ref}
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
      className='w-full px-3 py-6 mb-5 border border-custom-grey rounded-custom'
    >
      <textarea
        {...props}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        className='w-full text-xs bg-transparent outline-none resize-none placeholder-custom-grey font-os md:text-base sm:text-sm text-custom-white'
      ></textarea>
    </div>
  );
};
