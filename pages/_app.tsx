import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LoadingContextProvider } from '../context/LoadingContext';
import { ModalContextProvider } from '../context/ModalContext';
import { ShowAnimationContextProvider } from '../context/ShowAnimationContext';
import { SectionsProvider } from '../context/ActiveLinkContext';
import { DownloadingContextProvider } from '../context/DownloaderContext';
import { ISection } from '../types';
import { Sections } from '../enums';

const sections: ISection[] = [
  { id: Sections.intro, label: Sections.intro, active: true },
  { id: Sections.works, label: Sections.works, active: false },
  { id: Sections.about, label: Sections.about, active: false },
  { id: Sections.contacts, label: Sections.contacts, active: false },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SectionsProvider actualSections={sections}>
      <ShowAnimationContextProvider>
        <ModalContextProvider>
          <LoadingContextProvider>
            <DownloadingContextProvider>
              <Head>
                <title>Andrea Chirico - Software Developer</title>
              </Head>
              <Component {...pageProps} />
            </DownloadingContextProvider>
          </LoadingContextProvider>
        </ModalContextProvider>
      </ShowAnimationContextProvider>
    </SectionsProvider>
  );
}
