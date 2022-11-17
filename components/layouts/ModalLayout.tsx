import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  onClose: () => void;
  show: boolean;
}

export const ModalLayout: FC<Props> = ({ title, children, onClose, show }) => (
  <>
    {show && (
      <div
        className='fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full transition-opacity bg-black bg-opacity-70'
        tabIndex={-1}
      >
        <div className='flex flex-col justify-center w-3/4 max-w-2xl px-8 py-6 bg-custom-grey rounded-custom '>
          <h4
            id='modal-title'
            className='text-xl tracking-widest text-center capitalize md:text-3xl sm:text-left sm:text-2xl font-code text-custom-yellow drop-shadow-custom'
          >
            {title}
          </h4>
          {children}
          <button
            type='button'
            id='modal-button'
            onClick={onClose}
            className='w-full px-3 py-2 text-sm text-center transition duration-300 ease-in-out border border-custom-red focus:outline-none hover:tracking-widest focus:tracking-widest sm:text-lg md:text-xl font-code text-custom-red bg-custom-grey rounded-custom'
          >
            Close
          </button>
        </div>
      </div>
    )}
  </>
);
