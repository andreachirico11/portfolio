import { ComponentPropsWithoutRef, FC } from 'react';
import { FormFieldBaseProps } from '../types';
import { ErrorWrapper } from '../utils/ErrorWrapper';
import useFocusBorderRef from '../utils/useFocusBorderRef';

interface Props
  extends Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange' | 'name'>,
    FormFieldBaseProps {}

export const Textarea: FC<Props> = ({
  useFormContext,
  name,
  initialState,
  validators,
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
  const { ref, onFocus, onBlur } = useFocusBorderRef<HTMLDivElement>();
  return (
    <ErrorWrapper errors={errors} isOnError={isOnError && touched}>
      <div
        ref={ref}
        onMouseEnter={onFocus}
        onMouseLeave={onBlur}
        className='w-full px-3 py-6 border border-custom-grey rounded-custom'
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
    </ErrorWrapper>
  );
};
