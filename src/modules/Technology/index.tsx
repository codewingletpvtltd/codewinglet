import { ClientTestimonials } from '@codewinglet/components';
import RelatedFaq from '@codewinglet/components/RelatedFaq';
import Industries from '../Home/Industries';
import OurService from '../Home/OurServices';
import OurWorkProcess from '../Home/OurWorkProcess';
import Technology from '../Home/Technology/Technology';
import Blog from './Articles/Articles';
import Benefit from './Benefit/Benefit';
import CodewingletServices from './CodewingletServices/CodewingletServices';
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
    <CodewingletServices />
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
