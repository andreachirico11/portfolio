import { Footer } from '../components/navigation/Footer';
import { Header } from '../components/navigation/Header';
import { AboutSection } from '../components/sections/AboutSection';
import { ContactsSection } from '../components/sections/ContactsSection';
import { HomeSection } from '../components/sections/HomeSection';
import { WorksSection } from '../components/sections/WorksSection';
import { ISection } from '../types';

const sections: ISection[] = [
  { id: '#works', label: 'works' },
  { id: '#about', label: 'about' },
  { id: '#contacts', label: 'contacts' },
];

export default function Home() {
  return (
    <>
      <div
        id='loading'
        className='fixed z-20 h-1 bg-custom-white animate-[loading_2s_linear_infinite] hidden'
      ></div>
      <Header sections={sections} />
      <HomeSection />
      <WorksSection />
      <AboutSection />
      <ContactsSection />
      <Footer />
      <a id='downloadAnchor' className='hidden'></a>
    </>
  );
}
