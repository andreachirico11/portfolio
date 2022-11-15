import { ReactElement, Children, isValidElement } from 'react';
import { FormFieldBaseProps } from '../types';

export default function _(
  children: ReactElement<FormFieldBaseProps> | ReactElement<FormFieldBaseProps>[]
) {
  const childrenArray = Children.toArray(children) as ReactElement<FormFieldBaseProps>[];
  const throwInvalid = (element: ReactElement) => {
    if (!isValidElement(element)) {
      throw new Error('invalid element');
    }
  };
  if (childrenArray.length === 1) {
    throwInvalid(childrenArray[0]);
    return;
  }
  const nameProps = childrenArray.map((child) => {
    throwInvalid(child);
    return child.props.name;
  });
  nameProps.some((prop, i) => {
    if (nameProps.indexOf(prop) !== i) {
      throw new Error('Repeated input');
    }
  });
}
