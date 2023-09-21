import Head from 'next/head';
import { useContext } from 'react';
import { Section } from '../components/layouts/Section';
import { Header } from '../components/navigation/Header';
import { About } from '../components/sections/About';
import { Contacts } from '../components/sections/Contacts';
import { Intro } from '../components/sections/Intro';
import { ModalsContainer } from '../components/sections/ModalsContainer';
import { Works } from '../components/sections/Works';
import { SectionsContext } from '../context/ActiveLinkContext';
import { Sections } from '../enums';
import Environments from '../environments';
import useScrollCtx from '../hooks/useScrollContexts';
import { AppSettingsContextProvider, IAppSettings } from '../context/AppSettingsContext';

const VERSION = '1.1.4'; // TODO find a better way to show version

export default function Home({appSettings}: {appSettings: IAppSettings}) {
  useScrollCtx();
  const { sectionById } = useContext(SectionsContext)!;
  return (
    <AppSettingsContextProvider appSettings={appSettings}>
      <Head>
        <meta name='version' content={VERSION}></meta>
        {!appSettings.production && <meta name='description' content='development' />}
      </Head>
      <ModalsContainer />
      <Header />
      <Section
        section={sectionById(Sections.intro)}
        className='!block pl-8 pr-2 tablet:px-20 desktop:pl-[10%] xlDesktop:pl-[15%]'
        hasCurve
      >
        <Intro />
      </Section>
      <Section
        section={sectionById(Sections.works)}
        className='px-5 py-[5rem] lg:py-[8rem] tablet:px-20'
      >
        <Works />
      </Section>
      <Section
        section={sectionById(Sections.about)}
        className='px-10 py-20 desktop:flex-row-reverse desktop:items-center desktop:pl-10'
        hasCurve
      >
        <About />
      </Section>
      <Section
        section={sectionById(Sections.contacts)}
        className='pt-[4rem] pb-4 desktop:grid desktop:grid-cols-2 desktop:justify-items-center desktop:gap-x-40 desktop:gap-y-14'
      >
        <Contacts/>
      </Section>
      <a id='downloadAnchor' className='hidden'></a>
    </AppSettingsContextProvider>
  );
}

export async function getStaticProps() {
  const {
    PRODUCTION: production,
    PROTECTED_CV: isCvProtected,
    AVAILABLE_LOCALES: availableLocales,
  } = Environments;
  console.log('\n');
  const locales = availableLocales.reduce((acc, { label }) => acc + label + ' ', '');
  console.table({ production, isCvProtected, locales});
  console.log('\n');
  const appSettings: IAppSettings = { production, isCvProtected, availableLocales };
  return {
    props: { appSettings },
  };
}
