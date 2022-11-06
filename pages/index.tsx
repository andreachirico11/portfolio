import { Section } from '../components/layouts/Section';
import { Footer } from '../components/navigation/Footer';
import { Header } from '../components/navigation/Header';
import { About } from '../components/sections/About';
import { Contacts } from '../components/sections/Contacts';
import { Intro } from '../components/sections/Intro';
import { Works } from '../components/sections/Works';
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
      <div
        id='loading'
        className='fixed z-20 h-1 bg-custom-white animate-[loading_2s_linear_infinite] hidden'
      ></div>
      <Header sections={sections.slice(1)} />
      <Section
        section={sections[0]}
        className='bg-custom-green min-h-screen flex items-center flex-col justify-center px-[6rem]'
      >
        <Intro />
      </Section>
      <Section
        section={sections[1]}
        className='flex flex-col items-center justify-between min-h-screen px-5 bg-custom-blue py-[5rem] lg:py-[8rem]'
      >
        <Works />
      </Section>
      <Section
        section={sections[2]}
        className='flex flex-col items-center justify-center min-h-screen px-10 py-20 bg-custom-yellow lg:flex-row-reverse'
      >
        <About />
      </Section>
      <Section
        section={sections[3]}
        className='min-h-screen bg-custom-blue  py-[5rem] flex flex-col justify-center items-center lg:flex-row lg:justify-evenly'
      >
        <Contacts />
      </Section>
      <Footer />
      <a id='downloadAnchor' className='hidden'></a>
    </>
  );
}
