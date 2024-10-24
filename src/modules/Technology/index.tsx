import { ClientTestimonials } from '@codewinglet/components';
import ITService from '@codewinglet/components/ITService/ITService';
import RelatedFaq from '@codewinglet/components/RelatedFaq';

import OurService from '../Home/OurServices';
import Technology from '../Home/Technology/Technology';
import Combination from './Combination/Combination';
import Companies from './Companies/Companies';
import FlexibleModels from './FlexibleModels/FlexibleModels';
import HeroSection from './HeroSection/HeroSection';
import Services from './Services/Services';
import TechnologySubMenu from './TechnologySubMenu/TechnologySubMenu';

const TechnologyPage = () => (
  <>
    <TechnologySubMenu />
    <HeroSection />
    <Companies />
    <ITService />
    <Services />
    <Combination />
    <FlexibleModels />
    <OurService />
    <Technology />
    {/* <LatestArticles /> */}
    <ClientTestimonials />
    <RelatedFaq />
  </>
);

export default TechnologyPage;
