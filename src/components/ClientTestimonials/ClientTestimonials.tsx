import { ClosingQuote, StartQuote } from '@codewinglet/assets';
import SectionHeader from '../SectionHeader/SectionHeader';
import Typography from '../Typography/Typography';
import Slider from '../Slider/Slider';
import { testimonials } from './constants';
import { slickSetting } from './config';
import ClientDetails from './components/ClientDetails';

const ClientTestimonials = () => (
  <div className='md:py-20 py-10'>
    <div className='container w-full px-[15px] mx-auto'>
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
        className='md:mt-12 mt-7 xl:h-[481px] h-auto relative'
        style={{
          backgroundImage: `url(${
            require('../../assets/testimonial/testimonial_img.svg').default.src
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'right',
        }}
      >
        <StartQuote />
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
                  className='bg-primary lg:py-[42px] lg:px-[57px] md:p-[30px] sm:py-[22px] sm:px-[37px] p-6 lg:!w-[754px] md:!w-[570px] !w-[100%] sm:h-auto h-auto xl:mt-[170px] lg:mt-[350px] md:mt-[240px] sm:mt-[370px] mt-[350px] lg:mx-0 !block mx-auto'
                >
                  <Typography className='lg:text-body1 md:text-[17px] text-subtitle2 font-300 text-white'>
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
        <ClosingQuote />
      </div>
    </div>
  </div>
);

export default ClientTestimonials;
