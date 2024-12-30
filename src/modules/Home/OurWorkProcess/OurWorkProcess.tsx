'use client';
import { SectionHeader, Typography } from '@codewinglet/components';

import './scss/process.css';

const process = [
  {
    number: '01',
    title: 'Requirement Analysis',
    description:
      'We carefully analyze your ideas and needs to improve your strategic plan with valuable suggestions and feature requests.',
  },
  {
    number: '02',
    title: 'Planning & Design',
    description:
      'We apply what weve learned from evaluating your requirements to plan how your digital project will function.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We use the latest tech to craft code that suits your goals and audience, guaranteeing top-notch performance.',
  },
  {
    number: '04',
    title: 'QA Testing',
    description:
      'We thoroughly test across platforms to address your needs, employing regression and integration testing.',
  },
  {
    number: '05',
    title: 'Deployment',
    description:
      'After successful QA testing and user acceptance, we proceed confidently to the deployment phase.',
  },
  {
    number: '06 ',
    title: 'Support & Maintenance ',
    description:
      'Our commitment extends beyond deployment, encompassing ongoing maintenance and support.',
  },
];

const ContactUs = () => (
  <section
    className='relative xl:py-20 md:py-[60px] py-10 bg-bg scroll-mt-40'
    id='workProcess'
  >
    <div className='container w-full lg:px-[15px] sm:px-[30px] px-5 mx-auto'>
      <SectionHeader
        title={<>Our work process</>}
        description={
          <>Our process proves our expertise and commitment to excellence.</>
        }
        headingClassName=''
      />

      <div className='grid sm:gap-[30px] gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:mt-[50px] md:mt-10 mt-5 process-card'>
        {process.map((card, index) => (
          <>
            <div
              className='soft-card lg:py-[35px] lg:px-7 sm:p-5 p-5 bg-white hover:bg-primary hover:text-white transition-all duration-300 group'
              key={index}
            >
              <Typography
                variant='h1'
                className='soft-head leading-10 relative after:content after:absolute lg:after:bottom-1.5 md:after:bottom-3 after:bottom-2.5 lg:after:left-[70px] md:after:left-[55px] sm:after:left-[70px] after:left-10 after:w-[30px] after:h-[2px] after:bg-primary hover:after:bg-white after:duration-[0.9s] after:transition-all after:ease-in'
              >
                {card.number}
              </Typography>
              <Typography className='sm:text-paragraph1 text-paragraph2 md:mb-3 md:mt-0 sm:mb-3 sm:mt-3 mb-1 mt-1 text-primary group-hover:text-white'>
                {card.title}
              </Typography>
              <Typography className='m-0 md:text-paragraph2Light text-tagLight text-primary group-hover:text-white'>
                {card.description}
              </Typography>
            </div>
          </>
        ))}
      </div>
    </div>
  </section>
);

export default ContactUs;
