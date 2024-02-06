import dynamic from 'next/dynamic';
import { ClientTestimonials } from '@codewinglet/components';
const OurServices = dynamic(() => import('./OurServices'));
const OurPortfolio = dynamic(() => import('./OurPortfolio'));
const HeroSection = dynamic(() => import('./HeroSection'));
const OurClient = dynamic(() => import('./OurClient'));
const Technologies = dynamic(() => import('./Technologies'));
const AboutUs = dynamic(() => import('./AboutUs'));
const ContactUs = dynamic(() => import('./ContactUs'));
const Industries = dynamic(() => import('./Industries'));
const WorkProcess = dynamic(() => import('./WorkProcess'));

const Home = () => (
  <>
    <HeroSection />
    <AboutUs />
    <WorkProcess />
    <Industries />
    <Technologies />
    <OurServices />
    <OurPortfolio />
    <OurClient />
    <ClientTestimonials />
    <ContactUs />
  </>
);

export default Home;
