import { Consultant } from '@codewinglet/components';
import GoogleMap from './GoogleMap/GoogleMap';
import HeroSection from './HeroSection/HeroSection';
import GetInTouch from './GetInTouch';

const ContactUs = () => (
  <>
    <HeroSection />
    <div className='mb-[58px] mt-[-100px]'>
      <GetInTouch />
    </div>
    <GoogleMap />
    <Consultant />
  </>
);

export default ContactUs;
