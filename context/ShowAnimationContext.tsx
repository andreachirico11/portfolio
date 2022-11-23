import { createContext, ReactNode, useRef, FC, useContext, useEffect } from 'react';
import { ShowAnimationContextType, RefType, SetType, AnimationType } from '../types';

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
  // todo per i vari left right
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

function getIsVisible(heightToShowElement: number) {
  return (current: HTMLElement) => {
    const elementTop = current.getBoundingClientRect().top;
    return elementTop < window.innerHeight - heightToShowElement;
  };
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

function useShowAnimationContextListener() {
  const { onScroll } = useContext(ShowAnimationContext)!;
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}

export { useShowAnimationContext, useShowAnimationContextListener, ShowAnimationContextProvider };
