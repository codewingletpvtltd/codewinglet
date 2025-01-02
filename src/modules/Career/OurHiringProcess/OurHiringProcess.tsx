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
    className='bg-gray-800 lg:py-20 md:py-[60px] py-10 scroll-mt-32'
    id='process'
  >
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[100px]'>
      <div className='2xl:w-auto lg:w-full lg:mt-0'>
        <SectionHeader
          title={<>Our Hiring Process</>}
          description='Step into Your Future with Confidence: A Simple, Transparent Hiring Journey.'
          headingClassName='text-white lg:text-left text-center lg:text-h2'
          descriptionClassName='text-gray-400 lg:text-left text-center lg:px-0 md:px-20 md:text-subtitle2Light'
        />
        <div className='relative flex xl:gap-[30px] lg:gap-4 mt-[50px] lg:pt-[30px] lg:border-t md:border-gray-400 lg:flex-nowrap flex-wrap'>
          {processSteps.map((step, index) => (
            <Card
              key={`hiring-process-step-${index}`}
              index={(index + 1).toString().padStart(2, '0')}
              title={step.title}
              desc={step.desc}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default OurHiringProcess;
