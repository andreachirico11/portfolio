import { FC } from 'react';
import { useModalContext } from '../../context/ModalContext';
import { ModalTypes } from '../../enums';
import { ModalLayout } from '../layouts/ModalLayout';
import { ModalActions } from '../utils/ModalActions';

interface Props {}

export const InfoModal: FC<Props> = () => {
  const {
    show,
    close,
    config: { title, content },
  } = useModalContext(ModalTypes.info);
  return (
    <ModalLayout title={title || ''} show={show}>
      <p id='modal-message' className='my-10 p-lg'>
        {content || ''}
      </p>
      <ModalActions onClose={close} />
    </ModalLayout>
  );
};
