import { FC } from 'react';
import { ErrorModal } from '../modals/ErrorModal';
import { InfoModal } from '../modals/InfoModal';

export const ModalsContainer: FC = () => (
  <>
    <InfoModal />
    <ErrorModal />
  </>
);
