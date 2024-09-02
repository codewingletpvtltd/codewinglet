import Benefit from '../Benefit/Benefit';
import Combination from '../Combination/Combination';
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/services';

const getTechnologySubModule = (data: any) => {
  const componentName = data?.__component;
  switch (componentName) {
    case 'technology.technology-brief-intro':
      return <HeroSection heroData={data} />;

    case 'technology.benefits-section':
      return <Benefit benefitData={data} />;

    case 'technology.technology-details':
      return <Services servicesData={data} />;

    case 'technology.technology-combinations':
      return <Combination techComboData={data} />;
    default:
      return;
  }
};

export default getTechnologySubModule;
