'use client';
import { SectionHeader } from '@codewinglet/components';
import Reveal from '@codewinglet/components/Reveal';
import TechnologyTab from './TechnologyTab';

const Technology = () => (
  <section className='bg-black xl:py-20 lg:py-14 md:py-[60px] py-10'>
    <section className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <Reveal>
        <SectionHeader
          title={<>Technologies we work with</>}
          description={
            <>
              Accelerating your product with next-gen technologies gen
              technologies
            </>
          }
          headingClassName='text-white'
          descriptionClassName='text-white'
        />
      </Reveal>
      <TechnologyTab />
    </section>
  </section>
);

export default Technology;
