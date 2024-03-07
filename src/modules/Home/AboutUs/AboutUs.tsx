import { SectionHeader, Typography } from '@codewinglet/components';
import AboutUsCard from './components/AboutUsCard';
import Statistics from './components/Statistics';

const AboutUs = () => (
  <section className='xl:py-20 lg:py-14 py-10 bg-[url("/about-bg-boxline.png")] bg-no-repeat bg-left-bottom'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <SectionHeader
        title={<>About us</>}
        description={<>Future of Your Digital Destiny</>}
        headingClassName='text-white'
        descriptionClassName='text-white'
      />

      <div className='lg:flex block md:mt-[50px] mt-7'>
        <div className='2xl:lg:w-[70%] xl:lg:w-[63%] w-full 2xl:pr-[50px] xl:pr-0 lg:pr-[20px] pr-0'>
          <Typography className='text-subtitle2Light  lg:text-body2 md:text-body1 text-subtitle1 pb-5 md:leading-[36px] text-white '>
            Welcome to Codewinglet, your premier destination for cutting-edge
            software solutions. Specialising in strategic planning, designing,
            and developing world-class software's across diverse industries.
          </Typography>
          <Typography className='text-subtitle2Light  lg:text-body2 md:text-body1 text-subtitle1 text-white '>
            We're the trusted choice of leading engineers and companies
            globally. Our smart minds and smart systems create modern solutions
            that empower your business with innovative software solutions,
            driving unparalleled growth and success.
          </Typography>

          <div className='md:flex block justify-between 2xl:items-center xl:items-start 2xl:mt-[60px] xl:mt-[50px]'>
            <Statistics />
            <div>
              <AboutUsCard
                image={'/assets/AboutUs/building.png'}
                title='Vision, Mission, Excellence'
                description='Guided by Vision, Driven by Mission: Crafting 
                Excellence Together'
              />
            </div>
          </div>
        </div>
        <div className='2xl:lg:w-[30%] xl:lg:w-[37%] w-full 2xl:block xl:flex xl:flex-col xl:items-end lg:block md:flex block last:mb-0'>
          <AboutUsCard
            image={'/assets/AboutUs/pioneering.png'}
            title='Integrity, Quality, Trust: Our Commitment'
            description='Dedicated to delivering value-based service 
            founded on ethics and trustworthiness.'
          />
          <AboutUsCard
            image={'/assets/AboutUs/crafting.png'}
            title='Crafting Reliable Solution, Ensuring Seamless Experiences'
            description='Delivering secure, reliable software for seamless 
            business experiences'
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
