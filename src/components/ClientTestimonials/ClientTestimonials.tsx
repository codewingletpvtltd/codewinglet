import Image from 'next/image';

import SectionHeader from '../SectionHeader/SectionHeader';
import Slider from '../Slider/Slider';
import Typography from '../Typography/Typography';
import ClientDetails from './components/ClientDetails';
import { slickSetting } from './config';
import { testimonials } from './constants';

const ClientTestimonials = () => (
  <div className='lg:py-20 md:py-[60px] py-10 scroll-mt-40' id='testimonial'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
      <SectionHeader
        title={<>Testimonials</>}
        description={
          <>Here’s a glimpse into what Our Clients have to say about us.</>
        }
        headingClassName='text-white lg:text-h2'
        descriptionClassName='mt-1.5 text-white md:text-subtitle2Light'
      />
      <div
        className='md:mt-10 mt-7 xl:h-[481px] h-auto relative lg:[background-size:_auto] md:[background-size:_70%] sm:[background-size:_auto] client_img'
        style={{
          backgroundImage: 'url("/assets/testimonial/testimonial_img.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'right',
        }}
      >
        <Image
          className='block md:hidden w-full'
          src={'/assets/testimonial/testimonialImg.png'}
          alt='testimonialImg'
          width={340}
          height={215}
        />
        <Image
          className='lg:w-[99px] md:w-[75px] absolute left-0 z-[-1] xl:top-44 lg:top-80 md:top-24 md:block hidden'
          src={'/assets/icons/StartQuote.svg'}
          alt='StartQuote'
          width={100}
          height={75}
        />
        <div className='relative'>
          <Slider
            className='lg:ml-[120px] ml-0'
            settings={slickSetting}
            arrowPosition={{ horizontal: 'bottom', vertical: 'left' }}
          >
            {testimonials.map((data, index) => (
              <div key={index}>
                <div
                  key={`testimonials-${data.id}-${index}`}
                  className='z-10 bg-primary lg:p-10 md:p-[30px] sm:py-[22px] sm:px-[37px] p-6 lg:!w-[754px] md:!w-[455px] !w-[98%] sm:h-auto h-auto xl:mt-[170px] lg:mt-[350px] md:mt-[180px] sm:mt-[370px] mt-0 lg:mx-0 md:mx-0 !block mx-auto'
                >
                  <Typography className='lg:text-subtitle2Light md:text-[17px] text-tagLight text-white'>
                    {data.comment}
                  </Typography>
                  <ClientDetails
                    name={data.client.name}
                    designation={data.client.country}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Image
          className='lg:w-[99px] md:w-[75px] absolute 2xl:right-[24rem] xl:right-64 md:right-40 sm:right-0 lg:-bottom-4 md:bottom-2.5 z-[-1] md:block hidden'
          src={'/assets/icons/ClosingQuote.svg'}
          alt='ClosingQuote'
          width={100}
          height={75}
        />
      </div>
    </div>
  </div>
);

export default ClientTestimonials;
