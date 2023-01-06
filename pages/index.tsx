import { useContext } from 'react';
import { Section } from '../components/layouts/Section';
import { Header } from '../components/navigation/Header';
import { About } from '../components/sections/About';
import { Contacts } from '../components/sections/Contacts';
import { Intro } from '../components/sections/Intro';
import { ModalsContainer } from '../components/sections/ModalsContainer';
import { Works } from '../components/sections/Works';
import { SectionsContext } from '../context/ActiveLinkContext';
import Environments from '../environments';
import useScrollCtx from '../hooks/useScrollContexts';

type HomeProps = {
  isCvProtected: boolean;
};

export default function Home({ isCvProtected }: HomeProps) {
  useScrollCtx();
  const { sections } = useContext(SectionsContext)!;
  return (
    <div>
      <ModalsContainer />
      <Header />
      <Section
        section={sections()[0]}
        className='!block bg-goodGreen pl-8 pr-2 tablet:px-20 desktop:pl-[20%]'
      >
        <Intro />
      </Section>
      <Section
        section={sections()[1]}
        justify='center'
        className='px-5 py-[5rem] lg:py-[8rem] bg-white  tablet:px-20'
      >
        <Works />
      </Section>
      <Section
        section={sections()[2]}
        className='px-10 py-20 bg-goodGreen desktop:flex-row-reverse desktop:items-center desktop:pl-10'
      >
        <About />
      </Section>
      <Section
        section={sections()[3]}
        className='pt-[4rem] bg-gray pb-4 desktop:grid desktop:grid-cols-2 desktop:justify-items-center desktop:gap-x-40 desktop:gap-y-14'
      >
        <Contacts isCvProtected={isCvProtected} />
      </Section>
      <a id='downloadAnchor' className='hidden'></a>
      {/* workaround because sometimes tailwind does not compile colors */}
      <span className='hidden text-goodGreen'></span>
      <span className='hidden text-gray'></span>
      <span className='hidden text-white'></span>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      isCvProtected: Environments.PROTECTED_CV,
    },
  };
}
