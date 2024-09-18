/* eslint-disable import/order */
import { SectionHeader } from '@codewinglet/components';
import { Card } from './components';

const processSteps = [
  {
    title: 'Submit Your Application',
    desc: 'Share your resume and apply for your dream role in just a few clicks.',
  },
  {
    title: 'Ace the Interview',
    desc: 'Showcase your skills and experience through our interview process.',
  },
  {
    title: 'Discuss Your Offer',
    desc: 'Collaborate with us on the details of your offer to ensure the best fit.',
  },
  {
    title: 'Join the Team',
    desc: 'Celebrate your success and become part of our innovative company.',
  },
];

const OurHiringProcess = () => (
  <div
    className='bg-primary lg:py-20 md:py-[60px] py-10 scroll-mt-56'
    id='process'
  >
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[100px]'>
      <div className='2xl:w-auto lg:w-full lg:mt-0 mt-10'>
        <SectionHeader
          title={<>Our Hiring Process</>}
          description='Step into Your Future with Confidence: A Simple, Transparent Hiring Journey.'
          descriptionClassName='text-secondary lg:w-6/12 lg:text-left text-center lg:px-0 md:px-20'
          headingClassName='text-white lg:text-left text-center'
        />
        <div className='relative flex lg:gap-[30px] md:gap-4 mt-[50px] md:pt-[30px] md:border-t md:border-secondary md:flex-nowrap flex-wrap'>
          {processSteps.map((step, index) => (
            <Card
              key={`hiring-process-step-${index}`}
              index={(index + 1).toString().padStart(2, '0')}
              title={step.title}
              desc={step.desc}
            />
          ))}
        </div>
        {/* <Button
          className='md:w-[184px] w-40 md:py-[13px] py-2.5 md:mt-[50px] lg:ml-0 mt-10 border-white border hover:border-white hover:border block m-[0_auto]'
          variant='secondary'
        >
          <Link
            href='/contact-us'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Explore jobs
            <Arrow />
          </Link>
        </Button> */}
      </div>
    </div>
  </div>
);

export default OurHiringProcess;
