import { Consultant } from '@codewinglet/components';
import OurService from '@codewinglet/module/Home/OurService';
import OurPortfolio from './OurPortfolio/OurPortfolio';
import HeroSection from './HeroSection/HeroSection';
import OurClient from './OurClient';

const Home = () => (
  <>
    <HeroSection />
    <OurService />
    <OurPortfolio />
    <OurClient />
    {/* <GoogleMap /> */}
    {/* <ClientTestimonials /> */}
    {/* <GetInTouch /> */}
    <Consultant />
  </>
);

export default Home;
