import dynamic from 'next/dynamic';
import { ClientTestimonials } from '@codewinglet/components';
const OurServices = dynamic(() => import('./OurServices'));
const OurPortfolio = dynamic(() => import('./OurPortfolio'));
const HeroSection = dynamic(() => import('./HeroSection'));
const OurClient = dynamic(() => import('./OurClient'));
const Technologies = dynamic(() => import('./Technologies'));
const AboutUs = dynamic(() => import('./AboutUs'));

const Home = () => (
  <>
    <HeroSection />
    <AboutUs />
    <OurServices />
    <OurPortfolio />
    <Technologies />
    <OurClient />
    <ClientTestimonials />
  </>
);

export default Home;
