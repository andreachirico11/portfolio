import { useRef } from 'react';

export default function useFocusBorderRef<T extends HTMLElement>(
  accentClass: string,
  nonAccentClass: string
) {
  const ref = useRef<T>(null);
  const getCurrentClasslist = () => {
    if (!ref.current) {
      throw new Error('no current');
    }
    return ref.current.classList;
  };
  const onFocus = () => {
    getCurrentClasslist().remove(nonAccentClass);
    getCurrentClasslist().add(accentClass);
  };
  const onBlur = () => {
    getCurrentClasslist().remove(accentClass);
    getCurrentClasslist().add(nonAccentClass);
  };
  return { ref, onFocus, onBlur };
}
