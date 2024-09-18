import dynamic from 'next/dynamic';

import { ClientTestimonials } from '@codewinglet/components';
const HeroSection = dynamic(() => import('./HeroSection'));
const OurServices = dynamic(() => import('./OurServices'));
const AboutUs = dynamic(() => import('./AboutUs'));
const ContactUs = dynamic(() => import('./ContactUs'));
const Industries = dynamic(() => import('./Industries'));
const OurWorkProcess = dynamic(() => import('./OurWorkProcess'));
const Technology = dynamic(() => import('./Technology/Technology'));

const Home = () => (
  <>
    <HeroSection />
    <AboutUs />
    <OurServices />
    <Technology />
    <Industries />
    <OurWorkProcess />
    <ClientTestimonials />
    <ContactUs />
  </>
);

export default Home;
