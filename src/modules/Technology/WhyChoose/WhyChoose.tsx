'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const services = [
  'Performance Analytics',
  'Diverse Skills & Time Zone Edge',
  'Pay for What You Use',
  'Lower Labor Costs',
  'No Long Recruitment Cycles',
  'Highly Qualified Professionals',
  'Easier Termination',
  'Screen Monitoring Tools',
  'No Overhead Costs',
  '2-Week Trial Period',
  'Quick Onboarding',
  'Lower Legal Liability',
];

const WhyChoose = () => (
  <>
    <div className='bg-white lg:py-20 md:py-[60px] py-10'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block gap-[50px]'>
        <div className='w-[675px] relative'>
          <Image
            src='/assets/Technologies/pages/whyChoose.png'
            alt='whyChoose'
            width={675}
            height={748}
          />
          <div className='bg-black w-[252px] h-[199px] absolute bottom-0 border-[16px] border-white border-l-0 border-b-0'>
            <Image
              src='/assets/Technologies/pages/codewingletLogo.svg'
              alt='codewingletLogo'
              width={67}
              height={69}
              className='m-auto codewinglet_logo pt-8'
            />
            <Typography className='text-h4 text-white font-light text-center'>
              <span className='font-medium'>code</span> winglet
            </Typography>
          </div>
        </div>
        <div className='relative lg:w-[715px]'>
          <SectionHeader
            title={<>Why Choose Codewinglet's  IT Services?</>}
            description={
              <>
                Access comprehensive reports on productivity, enabling
                data-driven optimizations. Evaluate our team's capabilities with
                no long-term commitment, minimizing risk and ensuring a perfect
                fit.
              </>
            }
            headingClassName='text-primary !text-h2 w-[582px] pt-[50px]'
            descriptionClassName='text-secondary pt-6 !text-subtitle2Light'
          />

          <div className='mt-[30px]'>
            <ul className='grid grid-cols-2 gap-5'>
              {services.map((service, index) => (
                <li key={index} className='relative pl-8 text-[17px] uppercase'>
                  <Image
                    alt='Arrow'
                    width='15'
                    height='15'
                    className='absolute left-0 top-1.5'
                    src='/assets/OurService/check.svg'
                  />
                  <Typography>{service}</Typography>
                </li>
              ))}
            </ul>
          </div>

          <Button
            className='w-[224px] lg:mt-[50px] mt-8 py-0'
            variant='default'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Let’s connect
              <Arrow />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </>
);

export default WhyChoose;
