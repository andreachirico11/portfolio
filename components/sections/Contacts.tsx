import React, { useContext } from 'react';
import { LoadingContext } from '../../context/LoadingContext';
import { ModalContext } from '../../context/ModalContext';
import Environments from '../../environments';
import { FormState } from '../../myForm';
import { ModalTypes } from '../../types/modals/Modals';
import { sendMail } from '../../utils';
import { EmailForm } from '../forms/EmailForm';
import { TokenForm } from '../forms/TokenForm';

interface Props extends React.ComponentPropsWithoutRef<'section'> {}

export const Contacts: React.FC<Props> = () => {
  const loading = useContext(LoadingContext);
  const modals = useContext(ModalContext);
  const onSubmitMock = (formState: FormState) => {
    loading.startLoading();
    setTimeout(() => {
      loading.stopLoading();
      modals.openModal(ModalTypes.info, {
        title: 'PROBLEM',
        content: "this functionality isn't implemented yet",
      });
    }, 1000);
  };

  const onEmailSubmit = async (formState: FormState) => {
    try {
      loading.startLoading();
      const { name, email, message, privacy } = formState;
      if (!name || !email || !message || !privacy) {
        throw Error();
      }
      await sendMail(name.value, email.value, message.value, privacy.value);
      modals.openModal(ModalTypes.error, {
        title: 'Thank you',
        content: "I'll answer ASAP!!!",
      });
    } catch (error) {
      modals.openModal(ModalTypes.error, {
        title: "There was a problem and the mail wasn't sent",
        content: !!Environments.OWNER_MAIL ? `Please contact me at ${Environments.OWNER_MAIL}` : '',
      });
    } finally {
      loading.stopLoading();
    }
  };

  return (
    <>
      <TokenForm onSubmit={onSubmitMock} />
      <EmailForm onSubmit={onEmailSubmit} />
    </>
  );
};
