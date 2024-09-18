/* eslint-disable import/order */
import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader } from '@codewinglet/components';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from './components';

const processSteps = [
  {
    title: 'Apply job',
    desc: 'Various industries, provide you',
  },
  {
    title: 'Pass interview',
    desc: 'Various industries, provide you',
  },
  {
    title: 'Offer Discussion',
    desc: 'Various industries, provide you',
  },
  {
    title: 'Get hired',
    desc: 'Various industries, provide you',
  },
];

const OurHiringProcess = () => (
  <div
    className='bg-primary lg:py-20 md:py-[60px] py-10 scroll-mt-56'
    id='process'
  >
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[100px]'>
      <div className='relative'>
        <div className='border border-white md:w-[325px] md:h-[373px] w-[189px] h-[217px] absolute md:-top-[18px] -top-3 lg:-right-[18px] md:right-[132px] right-2.5 z-0'></div>
        <Image
          src='/assets/career/hiring.png'
          alt='hiring'
          width={380}
          height={547}
          className='relative z-[5] block m-[0_auto] lg:mx-0 md:w-[380px] w-[288px]'
        />
      </div>
      <div className='2xl:w-auto lg:w-[800px] lg:mt-0 mt-10'>
        <SectionHeader
          title={<>Our Hiring Process</>}
          description='Customers. Empower your business to deliver exactly what users crave'
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
        <Button
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
        </Button>
      </div>
    </div>
  </div>
);

export default OurHiringProcess;
