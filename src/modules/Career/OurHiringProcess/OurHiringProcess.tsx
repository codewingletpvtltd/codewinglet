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
  <div className='bg-primary sm:py-20 py-[30px]'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto flex gap-[100px]'>
      <div className='relative'>
        <div className='border border-white w-[325px] h-[373px] absolute -top-[18px] -right-[18px] z-0'></div>
        <Image
          src='/assets/career/hiring.png'
          alt='hiring'
          width={380}
          height={547}
          className='relative z-10'
        />
      </div>
      <div>
        <SectionHeader
          title={<>Our Hiring Process</>}
          description='Customers. Empower your business to deliver exactly what users crave'
          descriptionClassName='text-secondary w-6/12'
          headingClassName='text-white'
        />
        <div className='relative flex gap-[30px] mt-[50px] pt-[30px] border-t border-secondary'>
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
          className='w-[184px] m-auto md:mt-[50px] mt-16 border-white border hover:border-white hover:border'
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
