import React, { useContext } from 'react';
import { DownloadingContext } from '../../context/DownloaderContext';
import { LoadingContext } from '../../context/LoadingContext';
import { ModalContext } from '../../context/ModalContext';
import { ModalTypes } from '../../enums';
import Environments from '../../environments';
import { FormState } from '../../myForm';
import { fetchFile, fetchFileWithoutToken, getModalErrorContent, sendMail } from '../../utils';
import { EmailForm } from '../forms/EmailForm';
import { EmptyForm } from '../forms/EmptyForm';
import { TokenForm } from '../forms/TokenForm';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  isCvProtected: boolean;
}

export const Contacts: React.FC<Props> = ({ isCvProtected }) => {
  const loading = useContext(LoadingContext);
  const modals = useContext(ModalContext);
  const download = useContext(DownloadingContext);

  const fileDownloadShared = async (fetchCb: () => Promise<Blob>) => {
    try {
      loading.startLoading();
      const fileBlob = await fetchCb();
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

  const onTokenSubmit = async (formState: FormState) => {
    fileDownloadShared(() => {
      const { passcode } = formState;
      return fetchFile(passcode.value);
    });
  };

  const onUnprotectedSubmit = async () => {
    fileDownloadShared(fetchFileWithoutToken);
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
      {isCvProtected ? (
        <TokenForm onSubmit={onTokenSubmit} />
      ) : (
        <EmptyForm onSubmit={onUnprotectedSubmit} />
      )}
      <EmailForm onSubmit={onEmailSubmit} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      protectedCv: Environments.PROTECTED_CV,
    },
  };
}
