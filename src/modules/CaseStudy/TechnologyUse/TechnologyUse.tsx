import { SectionHeader } from '@codewinglet/components';

import TechnologyTab from './TechnologyTab';

const TechnologyUse = () => (
  <section
    className='bg-bg xl:py-20 lg:py-14 md:py-[60px] py-10 scroll-mt-32'
    id='technologyies'
  >
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto lg:flex block'>
      <div className='lg:w-[376px] lg:border-r border-headerBoxBorder 2xl:pr-[50px] lg:pr-10 flex-shrink-0'>
        <SectionHeader
          title={<>Technology we used</>}
          description={
            <>
              The brand is a dominant force in the US sports industry, engaging
              over 100 million fans weekly.
            </>
          }
          headingClassName='text-primary'
          descriptionClassName='text-primary md:!text-paragraph1ExtraLight'
        />
      </div>
      <TechnologyTab />
    </section>
  </section>
);

export default TechnologyUse;
