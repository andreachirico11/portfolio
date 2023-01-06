import { useEffect, useState } from 'react';

export default function usePageOverflowBlocker() {
  const [isScrollStopped, setStopScroll] = useState(false);
  useEffect(() => {
    if (isScrollStopped) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
    if (!isScrollStopped) {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }, [isScrollStopped]);

  return (isStopped: boolean) => setStopScroll(isStopped);
}
