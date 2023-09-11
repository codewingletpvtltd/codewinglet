import { Consultant } from '@codewinglet/components';
import OurServices from './OurServices';
import OurPortfolio from './OurPortfolio/OurPortfolio';
import HeroSection from './HeroSection/HeroSection';
import OurClient from './OurClient';
import Technologies from './Technologies';

const Home = () => (
  <>
    <HeroSection />
    <OurServices />
    <OurPortfolio />
    <Technologies />
    <OurClient />
    <Consultant />
  </>
);

export default Home;
