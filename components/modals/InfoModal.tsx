import { FC } from 'react';
import { useModalContext } from '../../context/ModalContext';
import { ModalTypes } from '../../enums';
import { ModalLayout } from '../layouts/ModalLayout';

interface Props {}

export const InfoModal: FC<Props> = () => {
  const {
    show,
    close,
    config: { title, content },
  } = useModalContext(ModalTypes.info);
  return (
    <ModalLayout title={title || ''} onClose={close} show={show}>
      <p
        id='modal-message'
        className='my-3 text-xs tracking-widest text-center md:text-base sm:my-6 sm:text-sm sm:text-left font-os text-custom-white'
      >
        {content || ''}
      </p>
    </ModalLayout>
  );
};
