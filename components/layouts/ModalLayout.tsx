import { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
  show: boolean;
}

export const ModalLayout: FC<Props> = ({ title, children, show }) => (
  <>
    {show && (
      <div
        className='fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full transition-opacity bg-black bg-opacity-80'
        tabIndex={-1}
      >
        <div className='flex flex-col justify-center w-3/4 max-w-2xl px-8 py-6 text-white bg-gray rounded-custom'>
          <h4 id='modal-title' className='capitalize h3 text-goodGreen'>
            {title}
          </h4>
          {children}
        </div>
      </div>
    )}
  </>
);
