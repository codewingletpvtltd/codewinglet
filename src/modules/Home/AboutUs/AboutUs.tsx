import { pioneering, crafting, building } from '@codewinglet/assets/AboutUs';
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
        <div className='2xl:lg:w-[70%] xl:lg:w-[60%] w-full 2xl:pr-[75px] xl:p-0 lg:pr-[20px] pr-0'>
          <Typography className='2xl:text-body1 xl:text-h5 lg:text-body2 md:text-body1 text-subtitle1 pb-[30px] md:leading-[40px] text-white md:text-justify text-left'>
            Welcome to Codewinglet, your premier destination for cutting-edge
            software solutions. Specialising in strategic planning, designing,
            and developing world-class software's across diverse industries.
          </Typography>
          <Typography className='2xl:text-body1 xl:text-h5 lg:text-body2 md:text-body1 text-subtitle1 md:leading-[40px] text-white md:text-justify text-left'>
            We're the trusted choice of leading engineers and companies
            globally. Our smart minds and smart systems create modern solutions
            that empower your business with innovative software solutions,
            driving unparalleled growth and success.
          </Typography>

          <div className='md:flex block justify-between items-center 2xl:mt-[98px] xl:mt-[48px]'>
            <Statistics />
            <div>
              <AboutUsCard
                image={building}
                title='"Vision, Mission, Excellence"'
                description='Guided by Vision, Driven by Mission: Crafting 
                Excellence Together'
              />
            </div>
          </div>
        </div>
        <div className='2xl:lg:w-[30%] xl:lg:w-[40%] w-full 2xl:block xl:flex xl:flex-col xl:items-end lg:block md:flex block md:gap-6'>
          <AboutUsCard
            image={pioneering}
            title='"Integrity, Quality, Trust: Our 
            Commitment."'
            description='Dedicated to delivering value-based service 
            founded on ethics and trustworthiness.'
          />
          <AboutUsCard
            image={crafting}
            title='"Crafting Reliable Solution, Ensuring 
            Seamless Experiences"'
            description='Delivering secure, reliable software for seamless 
            business experiences'
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
