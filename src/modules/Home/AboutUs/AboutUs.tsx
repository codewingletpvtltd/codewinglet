import { pioneering, crafting, building } from '@codewinglet/assets/AboutUs';
import { SectionHeader, Typography } from '@codewinglet/components';
import AboutUsCard from './components/AboutUsCard';
import Statistics from './components/Statistics';

const AboutUs = () => (
  <section className='xl:py-20 lg:py-14 py-10 bg-[url("/about-bg-boxline.png")] bg-no-repeat bg-left-bottom'>
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-[15px] mx-auto'>
      <SectionHeader
        title={<>About us</>}
        description={<>We are more than digital agency</>}
        headingClassName='text-white'
        descriptionClassName='text-white'
      />

      <div className='lg:flex block gap-5 md:mt-12 mt-7'>
        <div className='lg:w-[70%] w-full xl:pr-[60px] lg:pr-[20px] pr-0'>
          <Typography className='xl:text-body1 lg:text-body2 md:text-body1 text-subtitle1 pb-[20px] md:leading-[40px] text-white md:text-justify text-left'>
            Codewinglet Private Limited excels as a globally recognized,
            award-winner software and IT consulting firm, offering digitally
            transforming solution since long.
          </Typography>
          <Typography className='xl:text-body1 lg:text-body2 md:text-body1 text-subtitle1 md:leading-[40px] text-white pb-[20px] md:text-justify text-left'>
            Our speciality lies in providing expert tech solutions, built on
            deep industry insights and collaboration. We boost client growth by
            leveraging our innovative ecosystem to facilitate IT knowledge
            transfers, thereby fostering consistent advancement.
          </Typography>

          <div className='md:flex block justify-between items-center'>
            <Statistics />
            <div className='about_box'>
              <AboutUsCard
                image={building}
                title='XtendR for extended reach of robots'
                description='A plug produce solution for cobot applications demanding extended operational reach.'
              />
            </div>
          </div>
        </div>
        <div className='lg:w-[30%] w-full lg:block md:flex block md:gap-6'>
          <AboutUsCard
            image={pioneering}
            title='XtendR for extended reach of robots'
            description='A plug produce solution for cobot applications demanding extended operational reach.'
          />
          <AboutUsCard
            image={crafting}
            title='XtendR for extended reach of robots'
            description='A plug produce solution for cobot applications demanding extended operational reach.'
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
