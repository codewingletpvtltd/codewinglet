import { BackgroundCircle, StarsSVG } from '@codewinglet/assets';
import { SectionHeader, TechnologiesTab } from '@codewinglet/components';

const Technologies = () => (
  <section className='relative overflow-hidden py-[50px] lg:py-[80px] xl:py-[120px] 2xl:py-[138px] 2xl:!pb-[78px]'>
    <section className='mx-[20px] md:mx-[38px] max-w-screen-xl xl:mx-auto'>
      <SectionHeader
        title={
          <>
            <strong className='font-[800]'>Technologies</strong> We Work With
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
    <StarsSVG className='hidden 2xl:inline-block z-[-1] absolute top-[400px] left-[100px] h-[90px] w-[90px] ' />
    <BackgroundCircle className='invisible absolute top-[100px] 2xl:visible xl:right-[100px] 2xl:w-[148px] 2xl:h-[103px]' />
  </section>
);

export default Technologies;
