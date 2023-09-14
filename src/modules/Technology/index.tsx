import { ClientTestimonials } from '../../components';
import BusinessModel from './BusinessModel';
import Faq from './Faq';
import HeroSection from './HeroSection';
import OurBlog from './OurBlog/OurBlog';
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
    <OurBlog />
  </>
);

export default Technology;
