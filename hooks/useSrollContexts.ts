import { useContext, useEffect } from 'react';
import { ActiveLinkContext } from '../context/ActiveLinkContext';
import { ShowAnimationContext } from '../context/ShowAnimationContext';

export default function useScrollContexts() {
  const { onScroll: animationOnScroll } = useContext(ShowAnimationContext)!;
  const { onScroll: activeLinknOnScroll } = useContext(ActiveLinkContext)!;
  const onScrolls = () => {
    animationOnScroll();
    activeLinknOnScroll();
  };
  useEffect(() => {
    window.addEventListener('scroll', onScrolls);
    return () => {
      window.removeEventListener('scroll', onScrolls);
    };
  }, []);
}
