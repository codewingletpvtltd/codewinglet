import { getStrapiMediaFullURL } from '@codewinglet/helper';
import { ClientTestimonials } from '../../components';
import BusinessModel from './BusinessModel';
import Faq from './Faq';
import HeroSection from './HeroSection';
import Service from './Service';
import SignificantAchievement from './SignificantAchievement';
import Technologies from './Technologies';
import WhyChooseUs from './WhyChooseUs';
import { TechnologyProps } from './types';

const Technology: React.FC<TechnologyProps> = ({ data }) => (
  <>
    <HeroSection
      title={data.title}
      description={data.description}
      bannerImageUrl={getStrapiMediaFullURL(
        data.banner_image.data.attributes.url
      )}
      logos={data.who_used}
      technologyName={data.technology_name}
    />
    <Service
      services={data.development_services}
      technologyName={data.technology_name}
    />
    <Technologies />
    <WhyChooseUs />
    <SignificantAchievement technologyName={data.technology_name} />
    <BusinessModel />
    <ClientTestimonials />
    <Faq faqs={data.FAQs} />
    {/* TODO: When the blog page is created at that time we put this section over here */}
    {/* <OurBlog /> */}
  </>
);

export default Technology;
