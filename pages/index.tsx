import { Section } from '../components/layouts/Section';
import { Footer } from '../components/navigation/Footer';
import { Header } from '../components/navigation/Header';
import { About } from '../components/sections/About';
import { Contacts } from '../components/sections/Contacts';
import { Intro } from '../components/sections/Intro';
import { ModalsContainer } from '../components/sections/ModalsContainer';
import { Works } from '../components/sections/Works';
import { LoadBar } from '../components/utils/LoadBar';
import { ISection } from '../types';

const sections: ISection[] = [
  { id: 'intro', label: 'intro' },
  { id: 'works', label: 'works' },
  { id: 'about', label: 'about' },
  { id: 'contacts', label: 'contacts' },
];

export default function Home() {
  return (
    <>
      <LoadBar />
      <ModalsContainer />
      <Header sections={sections.slice(1)} />
      <Section section={sections[0]} className='px-[6rem] bg-custom-green'>
        <Intro />
      </Section>
      <Section
        section={sections[1]}
        justify='between'
        className='px-5 py-[5rem] lg:py-[8rem] bg-custom-blue'
      >
        <Works />
      </Section>
      <Section section={sections[2]} className='px-10 py-20 lg:flex-row-reverse bg-custom-yellow'>
        <About />
      </Section>
      <Section
        section={sections[3]}
        className='py-[5rem] lg:flex-row lg:justify-evenly bg-custom-blue'
      >
        <Contacts />
      </Section>
      <Footer />
      <a id='downloadAnchor' className='hidden'></a>
    </>
  );
}
