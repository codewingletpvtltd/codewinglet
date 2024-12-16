'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const HeroSection = () => {
  const industryInfo = [
    {
      icon: '/assets/Portfolio/industry.svg',
      label: 'INDUSTRY',
      value: 'Legal Compliance Services',
    },
    {
      icon: '/assets/Portfolio/location.svg',
      label: 'COUNTRY',
      value: 'California, USA',
    },
    {
      icon: '/assets/Portfolio/calendar.svg',
      label: 'PROJECT DURATION',
      value: '6 Months',
    },
    {
      icon: '/assets/Portfolio/dollar.svg',
      label: 'ENGAGEMENT MODEL',
      value: 'Hourly based model',
    },
  ];

  return (
    <div className='lg:mt-[86px] mt-[90px] lg:py-20 md:py-[60px] py-10 relative'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto relative z-10 flex gap-[76px]'>
        <div className='w-[762px]'>
          <span className='lg:text-subtitle2Light md:text-paragraph2Light text-tagLight text-secondary block'>
            Portfolio
          </span>

          <SectionHeader
            title={<>The design partner for Health & Wellness brands</>}
            description={
              <>
                Thus, partnering with Brainvire, it aimed to revamp its website
                for seamless access to articles.
              </>
            }
            headingClassName='text-white lg:!text-[55px] md:!text-h2 leading-normal'
            descriptionClassName='text-white mt-1.5 lg:!text-paragraph1ExtraLight'
          />

          <Button
            className='md:w-[242px] w-[151px] lg:mt-[50px] md:mt-8 mt-10 py-0 md:!text-paragraph2 !text-tag text-white'
            variant='outline'
          >
            <Link
              href='/contact-us'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Visit live website
              <Arrow />
            </Link>
          </Button>

          <div className='mt-[100px]'>
            {industryInfo.map((info, index) => (
              <div
                className='flex justify-between py-4 border-b border-dashed border-[#3B3B3B] last:border-b-0'
                key={index}
              >
                <span className='text-secondary text-tag flex items-center gap-2'>
                  <Image
                    src={info.icon}
                    alt={info.label.toLowerCase()}
                    width={24}
                    height={24}
                  />
                  {info.label}
                </span>
                <Typography className='text-white text-subtitle2Light'>
                  {info.value}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Image
            src='/assets/Portfolio/mainPortfolio.png'
            alt='mainPortfolio'
            width={573}
            height={686}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
