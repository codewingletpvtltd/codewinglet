/* eslint-disable import/order */
import { ClientTestimonials } from '@codewinglet/components';
import ITService from '@codewinglet/components/ITService/ITService';
import RelatedFaq from '@codewinglet/components/RelatedFaq';
import Industries from '../Home/Industries';
import OurService from '../Home/OurServices';
import OurWorkProcess from '../Home/OurWorkProcess';
import Technology from '../Home/Technology/Technology';
import Blog from './Articles/Articles';
import Benefit from './Benefit/Benefit';
import Combination from './Combination/Combination';
import Companies from './Companies/Companies';
import HeroSection from './HeroSection/HeroSection';
import Insights from './Insights/Insights';
import Services from './Services/services';
import TechnologySubMenu from './TechnologySubMenu/TechnologySubMenu';

const TechnologyPage = () => (
  <>
    <TechnologySubMenu />
    <HeroSection />
    <Benefit />
    <Companies />
    <Combination />
    <Services />
    <ITService />
    <Insights />
    <OurService />
    <Technology />
    <Industries />
    <OurWorkProcess />
    <ClientTestimonials />
    <Blog />
    <RelatedFaq />
  </>
);

export default TechnologyPage;
