import { createContext, ReactNode, useState } from 'react';

interface ILoadingContext {
  isLoading: () => boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const defaultValue = false;

const initialStatus: ILoadingContext = {
  isLoading() {
    return defaultValue;
  },
  startLoading() {},
  stopLoading() {},
};

const LoadingContext = createContext(initialStatus);

const LoadingContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [_isLoading, setIsLoading] = useState(defaultValue);
  const isLoading = () => _isLoading;
  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);
  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingContextProvider };
