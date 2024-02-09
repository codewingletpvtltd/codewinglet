import { SectionHeader, Typography } from '@codewinglet/components';

const ContactUs = () => (
  <section className='py-20 bg-secondary'>
    <div className='max-w-[1410px] w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>Contact Us</>}
        description={<>Awesomeness awaits! Connect with our experts.</>}
      />
      <div className='flex mt-12'>
        <div className='w-[55%]'>
          <Typography
            variant='body1'
            className='!text-[20px] font-300 mb-10 text-primary'
          >
            If you are looking for a way to optimize your business processes and
            operations with data and analytics, talk to our business analytics
            expert now and learn how you can do it.
          </Typography>
          <iframe
            src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=codewinglet&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
            id='gmap_canvas'
            className='w-[100%] h-[336px] md:h-[400px] lg:h-[470px]'
          ></iframe>
        </div>
        <div className='w-[45%]'>
          <div
            className='bg-white p-[60px] w-[510px] float-right'
            data-wow-duration='2s'
          >
            <h3 className='text-[30px] font-500 relative text-primary mb-2'>
              Get in touch
            </h3>
            <Typography variant='body2' className=' text-primary mb-5'>
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
                  type='text'
                  className='border border-solid border-lightGray px-6 leading-[46px] h-[62px] w-full text-[16px] transition-all ease-in-out duration-[0.2s] placeholder:text-[#575757] placeholder:text-[14px] placeholder:font-300 focus:shadow-none focus-visible:border-transparent'
                  placeholder='Email'
                  required
                />
              </span>
              <span className='w-full block mb-[20px]'>
                <input
                  type='text'
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
