import dynamic from 'next/dynamic';
import { ClientTestimonials } from '@codewinglet/components';
const OurWork = dynamic(() => import('./OurWork'));
const HeroSection = dynamic(() => import('./HeroSection'));
const OurClient = dynamic(() => import('./OurClient'));
const OurServices = dynamic(() => import('./OurServices'));
const AboutUs = dynamic(() => import('./AboutUs'));
const ContactUs = dynamic(() => import('./ContactUs'));
const Industries = dynamic(() => import('./Industries'));
const OurWorkProcess = dynamic(() => import('./OurWorkProcess'));
const Technology = dynamic(() => import('./Technology'));

const Home = () => (
  <>
    <HeroSection />
    <AboutUs />
    <OurServices />
    <Technology />
    <Industries />
    <OurWork />
    <ClientTestimonials />
    <OurWorkProcess />
    <OurClient />
    <ContactUs />
  </>
);

export default Home;
