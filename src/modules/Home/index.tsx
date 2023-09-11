import { Consultant } from '@codewinglet/components';
import OurServices from './OurServices';
import OurPortfolio from './OurPortfolio/OurPortfolio';
import HeroSection from './HeroSection/HeroSection';
import OurClient from './OurClient';
import ClientTestimonials from './ClientTestimonials';
import Technologies from './Technologies';

const Home = () => (
  <>
    <HeroSection />
    <OurServices />
    <OurPortfolio />
    <Technologies />
    <OurClient />
    <ClientTestimonials />
    <Consultant />
  </>
);

export default Home;
