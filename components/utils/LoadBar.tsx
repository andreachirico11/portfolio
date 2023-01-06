import React, { FC, useEffect, useState } from 'react';
import usePageOverflowBlocker from '../../hooks/usePageOverflowBlocker';

interface Props {
  subscriber: (cb: (isLoading: boolean) => any) => void;
}

export const LoadBar: FC<Props> = ({ subscriber }) => {
  const [isLoading, setIsLoading] = useState(false);
  const setScroll = usePageOverflowBlocker();
  useEffect(() => {
    subscriber(setIsLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setScroll(isLoading);
  }, [isLoading]);
  return (
    <div
      id='loading'
      className={`fixed z-20 h-2 bg-goodGreen animate-[loading_2s_linear_infinite] ${
        isLoading || 'hidden'
      }`}
    ></div>
  );
};
