import { ClientTestimonials } from '@codewinglet/components';

import CaseStudies from '../CaseStudy/CaseStudies/CaseStudies';
import Industries from '../Home/Industries';
import LatestArticles from '../Technology/LatestArticles/LatestArticles';
import WhyChoose from '../Technology/WhyChoose/WhyChoose';
import Advantages from './Advantages/Advantages';
import DevelopmentProcess from './DevelopmentProcess/DevelopmentProcess';
import DreamProject from './DreamProject/DreamProject';
import HeroSection from './HeroSection/HeroSection';
import ProvideDevelopment from './ProvideDevelopment/ProvideDevelopment';
import ServiceFAQ from './ServiceFAQ/ServiceFAQ';
import SolutionExpertise from './SolutionExpertise/SolutionExpertise';

const Service = () => (
  <>
    <HeroSection />
    <SolutionExpertise />
    <ProvideDevelopment />
    <WhyChoose />
    <DevelopmentProcess />
    <Advantages />
    <Industries />
    <CaseStudies />
    <ClientTestimonials />
    <DreamProject />
    <LatestArticles />
    <ServiceFAQ />
  </>
);

export default Service;
