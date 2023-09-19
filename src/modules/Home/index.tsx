'use client';
import dynamic from 'next/dynamic';
import { animated, useInView } from '@react-spring/web';
import { ClientTestimonials } from '@codewinglet/components';
import { _config } from '@codewinglet/utils/useAnimation';
const OurServices = dynamic(() => import('./OurServices'));
const OurPortfolio = dynamic(() => import('./OurPortfolio'));
const HeroSection = dynamic(() => import('./HeroSection'));
const OurClient = dynamic(() => import('./OurClient'));
const Technologies = dynamic(() => import('./Technologies'));
const AboutUs = dynamic(() => import('./AboutUs'));

const Home = () => {
  const [fadeLeftRef, fadeLeftSprings] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(-100px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    delay: 800,
    config: _config,
  }));

  const [fadeLeftRef1, fadeLeftSprings1] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(-100px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    config: _config,
  }));

  return (
    <>
      <animated.div
        className='bg-error p-10 m-10'
        ref={fadeLeftRef}
        style={fadeLeftSprings}
      >
        1
      </animated.div>
      <animated.div
        className='bg-error p-10 m-10'
        ref={fadeLeftRef1}
        style={fadeLeftSprings1}
      >
        2
      </animated.div>
      <animated.div className='bg-error p-10 m-10'>3</animated.div>
      <animated.div className='bg-error p-10 m-10'>4</animated.div>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <OurPortfolio />
      <Technologies />
      <OurClient />
      <ClientTestimonials />
    </>
  );
};

export default Home;
