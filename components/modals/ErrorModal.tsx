import { FC } from 'react';
import { useModalContext } from '../../context/ModalContext';
import { ModalTypes } from '../../enums';
import { ModalLayout } from '../layouts/ModalLayout';

interface Props {}

export const ErrorModal: FC<Props> = () => {
  const {
    show,
    close,
    config: { title, list, content = '' },
  } = useModalContext(ModalTypes.error);
  return (
    <ModalLayout title={title || ''} onClose={close} show={show}>
      <p
        id='modal-message'
        className='my-3 text-xs tracking-widest text-center md:text-base sm:my-6 sm:text-sm sm:text-left font-os text-custom-white'
      >
        {list && list.length ? list.map((e, i) => <li key={i}>{e}</li>) : content}
      </p>
    </ModalLayout>
  );
};
