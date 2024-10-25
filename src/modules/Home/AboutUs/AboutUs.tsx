'use client';
import { SectionHeader, Typography } from '@codewinglet/components';

import AboutUsCard from './components/AboutUsCard';
import Statistics from './components/Statistics';

export default function AboutUs() {
  return (
    <section className='xl:py-20 lg:py-14 md:py-[60px] py-10 bg-[url("/about-boxline.webp")] bg-no-repeat bg-left-bottom h-auto md:h-[80.5rem] lg:h-auto'>
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
        <SectionHeader
          title={<>About us</>}
          description={<>Future of your digital destiny</>}
          headingClassName='text-white'
          descriptionClassName='text-white lg:!text-subtitle2Light md:!text-subtitle2Light !text-tagExtraLight'
        />

        <div className='relative lg:flex block lg:mt-[50px] md:mt-10 mt-6'>
          <div className='lg:pr-10 md:pr-5 pr-0'>
            <Typography className='xl:text-subtitle2Light lg:text-body2 md:text-subtitle2Light text-tagLight lg:md-5 md:pb-[22px] pb-[15px] text-white'>
              Welcome to Codewinglet, your premier destination for cutting-edge
              software solutions. Specialising in strategic planning, designing,
              and development world-class software's across diverse industries.
            </Typography>

            <Typography className='xl:text-subtitle2Light lg:text-body2 md:text-subtitle2Light text-tagLight text-white '>
              We're the trusted choice of leading engineers and companies
              globally. Our smart minds and smart systems create modern
              solutions that empower your business with innovative software
              solutions, driving unparalleled growth and success.
            </Typography>

            <div className='lg:flex block justify-between 2xl:items-center xl:items-start 2xl:mt-[109px] xl:mt-[30px] md:mt-10 mt-0 lg:w-full md:w-6/12 w-full'>
              <Statistics />

              <div>
                <AboutUsCard
                  image={'/assets/AboutUs/vision.webp'}
                  title='Vision, Mission, Excellence'
                  description='Guided by vision, driven by mission: Crafting 
                excellence together'
                />
              </div>
            </div>
          </div>
          <div className='2xl:block xl:flex md:flex-col md:items-end lg:block flex flex-col last:mb-0 lg:relative md:absolute sm:relative md:bottom-0 md:right-0  md:top-[32%] lg:gap-0 md:gap-[25px] gap-5 md:mt-0 mt-5'>
            <AboutUsCard
              image={'/assets/AboutUs/integrity.webp'}
              title='Integrity, Quality, Trust: Our Commitment'
              description='Dedicated to delivering value-based service 
            founded on ethics and trustworthiness.'
            />

            <AboutUsCard
              image={'/assets/AboutUs/solution.webp'}
              title='Crafting Reliable Solution, Ensuring Seamless Experiences'
              description='Delivering secure, reliable software for seamless 
            business experiences'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
