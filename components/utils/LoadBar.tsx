import React, { FC, useEffect, useState } from 'react';

interface Props {
  subscriber: (cb: (isLoading: boolean) => any) => void;
}

export const LoadBar: FC<Props> = ({ subscriber }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    subscriber(setIsLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      id='loading'
      className={`fixed z-20 h-1 bg-custom-white animate-[loading_2s_linear_infinite] ${
        isLoading || 'hidden'
      }`}
    ></div>
  );
};
