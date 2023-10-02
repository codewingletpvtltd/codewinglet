import { ClientTestimonials } from '../../components';
import BusinessModel from './BusinessModel';
import Faqs from './Faqs';
import HeroSection from './HeroSection';
import Services from './Services';
import SignificantAchievement from './SignificantAchievement';
import Technologies from './Technologies';
import WhyChooseUs from './WhyChooseUs';
import { TechnologyProps } from './types';

const Technology: React.FC<TechnologyProps> = ({ data }) => (
  <>
    <HeroSection
      title={data.title}
      description={data.description}
      bannerImage={data.banner_image}
      logos={data.who_used}
      technologyName={data.technology_name}
    />
    <Services
      services={data.development_services}
      technologyName={data.technology_name}
    />
    <Technologies />
    <WhyChooseUs />
    <SignificantAchievement technologyName={data.technology_name} />
    <BusinessModel />
    <ClientTestimonials />
    <Faqs faqs={data.FAQs} />
    {/* TODO: When the blog page is created at that time we put this section over here */}
    {/* <OurBlog /> */}
  </>
);

export default Technology;
