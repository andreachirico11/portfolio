import { useState } from 'react';

export function useFocus(isFocused = false): [boolean, () => void, () => void] {
  const [focused, setFocused] = useState(isFocused);
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };
  return [focused, onFocus, onBlur];
}
