import { FC } from 'react';
import { useModalContext } from '../../context/ModalContext';
import { ModalTypes } from '../../enums';
import { ModalLayout } from '../layouts/ModalLayout';
import { ModalActions } from '../utils/ModalActions';

interface Props {}

export const ErrorModal: FC<Props> = () => {
  const {
    show,
    close,
    config: { title, list, content = '' },
  } = useModalContext(ModalTypes.error);
  return (
    <ModalLayout title={title || ''} show={show}>
      <p id='modal-message' className='my-10 p-lg'>
        {list && list.length ? list.map((e, i) => <li key={i}>{e}</li>) : content}
      </p>
      <ModalActions onClose={close} />
    </ModalLayout>
  );
};
