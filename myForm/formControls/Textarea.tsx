import { ComponentPropsWithoutRef, FC } from 'react';
import { FormFieldBaseProps } from '../types';
import { ErrorWrapper } from '../utils/ErrorWrapper';
import useFocusBorderRef from '../utils/useFocusBorderRef';

interface Props
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange' | 'name'>,
    FormFieldBaseProps {
  label: string;
}

export const Textarea: FC<Props> = ({
  useFormContext,
  name,
  initialState,
  validators,
  label,
  ...props
}) => {
  if (!useFormContext) {
    throw new Error('no context');
  }
  const [{ value, errors, isOnError, touched }, onChange] = useFormContext(
    name,
    initialState!,
    validators
  );
  const { ref, onFocus, onBlur } = useFocusBorderRef<HTMLDivElement>(
    'border-goodGreen',
    'border-white'
  );
  return (
    <ErrorWrapper errors={errors} isOnError={isOnError && touched}>
      <label className='p-m' htmlFor={props.id}>
        {label}
      </label>
      <div
        ref={ref}
        onMouseEnter={onFocus}
        onMouseLeave={onBlur}
        className='w-full px-1 py-3 border-4 border-white rounded-custom'
      >
        <textarea
          {...props}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
          onBlur={onBlur}
          className='w-full text-xs bg-transparent outline-none resize-none placeholder-custom-grey p-sm text-custom-white'
        ></textarea>
      </div>
    </ErrorWrapper>
  );
};
