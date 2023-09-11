import { Consultant } from '@codewinglet/components';
import OurServices from './OurServices';
import OurPortfolio from './OurPortfolio/OurPortfolio';
import HeroSection from './HeroSection/HeroSection';
import OurClient from './OurClient';
import ClientTestimonials from './ClientTestimonials';

const Home = () => (
  <>
    <HeroSection />
    <OurServices />
    <OurPortfolio />
    <OurClient />
    <ClientTestimonials />
    <Consultant />
  </>
);

export default Home;
