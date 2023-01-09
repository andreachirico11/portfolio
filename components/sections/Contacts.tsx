import React, { useContext } from 'react';
import { DownloadingContext } from '../../context/DownloaderContext';
import { LoadingContext } from '../../context/LoadingContext';
import { ModalContext } from '../../context/ModalContext';
import { useShowAnimationContext } from '../../context/ShowAnimationContext';
import { AnimationType, AvailableColors, ModalTypes } from '../../enums';
import Environments from '../../environments';
import { FormState } from '../../myForm';
import { fetchFile, fetchFileWithoutToken, getModalErrorContent, sendMail } from '../../utils';
import { EmailForm } from '../forms/EmailForm';
import { EmptyForm } from '../forms/EmptyForm';
import { TokenForm } from '../forms/TokenForm';
import { AnchorWithIcon } from '../utils/AnchorWithIcon';
import { SpanFillAnimated } from '../utils/TextFillAnimation';

interface Props extends React.ComponentPropsWithoutRef<'section'> {
  isCvProtected: boolean;
}

export const Contacts: React.FC<Props> = ({ isCvProtected }) => {
  const loading = useContext(LoadingContext);
  const modals = useContext(ModalContext);
  const download = useContext(DownloadingContext);
  const animationRef = useShowAnimationContext<HTMLDivElement>(AnimationType.right);

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
      modals.openModal(ModalTypes.info, {
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
      <EmailForm
        className='w-3/5 text-white desktop:max-w-lg desktop:row-span-2 desktop:ml-auto'
        onSubmit={onEmailSubmit}
      />
      <div
        className='grid w-3/5 gap-4 my-12 desktop:mr-auto desktop:mt-auto desktop:mb-0 desktop:gap-8'
        ref={animationRef}
      >
        <h4 className='text-white h4'>You can find me on</h4>
        <AnchorWithIcon
          href='https://www.linkedin.com/in/andrea-chirico-b5b98b143/'
          label={<SpanFillAnimated label='LinkedIn' color={AvailableColors.goodGreen} />}
          src='/assets/linkedin.png'
        />
        <AnchorWithIcon
          href='https://github.com/andreachirico11'
          label={<SpanFillAnimated label='Github' color={AvailableColors.goodGreen} />}
          src='/assets/github.png'
        />
        <AnchorWithIcon
          href='https://www.facebook.com/andrea.chirico.927'
          label={<SpanFillAnimated label='Facebook' color={AvailableColors.goodGreen} />}
          src='/assets/facebook.png'
        />
      </div>
      {isCvProtected ? (
        <TokenForm onSubmit={onTokenSubmit} />
      ) : (
        <EmptyForm
          className='w-3/5 text-white desktop:mr-auto desktop:mb-auto'
          onSubmit={onUnprotectedSubmit}
        />
      )}
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
