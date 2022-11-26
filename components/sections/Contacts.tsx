import React, { useContext } from 'react';
import { DownloadingContext } from '../../context/DownloaderContext';
import { LoadingContext } from '../../context/LoadingContext';
import { ModalContext } from '../../context/ModalContext';
import Environments from '../../environments';
import { FormState } from '../../myForm';
import { ModalTypes } from '../../types/modals/Modals';
import { fetchFile, getModalErrorContent, sendMail } from '../../utils';
import { EmailForm } from '../forms/EmailForm';
import { TokenForm } from '../forms/TokenForm';

interface Props extends React.ComponentPropsWithoutRef<'section'> {}

export const Contacts: React.FC<Props> = () => {
  const loading = useContext(LoadingContext);
  const modals = useContext(ModalContext);
  const download = useContext(DownloadingContext);

  const onTokenSubmit = async (formState: FormState) => {
    try {
      loading.startLoading();
      const { passcode } = formState;
      const fileBlob = await fetchFile(passcode.value);
      download(fileBlob, Environments.CV_TITLE);
    } catch (error) {
      modals.openModal(ModalTypes.error, {
        title: 'Something went wrong...',
        content: getModalErrorContent(error),
      });
    } finally {
      loading.stopLoading();
    }
  };

  const onEmailSubmit = async (formState: FormState) => {
    try {
      loading.startLoading();
      const { name, email, message, privacy } = formState;
      await sendMail(name.value, email.value, message.value, privacy.value);
      modals.openModal(ModalTypes.error, {
        title: 'Thank you',
        content: "I'll answer ASAP!!!",
      });
    } catch (error) {
      modals.openModal(ModalTypes.error, {
        title: "There was a problem and the mail wasn't sent",
        content: getModalErrorContent(error),
      });
    } finally {
      loading.stopLoading();
    }
  };

  return (
    <>
      <TokenForm onSubmit={onTokenSubmit} />
      <EmailForm onSubmit={onEmailSubmit} />
    </>
  );
};
