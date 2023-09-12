import { ClientTestimonials } from '../../components';
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
    <ClientTestimonials />
  </>
);

export default Home;
