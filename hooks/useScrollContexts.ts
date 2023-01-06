import { useContext, useEffect } from 'react';
import { SectionsContext } from '../context/ActiveLinkContext';
import { ShowAnimationContext } from '../context/ShowAnimationContext';

export default function useScrollCtx() {
  const { onScroll: animationOnScroll } = useContext(ShowAnimationContext)!;
  const { onScroll: activeLinknOnScroll } = useContext(SectionsContext)!;
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
