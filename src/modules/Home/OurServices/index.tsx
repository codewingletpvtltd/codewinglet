import { SectionHeader } from '@codewinglet/components';

import Services from './Services';

const OurService = () => (
  <section
    className='xl:py-20 lg:py-14 md:py-[60px] py-10 bg-bg scroll-mt-40'
    id='service'
  >
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
      <SectionHeader
        title={<>Our services</>}
        description={
          <>
            Optimized customized software solutions to empower your niche and
            strategic business growth
          </>
        }
        headingClassName='lg:text-h2'
        descriptionClassName='md:text-subtitle2Light'
      />
      <Services />
    </section>
  </section>
);

export default OurService;
