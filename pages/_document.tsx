import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Montserrat:wght@400;700&display=swap'
          rel='stylesheet'
        />

        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='android-chrome.512x512.png' sizes='512x512' href='/android-chrome.512x512.png' />
        <link rel='android-chrome.192x192.png' sizes='192x192' href='/android-chrome.192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
