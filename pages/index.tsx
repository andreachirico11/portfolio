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
import useScrollContexts from '../hooks/useSrollContexts';

type HomeProps = {
  isCvProtected: boolean;
};

export default function Home({ isCvProtected }: HomeProps) {
  useScrollContexts();
  const { sections } = useContext(SectionsContext)!;
  return (
    <div>
      <ModalsContainer />
      <Header />
      <Section section={sections()[0]} className='!block bg-goodGreen pl-8 pr-2'>
        <Intro />
      </Section>
      <Section
        section={sections()[1]}
        justify='center'
        className='px-5 py-[5rem] lg:py-[8rem] bg-white'
      >
        <Works />
      </Section>
      <Section section={sections()[2]} className='px-10 py-20 lg:flex-row-reverse bg-goodGreen'>
        <About />
      </Section>
      <Section section={sections()[3]} className='pt-[4rem] bg-gray pb-4'>
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
