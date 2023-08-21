import { Consultant } from '@codewinglet/components';
import OurPortfolio from './OurPortfolio/OurPortfolio';
import HeroSection from './HeroSection/HeroSection';
import OurClient from './OurClient';

const Home = () => (
  <>
    <HeroSection />
    <OurPortfolio />
    <OurClient />
    {/* <GoogleMap /> */}
    {/* <ClientTestimonials /> */}
    <Consultant />
  </>
);

export default Home;
