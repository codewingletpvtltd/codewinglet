import { ClosingQuote, StartQuote } from '@codewinglet/assets';
import SectionHeader from '../SectionHeader/SectionHeader';
import Typography from '../Typography/Typography';
import Slider from '../Slider/Slider';
import { testimonials } from './constants';
import { slickSetting } from './config';
import ClientDetails from './components/ClientDetails';

const ClientTestimonials = () => (
  <div className=' py-20'>
    <div className='max-w-[1410px] w-full px-[15px] mx-auto'>
      <SectionHeader
        title={<>Testimonials</>}
        description={
          <>
            We let our work prove beyond expectations for a blissful client
            experience. <br /> Here’s a glimpse into what Our Clients have to
            say about us.
          </>
        }
        headingClassName='text-[22px] text-white'
        descriptionClassName=' mt-[9px] text-white !font-300'
      />
      <div
        className=' mt-[50px] h-[481px] relative'
        style={{
          backgroundImage: `url(${
            require('./testimonial_img.svg').default.src
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'right',
        }}
      >
        <StartQuote />
        <div className='relative'>
          <Slider
            className='ml-[120px] '
            settings={slickSetting}
            arrowPosition={{ horizontal: 'bottom', vertical: 'left' }}
          >
            {testimonials.map((data, index) => (
              <div
                key={`testimonials-${data.id}-${index}`}
                className='bg-[#1c1c1c] py-[42px] px-[57px] !w-[754px] mt-[170px]'
              >
                <Typography
                  variant='h5'
                  className='!text-[22px] font-300 text-white'
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
        <ClosingQuote />
      </div>
    </div>
  </div>
);

export default ClientTestimonials;
