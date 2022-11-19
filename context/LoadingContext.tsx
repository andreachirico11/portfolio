import { createContext, ReactNode, useRef, useState } from 'react';
import { LoadBar } from '../components/utils/LoadBar';

interface ILoadingContext {
  startLoading: () => void;
  stopLoading: () => void;
}

const initialStatus: ILoadingContext = {
  startLoading() {},
  stopLoading() {},
};

const LoadingContext = createContext(initialStatus);

const LoadingContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const barStateRef = useRef<(isLoading: boolean) => any>();
  const setRef = (cb: (isLoading: boolean) => any) => {
    barStateRef.current = cb;
  };
  const startLoading = () => {
    barStateRef.current!(true);
  };
  const stopLoading = () => {
    barStateRef.current!(false);
  };
  return (
    <LoadingContext.Provider value={{ startLoading, stopLoading }}>
      <>
        <LoadBar subscriber={setRef} />
        {children}
      </>
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingContextProvider };
