import React, { useContext } from 'react';
import { LoadingContext } from '../../context/LoadingContext';

interface Props {}

export const LoadBar: React.FC<Props> = () => {
  const { isLoading } = useContext(LoadingContext);
  return (
    <div
      id='loading'
      className={`fixed z-20 h-1 bg-custom-white animate-[loading_2s_linear_infinite] ${
        isLoading() || 'hidden'
      }`}
    ></div>
  );
};
