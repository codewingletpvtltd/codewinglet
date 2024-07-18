import Image from 'next/image';
import Reveal from '@codewinglet/components/Reveal';
import SectionHeader from '../SectionHeader/SectionHeader';
import Typography from '../Typography/Typography';
import Slider from '../Slider/Slider';
import { testimonials } from './constants';
import { slickSetting } from './config';
import ClientDetails from './components/ClientDetails';

const ClientTestimonials = () => (
  <div className='lg:py-20 md:py-[60px] py-10'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <Reveal>
        <SectionHeader
          title={<>Testimonials</>}
          description={
            <>Here’s a glimpse into what Our Clients have to say about us.</>
          }
          headingClassName='text-[22px] text-white'
          descriptionClassName=' mt-[9px] text-white'
        />
      </Reveal>
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
          className='lg:w-[99px] md:w-[75px] absolute left-0 z-[-1] xl:top-[11rem] lg:top-[20rem] md:top-[6rem] md:block hidden'
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
                  className='z-10 bg-primary lg:py-[42px] lg:px-[57px] md:p-[30px] sm:py-[22px] sm:px-[37px] p-6 lg:!w-[754px] md:!w-[455px] !w-[98%] sm:h-auto h-auto xl:mt-[170px] lg:mt-[350px] md:mt-[180px] sm:mt-[370px] mt-0 lg:mx-0 md:mx-0 !block mx-auto'
                >
                  <Typography className='lg:text-subtitle1Light md:text-[17px] text-tagLight text-white'>
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
          className='lg:w-[99px] md:w-[75px] absolute 2xl:right-[24rem] xl:right-[16rem] md:right-[10rem] sm:right-0 lg:bottom-[-1rem] md:bottom-2.5 z-[-1] md:block hidden'
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
