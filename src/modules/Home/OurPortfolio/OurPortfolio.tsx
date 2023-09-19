'use client';
import Image from 'next/image';
import { memo } from 'react';
import { animated } from '@react-spring/web';
import { BackgroundCircle } from '@codewinglet/assets';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import { portfolio } from './data';
import Heading from './components/Heading';
import useAnimation from './useAnimation';

const OurPortfolio = () => {
  const { cardOneRef, cardOneSprings } = useAnimation();
  const AnimatedImage = animated(Image);

  return (
    <div className='my-[50px] mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto'>
      <SectionHeader
        title={
          <>
            <strong className='font-[800]'>Our</strong> Portfolio
          </>
        }
        description='Our portfolio showcases a spectrum of successful projects, from custom software to network optimization.'
        descriptionTextWrap
      />
      <div className='relative'>
        <BackgroundCircle className='invisible absolute top-[32%] 2xl:visible xl:left-[-12%] 2xl:left-[-20%] 2xl:w-[148px] 2xl:h-[103px]' />
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-[23px] gap-[70px]'>
          {portfolio.map((data, index) => (
            <animated.div key={`portfolio-${data.id}-${index}`}>
              <Heading title={data.title} />
              <AnimatedImage
                src={data.image}
                alt='portfolio image'
                className='w-full h-full'
                style={{
                  objectFit: 'cover',
                  ...cardOneSprings,
                }}
                ref={cardOneRef}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(OurPortfolio);
