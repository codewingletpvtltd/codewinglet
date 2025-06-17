import { ClientTestimonials } from '@codewinglet/components';

import LatestArticles from '../Technology/LatestArticles/LatestArticles';
import AboutProject from './AboutProject/AboutProject';
import CaseStudies from './CaseStudies/CaseStudies';
import CloudBased from './CloudBased/CloudBased';
import Innovation from './Innovation/Innovation';
import Mockups from './Mockups/Mockups';
import MockupsSlider from './MockupsSlider/MockupsSlider';
import Problem from './Problem/Problem';
import Project from './Project/Project';
import Proposed from './Proposed/Proposed';
import ResultsBenefits from './ResultsBenefits/ResultsBenefits';
import TechnologyUse from './TechnologyUse/TechnologyUse';

const CaseStudy = () => (
  <>
    <CloudBased />
    {/* <CaseStudyMenu /> */}
    <AboutProject />
    <MockupsSlider />
    <Problem />
    <Proposed />
    <TechnologyUse />
    <ResultsBenefits />
    <Mockups />
    <Project />
    <ClientTestimonials />
    <CaseStudies />
    <Innovation />
    <LatestArticles />
  </>
);

export default CaseStudy;
