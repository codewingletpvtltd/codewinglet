import { SectionHeader } from '@codewinglet/components';

import TechnologyTab from './TechnologyTab';

const TechnologyUse = () => (
  <section
    className='bg-bg xl:py-20 lg:py-14 md:py-[60px] py-10 scroll-mt-40'
    id='technology'
  >
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto lg:flex block'>
      <div className='w-[376px] border-r border-headerBoxBorder pr-[50px] flex-shrink-0'>
        <SectionHeader
          title={<>Technology we used</>}
          description={
            <>
              The brand is a dominant force in the US sports industry, engaging
              over 100 million fans weekly.
            </>
          }
          headingClassName='text-primary'
          descriptionClassName='text-primary'
        />
      </div>
      <TechnologyTab />
    </section>
  </section>
);

export default TechnologyUse;
