import { ClosingQuote, StartQuote } from '@codewinglet/assets';
import SectionHeader from '../SectionHeader/SectionHeader';
import Typography from '../Typography/Typography';
import Slider from '../Slider/Slider';
import { testimonials } from './constants';
import { slickSetting } from './config';
import ClientDetails from './components/ClientDetails';

const ClientTestimonials = () => (
  <div className='sm:py-20 py-10'>
    <div className='max-w-[1410px] w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>Testimonials</>}
        description={
          <>
            We let our work prove beyond expectations for a blissful client
            experience. Here’s a glimpse into what Our Clients have to say about
            us.
          </>
        }
        headingClassName='text-[22px] text-white'
        descriptionClassName=' mt-[9px] text-white !font-300'
      />
      <div
        className=' mt-[50px] sm:h-[481px] h-auto relative'
        style={{
          backgroundImage: `url(${
            require('./testimonial_img.svg').default.src
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'right',
        }}
      >
        <StartQuote className='sm:block hidden' />
        <div className='relative'>
          <Slider
            className='sm:ml-[120px] ml-0'
            settings={slickSetting}
            arrowPosition={{ horizontal: 'bottom', vertical: 'left' }}
          >
            {testimonials.map((data, index) => (
              <div
                key={`testimonials-${data.id}-${index}`}
                className='bg-[#1c1c1c] sm:py-[42px] sm:px-[57px] p-6 sm:!w-[754px] w-full sm:h-auto h-[335px] sm:mt-[170px] mt-[350px]'
              >
                <Typography className='sm:text-body1 text-subtitle2 font-300 text-white'>
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
        <ClosingQuote className='sm:block hidden' />
      </div>
    </div>
  </div>
);

export default ClientTestimonials;
