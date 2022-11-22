import React, { useContext } from 'react';
import { LoadingContext } from '../../context/LoadingContext';
import { ModalContext } from '../../context/ModalContext';
import { FormState } from '../../myForm';
import { ModalTypes } from '../../types/modals/Modals';
import { EmailForm } from '../forms/EmailForm';
import { TokenForm } from '../forms/TokenForm';

interface Props extends React.ComponentPropsWithoutRef<'section'> {}

export const Contacts: React.FC<Props> = () => {
  const loading = useContext(LoadingContext);
  const modals = useContext(ModalContext);
  const onSubmit = (formState: FormState) => {
    loading.startLoading();
    setTimeout(() => {
      loading.stopLoading();
      modals.openModal(ModalTypes.info, {
        title: 'PROBLEM',
        content: "this functionality isn't implemented yet",
      });
    }, 1000);
  };

  return (
    <>
      <TokenForm onSubmit={onSubmit} />
      <EmailForm onSubmit={onSubmit} />
    </>
  );
};
