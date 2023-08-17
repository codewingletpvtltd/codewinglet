import Image from 'next/image';
import {
  BackgroundDonut,
  BackgroundTriangle,
  ClosingQuote,
} from '@codewinglet/assets';
import Client from '@codewinglet/assets/client.svg';
import SectionHeader from '../SectionHeader/SectionHeader';
import Typography from '../Typography/Typography';
import Slider from '../Slider/Slider';
import { testimonials } from './constants';
import { ClientDetails } from './components';
import { slickSetting } from './config';

const ClientTestimonials = () => (
  <div className='max-w-screen-xl mx-[20px] my-[50px] md:mx-[38px] xl:mx-auto relative'>
    <BackgroundTriangle className='invisible xl:visible absolute right-[-100px] top-[15px] 2xl:right-[-300px] 2xl:h-[98px] 2xl:w-[111px]' />
    <SectionHeader
      title={
        <>
          <strong className='font-[800]'>Client</strong> Testimonials
        </>
      }
      description='Clients feedback'
      headingClassName='text-center'
      descriptionClassName='text-center'
    />
    <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px] mt-[93px]'>
      <div className='relative'>
        <BackgroundDonut className='invisible xl:visible absolute top-[30%] left-[-120px] 2xl:left-[-240px] 2xl:h-[114px] 2xl:w-[114px]' />
        <ClosingQuote />
        <Slider
          settings={slickSetting}
          arrowPosition={{ horizontal: 'bottom', vertical: 'left' }}
        >
          {testimonials.map((data, index) => (
            <div key={`testimonials-${data.id}-${index}`} className='mb-[36px]'>
              <Typography
                variant='body2'
                className='md:text-[25px] xl:text-[30px]'
              >
                {data.comment}
              </Typography>
              <ClientDetails
                name={data.client.name}
                designation={data.client.designation}
              />
            </div>
          ))}
        </Slider>
      </div>
      <Image
        src={Client}
        alt='Client Testimonals'
        className='w-[100%] md:h-[100%] md:w-auto place-self-end'
      />
    </div>
  </div>
);

export default ClientTestimonials;
