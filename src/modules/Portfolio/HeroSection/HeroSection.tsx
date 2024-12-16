'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const HeroSection = () => {
  const industryDetails = [
    {
      icon: '/assets/Portfolio/industry.svg',
      label: 'Industry',
      value: 'Legal Compliance Services',
    },
    {
      icon: '/assets/Portfolio/location.svg',
      label: 'Country',
      value: 'California, USA',
    },
    {
      icon: '/assets/Portfolio/calendar.svg',
      label: 'Project Duration',
      value: '6 Months',
    },
    {
      icon: '/assets/Portfolio/dollar.svg',
      label: 'Engagement Model',
      value: 'Hourly based model',
    },
  ];

  return (
    <div className='lg:mt-[86px] md:mt-[90px] mt-[78px] lg:py-20 md:py-[60px] py-10 lg:pt-0 md:!pt-[100px] !pt-[88px] relative'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto relative z-10 lg:flex 2xl:gap-[76px] gap-14'>
        <div className='2xl:w-[762px] lg:w-[719px]'>
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
            headingClassName='text-white 2xl:!text-[55px] lg:!text-[53px] md:!text-h2 leading-normal'
            descriptionClassName='text-white mt-1.5 lg:!text-paragraph1ExtraLight'
          />

          <Button
            className='md:w-[242px] w-[197px] 2xl:mt-[50px] lg:mt-10 md:mt-[30px] mt-5 py-0 md:!text-paragraph2 !text-tag text-white'
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

          <div className='2xl:mt-[100px] lg:mt-[72px] mt-[50px]'>
            {industryDetails.map((info, index) => (
              <div
                className='flex justify-between py-4 border-b border-dashed border-[#3B3B3B] last:border-b-0'
                key={index}
              >
                <span className='text-secondary md:text-tag text-tagExtraLight flex items-center gap-2 uppercase'>
                  <Image
                    src={info.icon}
                    alt={info.label.toLowerCase()}
                    width={24}
                    height={24}
                    className='md:w-6 md:h-6 w-4 h-4'
                  />
                  {info.label}
                </span>
                <Typography className='text-white md:text-subtitle2Light text-tagLight'>
                  {info.value}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className='lg:mt-0 md:mt-[34px] mt-3.5'>
          <Image
            src='/assets/Portfolio/mainPortfolio.png'
            alt='mainPortfolio'
            width={573}
            height={686}
            className='2xl:w-[573px] lg:w-[505px] w-full 2xl:h-[686px] lg:h-[643px] h-[350px] object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
