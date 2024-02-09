import { BusinessModelTab, SectionHeader } from '@codewinglet/components';

const BusinessModel = () => (
  <div className='max-w-screen-xl lg:mx-auto relative'>
    <div className='mx-[20px] my-[50px] md:my-[80px] md:mx-[38px]'>
      <SectionHeader
        title={
          <>
            <strong className='font-800'>Our Business</strong> Model
          </>
        }
        description='How We Work and Thrive.'
        wrapperClassName='flex flex-col items-center mb-[30px]'
        descriptionClassName='text-center'
      />
      <BusinessModelTab />
    </div>
  </div>
);

export default BusinessModel;
