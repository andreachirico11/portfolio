import { createContext, ReactNode, useRef, FC, useContext, useEffect } from 'react';
import { AnimationType } from '../enums';
import { ShowAnimationContextType, RefType, SetType } from '../types';
import { getIsVisible } from '../utils';

const ShowAnimationContext = createContext<ShowAnimationContextType>(null);

const ShowAnimationContextProvider: FC<{ children: ReactNode; heightToShowElement?: number }> = ({
  children,
  heightToShowElement = 100,
}) => {
  const subscribers = new Set<SetType>([]);

  const onScroll = () => {
    checkAndReveal(subscribers, heightToShowElement);
  };

  const subscribe = (ref: RefType, animationType: AnimationType) => {
    ref.current!.classList.add(animationType);
    subscribers.add({ ref, animationType });
  };

  return (
    <ShowAnimationContext.Provider value={{ subscribe, onScroll }}>
      {children}
    </ShowAnimationContext.Provider>
  );
};

function checkAndReveal(elements: Set<SetType>, heightToShowElement: number) {
  const isVisible = getIsVisible(heightToShowElement);
  elements.forEach(({ ref: { current } }) => {
    if (!!current) {
      if (isVisible(current)) {
        current.classList.add('show');
      } else {
        current.classList.remove('show');
      }
    }
  });
}

function useShowAnimationContext<T>(type: AnimationType = AnimationType.down) {
  const newRef = useRef<T & HTMLElement>(null);
  const { subscribe } = useContext(ShowAnimationContext)!;
  useEffect(() => {
    if (newRef) {
      subscribe(newRef, type);
    }
  }, [newRef]);
  return newRef;
}

export { ShowAnimationContext, useShowAnimationContext, ShowAnimationContextProvider };
