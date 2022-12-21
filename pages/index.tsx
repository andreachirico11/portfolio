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
      <Section section={sections()[0]} className='!block bg-goodGreen'>
        <Intro />
      </Section>
      <Section
        section={sections()[1]}
        justify='between'
        className='px-5 py-[5rem] lg:py-[8rem] bg-white'
      >
        <Works />
      </Section>
      <Section section={sections()[2]} className='px-10 py-20 lg:flex-row-reverse bg-goodGreen'>
        <About />
      </Section>
      <Section section={sections()[3]} className='py-[5rem] lg:flex-row lg:justify-evenly bg-gray'>
        <Contacts isCvProtected={isCvProtected} />
      </Section>
      {/* <Footer /> */}
      <a id='downloadAnchor' className='hidden'></a>
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
