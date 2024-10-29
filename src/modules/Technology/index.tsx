import { ClientTestimonials } from '@codewinglet/components';
import RelatedFaq from '@codewinglet/components/RelatedFaq';

import OurService from '../Home/OurServices';
import Technology from '../Home/Technology/Technology';
import Benefit from './Benefit/Benefit';
import Combination from './Combination/Combination';
import Companies from './Companies/Companies';
import FlexibleModels from './FlexibleModels/FlexibleModels';
import HeroSection from './HeroSection/HeroSection';
import PreviousWork from './PreviousWork/PreviousWork';
import Services from './Services/services';
import Specialist from './Specialist/Specialist';
import TechnologySubMenu from './TechnologySubMenu/TechnologySubMenu';
import WhyChoose from './WhyChoose/WhyChoose';

const TechnologyPage = () => (
  <>
    <TechnologySubMenu />
    <HeroSection />
    <Companies />
    <Benefit />
    <Services />
    <Combination />
    <WhyChoose />
    <Specialist />
    <PreviousWork />
    <FlexibleModels />
    <OurService />
    <Technology />
    {/* <LatestArticles /> */}
    <ClientTestimonials />
    <RelatedFaq />
  </>
);

export default TechnologyPage;
