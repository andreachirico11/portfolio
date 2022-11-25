import { createContext, ReactNode, useRef } from 'react';
import { CorruptedFileError } from '../types/errors';

const initialCb = (blob: Blob, title: string) => {};

const DownloadingContext = createContext<(blob: Blob, title: string) => void>(initialCb);

const DownloadingContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLAnchorElement>(null);

  function downloadFile(blob: Blob, title: string) {
    let objUrl = '';
    try {
      if (ref && ref.current) {
        objUrl = URL.createObjectURL(blob);
        ref.current.href = objUrl;
        ref.current.download = title;
        ref.current.click();
      }
    } catch (error) {
      throw new CorruptedFileError();
    } finally {
      if (ref && ref.current) {
        ref.current.href = '';
        ref.current.download = '';
        URL.revokeObjectURL(objUrl);
      }
    }
  }

  return (
    <DownloadingContext.Provider value={downloadFile}>
      <>
        {children}
        <a ref={ref} className='hidden'></a>
      </>
    </DownloadingContext.Provider>
  );
};

export { DownloadingContext, DownloadingContextProvider };
