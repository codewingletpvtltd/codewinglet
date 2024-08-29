'use client';
import { SectionHeader } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import Services from './Services';

const OurService = () => (
  <section
    className='xl:py-20 lg:py-14 md:py-[60px] py-10 bg-bg scroll-mt-40'
    id='service'
  >
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <Reveal>
        <SectionHeader
          title={<>Our services</>}
          description={
            <>
              Optimized customized software solutions to empower your niche and
              strategic business growth
            </>
          }
          headingClassName=''
          descriptionClassName=''
        />
      </Reveal>
      <Services />
    </section>
  </section>
);

export default OurService;
