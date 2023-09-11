import { SliceSVG, StarsSVG } from '@codewinglet/assets';
import { SectionHeader, TechnologiesTab } from '@codewinglet/components';

const Technologies = () => (
  <section className='relative overflow-hidden py-[50px] lg:py-[80px] xl:py-[120px] 2xl:py-[138px] 2xl:!pb-[78px] px-[20px]'>
    <section className=' 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:w-full mx-auto'>
      <SectionHeader
        title={
          <>
            <strong className='font-[800]'>Technologies</strong> Client
          </>
        }
        description='Cutting-Edge Technologies We Work With for Optimal Results'
        headingClassName='text-center text-[22px]'
        descriptionClassName='text-center mt-[9px] lg:w-[388px] xl:w-[448px] text-center mx-auto '
      />

      <div className='mt-[38px] bg-white'>
        <TechnologiesTab />
      </div>
    </section>
    <StarsSVG className='hidden xl:inline-block z-[-1] absolute top-[500px] h-[53.2px] w-[53.2px]' />
    <SliceSVG className='hidden xl:inline-block z-[-1] absolute right-0 top-[200px]' />
  </section>
);

export default Technologies;
