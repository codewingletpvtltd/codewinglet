import { ClientTestimonials } from '../../components';
import BusinessModel from './BusinessModel';
import Faq from './Faq';
import HeroSection from './HeroSection';
import Service from './Service';
import SignificantAchievement from './SignificantAchievement';
import Technologies from './Technologies';
import WhyChooseUs from './WhyChooseUs';

const Technology = () => (
  <>
    <HeroSection />
    <Service />
    <Technologies />
    <WhyChooseUs />
    <SignificantAchievement />
    <BusinessModel />
    <ClientTestimonials />
    <Faq />
    {/* TODO: When the blog page is created at that time we put this section over here */}
    {/* <OurBlog /> */}
  </>
);

export default Technology;
