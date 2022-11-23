import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LoadingContextProvider } from '../context/LoadingContext';
import { ModalContextProvider } from '../context/ModalContext';
import { ShowAnimationContextProvider } from '../context/ShowAnimationContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShowAnimationContextProvider>
      <ModalContextProvider>
        <LoadingContextProvider>
          <Head>
            <title>Andrea Chirico - Software Developer</title>
          </Head>
          <Component {...pageProps} />
        </LoadingContextProvider>
      </ModalContextProvider>
    </ShowAnimationContextProvider>
  );
}
