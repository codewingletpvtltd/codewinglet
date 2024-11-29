import { ClientTestimonials } from '@codewinglet/components';

import AboutProject from './AboutProject/AboutProject';
import CaseStudyMenu from './CaseStudyMenu/CaseStudyMenu';
import CloudBased from './CloudBased/CloudBased';
import Innovation from './Innovation/Innovation';
import Mockups from './Mockups/Mockups';
import MockupsSlider from './MockupsSlider/MockupsSlider';
import Problem from './Problem/Problem';
import Project from './Project/Project';
import Proposed from './Proposed/Proposed';
import TechnologyUse from './TechnologyUse/TechnologyUse';

const CaseStudy = () => (
  <>
    <CloudBased />
    <CaseStudyMenu />
    <AboutProject />
    <MockupsSlider />
    <Problem />
    <Proposed />
    <TechnologyUse />
    <Mockups />
    <Project />
    <ClientTestimonials />
    <Innovation />
  </>
);

export default CaseStudy;
