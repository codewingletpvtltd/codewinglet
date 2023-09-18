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
import { slickSetting } from './config';
import ClientDetails from './components/ClientDetails';

const ClientTestimonials = () => (
  <div className=' mx-[20px] my-[50px] md:mx-[38px] xl:mx-auto relative'>
    <BackgroundTriangle className='invisible xl:visible absolute right-[60px]' />
    <div className='max-w-screen-xl xl:mx-auto'>
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
          <ClosingQuote />
          <Slider
            settings={slickSetting}
            arrowPosition={{ horizontal: 'bottom', vertical: 'left' }}
          >
            {testimonials.map((data, index) => (
              <div
                key={`testimonials-${data.id}-${index}`}
                className='mb-[36px]'
              >
                <Typography
                  variant='subtitle1'
                  className='md:text-[15px] xl:text-[16px] text-lightBlack'
                >
                  {data.comment}
                </Typography>
                <ClientDetails
                  name={data.client.name}
                  designation={data.client.country}
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
    <BackgroundDonut className='invisible xl:visible absolute xl:top-[20%] 2xl:top-[30%] xl:left-[50px]  2xl:h-[114px] 2xl:w-[114px]' />
  </div>
);

export default ClientTestimonials;
