import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { LoadingContextProvider } from '../context/LoadingContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingContextProvider>
      <Head>
        <title>Andrea Chirico - Software Developer</title>
      </Head>
      <Component {...pageProps} />
    </LoadingContextProvider>
  );
}
