import { FC } from 'react';
import { ErrorModal } from '../modals/ErrorModal';
import { InfoModal } from '../modals/InfoModal';
import { MultipleChoiceModal } from '../modals/MultipleChoiceModal';

export const ModalsContainer: FC = () => (
  <>
    <InfoModal />
    <ErrorModal />
    <MultipleChoiceModal />
  </>
);
