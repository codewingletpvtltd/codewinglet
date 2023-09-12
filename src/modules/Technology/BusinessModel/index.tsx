import { BackgroundDonut } from '@codewinglet/assets';
import { BusinessModelTab, SectionHeader } from '@codewinglet/components';

const BusinessModel = () => (
  <div className='max-w-screen-xl lg:mx-auto relative'>
    <BackgroundDonut className='invisible xl:visible absolute xl:top-[20%] 2xl:top-[30%] xl:left-[-50px] 2xl:left-[-280px] 2xl:h-[114px] 2xl:w-[114px]' />
    <div className='mx-[20px] my-[50px] md:my-[80px] md:mx-[38px]'>
      <SectionHeader
        title={
          <>
            <strong className='font-800'>Our Business</strong> Model
          </>
        }
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        wrapperClassName='flex flex-col items-center mb-[30px]'
        descriptionClassName='text-center'
      />
      <BusinessModelTab />
    </div>
  </div>
);

export default BusinessModel;
