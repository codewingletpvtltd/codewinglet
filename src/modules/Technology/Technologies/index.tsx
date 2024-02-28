import Image from 'next/image';
import { SectionHeader, TechnologiesTab } from '@codewinglet/components';

const Technologies = () => (
  <section className='relative overflow-hidden bg-aliceBlue py-[50px] xl:py-[100px]'>
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

      <div className='mt-[37px] xl:mt-[80px]'>
        <TechnologiesTab
          title=''
          count=''
          caption=''
          content=''
          handleChange={() => {}}
          expanded={false}
        />
      </div>
    </section>
    <Image
      className='hidden 2xl:inline-block absolute top-[400px] left-[100px] h-[90px] w-[90px]'
      src={'/assets/icons/StarsSVG.svg'}
      alt='StarsSVG'
      width={90}
      height={90}
    />
  </section>
);

export default Technologies;
