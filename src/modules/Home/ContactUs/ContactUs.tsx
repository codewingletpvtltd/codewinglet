import { SectionHeader, Typography } from '@codewinglet/components';

const ContactUs = () => (
  <section className='xl:py-20 lg:py-14 pb-10 pt-0 bg-secondary'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <div className='flex lg:flex-row flex-col'>
        <div className='lg:w-[55%] w-full md:m-0 mb-7 xl:pr-0 lg:pr-[30] md:p-0 pr-0'>
          <SectionHeader
            title={<>Contact Us</>}
            description={<>Awesomeness awaits! Connect with our experts.</>}
          />
          <Typography
            variant='body1'
            className='!text-[20px] font-300 text-primary lg:mt-[50px] md:mt-[30px] mt-[50px] mb-[38px] text-justify md:block hidden'
          >
            If you are looking for a way to optimize your business processes and
            operations with data and analytics, talk to our business analytics
            expert now and learn how you can do it.
          </Typography>
          <iframe
            src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=codewinglet&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            id='gmap_canvas'
            className='w-[100%] h-[336px] md:h-[271px] lg:h-[310px] xl:h-[371px] md:block hidden'
          ></iframe>
        </div>
        <div className='lg:w-[45%] w-full'>
          <div
            className='bg-white md:p-[60px] p-[16px] lg:w-[510px] md:w-[75%] w-full float-right md:float-none lg:float-right md:mt-3 block mx-auto'
            data-wow-duration='2s'
          >
            <h3 className='md:text-[30px] text-body2 font-500 relative text-primary mb-2'>
              Get in touch
            </h3>
            <Typography className=' text-primary mb-5 md:text-body2 text-subtitle1'>
              Fill up the form and our Team will get back to you within 24
              hours.
            </Typography>
            <form>
              <span className='w-full block mb-[20px]'>
                <input
                  type='text'
                  className='border border-solid border-lightGray px-6 leading-[46px] h-[62px] w-full text-[16px] transition-all ease-in-out duration-[0.2s] placeholder:text-[#575757] placeholder:text-[14px] placeholder:font-300 focus:shadow-none focus-visible:border-transparent'
                  placeholder='Your name'
                  required
                />
              </span>
              <span className='w-full block mb-[20px]'>
                <input
                  type='email'
                  className='border border-solid border-lightGray px-6 leading-[46px] h-[62px] w-full text-[16px] transition-all ease-in-out duration-[0.2s] placeholder:text-[#575757] placeholder:text-[14px] placeholder:font-300 focus:shadow-none focus-visible:border-transparent'
                  placeholder='Email'
                  required
                />
              </span>
              <span className='w-full block mb-[20px]'>
                <input
                  type='tel'
                  className='border border-solid border-lightGray px-6 leading-[46px] h-[62px] w-full text-[16px] transition-all ease-in-out duration-[0.2s] placeholder:text-[#575757] placeholder:text-[14px] placeholder:font-300 focus:shadow-none focus-visible:border-transparent'
                  placeholder='Phone number'
                  required
                />
              </span>
              <span className='w-full block mb-[20px]'>
                <input
                  type='text'
                  className='border border-solid border-lightGray px-6 leading-[46px] h-[62px] w-full text-[16px] transition-all ease-in-out duration-[0.2s] placeholder:text-[#575757] placeholder:text-[14px] placeholder:font-300 focus:shadow-none focus-visible:border-transparent'
                  placeholder='What service are you looking for?'
                  required
                />
              </span>
              <input
                type='submit'
                name='submit'
                id='submit'
                value='Submit'
                className='bg-black py-[18px] px-[30px] text-white text-[16px] border border-solid border-black table w-full font-600 cursor-pointer hover:bg-white hover:text-primary hover:transition-all hover:duration-[0
                .3s]'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs;
