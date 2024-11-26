'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
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
        <div className='2xl:w-[645px] md:w-[544px] lg:m-0 m-auto'>
          <Image
            src='/assets/Technologies/pages/whyChoose.png'
            alt='whyChoose'
            width={675}
            height={748}
            className='2xl:w-[675px] w-[544px]'
          />
        </div>
        <div className='relative lg:w-[715px] flex flex-col'>
          <SectionHeader
            title={<>Why Choose Codewinglet's IT Services?</>}
            description={
              <>
                Access comprehensive reports on productivity, enabling
                data-driven optimizations. Evaluate our team.
              </>
            }
            headingClassName='text-primary lg:!text-h2 md:!text-[36px] md:w-[582px] lg:pt-[50px] pt-10'
            descriptionClassName='text-secondary pt-1 md:!text-subtitle2Light border-l-[5px] border-primary pl-[15px]'
          />

          <div className='mt-[30px] lg:order-2 order-3'>
            <ul className='grid md:grid-cols-2 grid-cols-1 gap-5'>
              {services.map((service, index) => (
                <li
                  key={index}
                  className='relative pl-10 md:text-[17px] text-paragraph2 uppercase'
                >
                  <div className='text-success absolute left-0 top-0'>
                    <CheckIcon />
                  </div>
                  <Typography>{service}</Typography>
                </li>
              ))}
            </ul>
          </div>

          <Button
            className='w-[224px] lg:mt-[50px] mt-8 py-0 lg:order-3 order-2'
            variant='blackOutline'
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
