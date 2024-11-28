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

interface TechnologyPageProps {
  technologyData: any;
}

const TechnologyPage = ({ technologyData }: TechnologyPageProps) => (
  <>
    <TechnologySubMenu title={technologyData?.title?.text} />
    {technologyData?.technologyDetails?.map((componentDetails: any) => {
      switch (componentDetails?.__component) {
        case 'technology.technology-brief-intro':
          return <HeroSection details={componentDetails} />;
        case 'technology.technology-using-companies':
          return <Companies details={componentDetails} />;
        case 'technology.benefits-section':
          return <Benefit details={componentDetails} />;
        case 'technology.technology-services':
          return <Services details={componentDetails} />;
        case 'technology.technology-combinations':
          return <Combination details={componentDetails} />;

        case 'technology.cta-banner':
          return (
            <>
              <WhyChoose />
              <Specialist details={componentDetails} />
            </>
          );
        case 'technology.technology-previous-work':
          return <PreviousWork details={componentDetails} />;
      }
    })}

    <FlexibleModels />
    <OurService />
    <Technology />
    {/* <LatestArticles /> */}
    <ClientTestimonials />
    <RelatedFaq />
  </>
);

export default TechnologyPage;
