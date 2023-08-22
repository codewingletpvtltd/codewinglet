import { Consultant } from '@codewinglet/components';
import OurServices from './OurServices';
import OurPortfolio from './OurPortfolio/OurPortfolio';
import HeroSection from './HeroSection/HeroSection';
import OurClient from './OurClient';

const Home = () => (
  <>
    <HeroSection />
    <OurServices />
    <OurPortfolio />
    <OurClient />
    <Consultant />
  </>
);

export default Home;
