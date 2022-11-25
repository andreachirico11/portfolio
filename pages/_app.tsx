import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LoadingContextProvider } from '../context/LoadingContext';
import { ModalContextProvider } from '../context/ModalContext';
import { ShowAnimationContextProvider } from '../context/ShowAnimationContext';
import { SectionsProvider } from '../context/ActiveLinkContext';
import { DownloadingContextProvider } from '../context/DownloaderContext';
import { ISection } from '../types';

const sections: ISection[] = [
  { id: 'intro', label: 'intro', active: true },
  { id: 'works', label: 'works', active: false },
  { id: 'about', label: 'about', active: false },
  { id: 'contacts', label: 'contacts', active: false },
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
