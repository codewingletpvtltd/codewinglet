/* eslint-disable import/order */
import { ClientTestimonials } from '@codewinglet/components';
import dynamic from 'next/dynamic';
// const OurWork = dynamic(() => import('./OurWork'));
const HeroSection = dynamic(() => import('./HeroSection'));
// const OurClient = dynamic(() => import('./OurClient'));
const OurServices = dynamic(() => import('./OurServices'));
const AboutUs = dynamic(() => import('./AboutUs'));
const ContactUs = dynamic(() => import('./ContactUs'));
const Industries = dynamic(() => import('./Industries'));
const OurWorkProcess = dynamic(() => import('./OurWorkProcess'));
const Technology = dynamic(() => import('./Technology/Technology'));
// const Blog = dynamic(() => import('./Blog'));

const Home = () => (
  <>
    <HeroSection />
    <AboutUs />
    <OurServices />
    <Technology />
    <Industries />
    {/* <OurWork /> */}
    {/* <OurClient /> */}
    {/* <Blog /> */}
    <OurWorkProcess />
    <ClientTestimonials />
    <ContactUs />
  </>
);

export default Home;
