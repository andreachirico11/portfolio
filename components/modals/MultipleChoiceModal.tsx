import { FC } from 'react';
import { useModalContext } from '../../context/ModalContext';
import { ModalTypes } from '../../enums';
import { ModalLayout } from '../layouts/ModalLayout';
import { ModalActions } from '../utils/ModalActions';

interface Props {}

export const MultipleChoiceModal: FC<Props> = () => {
  const {
    show,
    close,
    config: { title, choices, onSelectedChoice },
  } = useModalContext(ModalTypes.multipleChoice);
  return (
    <ModalLayout title={title || ''}  show={show}>
      <ModalActions onClose={close} choices={choices} onSelectedChoice={onSelectedChoice} />
    </ModalLayout>
  );
};
