import { SectionHeader } from '@codewinglet/components';

import TechnologyTab from './TechnologyTab';

const Technology = () => (
  <section
    className='bg-black xl:py-20 lg:py-14 md:py-[60px] py-10 scroll-mt-40'
    id='technology'
  >
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
      <SectionHeader
        title={<>Technologies we work with</>}
        description={<>Accelerating your product with next-gen technologies</>}
        headingClassName='text-white lg:text-h2'
        descriptionClassName='text-white md:text-subtitle2Light'
      />
      <TechnologyTab />
    </section>
  </section>
);

export default Technology;
