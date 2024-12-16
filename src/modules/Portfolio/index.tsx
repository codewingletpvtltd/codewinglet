import { ClientTestimonials } from '@codewinglet/components';

import CaseStudies from '../CaseStudy/CaseStudies/CaseStudies';
import Innovation from '../CaseStudy/Innovation/Innovation';
import Mockups from '../CaseStudy/Mockups/Mockups';
import TechnologyUse from '../CaseStudy/TechnologyUse/TechnologyUse';
import LatestArticles from '../Technology/LatestArticles/LatestArticles';
import AboutProject from './AboutProject/AboutProject';
import BusinessGoal from './BusinessGoal/BusinessGoal';
import HeroSection from './HeroSection/HeroSection';
import KeyFeature from './KeyFeature/KeyFeature';
import OurApproach from './OurApproach/OurApproach';
import ProjectChallenge from './ProjectChallenge/projectChallenges';

const Portfolio = () => (
  <>
    <HeroSection />
    <AboutProject />
    <BusinessGoal />
    <KeyFeature />
    <ProjectChallenge />
    <OurApproach />
    <TechnologyUse />
    <Mockups />
    <ClientTestimonials />
    <CaseStudies />
    <Innovation />
    <LatestArticles />
  </>
);

export default Portfolio;
