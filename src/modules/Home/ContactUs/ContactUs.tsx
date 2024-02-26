'use client';
import { SectionHeader, Typography } from '@codewinglet/components';

import useGetInTouch from './useGetInTouch';
import Form from './Form';

const ContactUs = () => {
  const { formData, onChangeFormData, onSubmit, isLoading } = useGetInTouch();

  return (
    <section className='lg:py-20 py-10 bg-secondary'>
      <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
        <div className='flex lg:flex-row flex-col'>
          <div className='lg:w-[55%] w-full md:m-0 mb-7 xl:pr-0 lg:pr-[30px] md:p-0 pr-0'>
            <SectionHeader
              title={<>Contact Us</>}
              description={<>Awesomeness awaits! Connect with our experts.</>}
            />
            <Typography
              variant='body1'
              className='!text-[20px] font-300 text-primary lg:mt-[50px] md:mt-[30px] mt-[50px] mb-[38px] text-justify md:block hidden'
            >
              If you are looking for a way to optimize your business processes
              and operations with data and analytics, talk to our business
              analytics expert now and learn how you can do it.
            </Typography>
            <iframe
              src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=codewinglet&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
              id='gmap_canvas'
              className='w-[100%] h-[336px] md:h-[271px] lg:h-[310px] xl:h-[371px] md:block hidden'
            ></iframe>
          </div>
          <div className='lg:w-[45%] w-full'>
            <div
              className='bg-white xl:p-[60px] lg:p-10 md:p-[60px] p-[16px] xl:w-[510px] lg:w-full md:w-[75%] w-full float-right md:float-none lg:float-right md:mt-3 block mx-auto'
              data-wow-duration='2s'
            >
              <h3 className='md:text-[30px] text-body2 font-500 relative text-primary mb-2'>
                Get in touch
              </h3>
              <Typography className=' text-primary mb-5 md:text-body2 text-subtitle1'>
                Fill up the form and our Team will get back to you within 24
                hours.
              </Typography>
              <Form
                formData={formData}
                onChangeFormData={onChangeFormData}
                onSubmit={onSubmit}
                isDisabled={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
