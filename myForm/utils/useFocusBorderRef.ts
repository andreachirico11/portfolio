import { useRef } from 'react';

export default function useFocusBorderRef<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const getCurrentClasslist = () => {
    if (!ref.current) {
      throw new Error('no current');
    }
    return ref.current.classList;
  };
  const onFocus = () => {
    getCurrentClasslist().remove('border-custom-grey');
    getCurrentClasslist().add('border-custom-yellow');
  };
  const onBlur = () => {
    getCurrentClasslist().remove('border-custom-yellow');
    getCurrentClasslist().add('border-custom-grey');
  };
  return { ref, onFocus, onBlur };
}
