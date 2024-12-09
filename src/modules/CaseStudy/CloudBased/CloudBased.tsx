'use client';

import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';

import CaseStudyMenu from '../CaseStudyMenu/CaseStudyMenu';

const caseStudyData = [
  {
    icon: '/assets/CaseStudy/Industry.svg',
    label: 'Industry',
    value: 'Legal Compliance Services',
  },
  {
    icon: '/assets/CaseStudy/Company.svg',
    label: 'Company Name',
    value: 'Cruise Private Limited',
  },
  {
    icon: '/assets/CaseStudy/location.svg',
    label: 'Country',
    value: 'California, USA',
  },
  {
    icon: '/assets/CaseStudy/Duration.svg',
    label: 'Project Duration',
    value: '6 Months',
  },
  {
    icon: '/assets/CaseStudy/Engagement.svg',
    label: 'Engagement Model',
    value: 'Hourly based model',
  },
  {
    icon: '/assets/CaseStudy/Website.svg',
    label: 'Website',
    value: 'Live Website link',
  },
];

const CloudBased = () => (
  <>
    <div className='lg:hidden block'>
      <CaseStudyMenu />
    </div>
    <div className='xl:pt-[166px] lg:pt-60 md:pt-[185px] pt-[166px] lg:pb-20 md:pb-[60px] pb-10 relative'>
      {/* VIDEO */}
      <div className='absolute left-0 top-0 w-full h-full'>
        <video
          aria-hidden='true'
          poster='/media/video/poster/background-black-flag.jpg'
          autoPlay
          loop
          muted
          playsInline
          className='w-full h-full object-cover'
        >
          <source src='/assets/CaseStudy/videoBg.mp4' type='video/mp4' />
          Sorry, your browser does not support this video
        </video>
      </div>

      {/* Blend effect */}
      <div className='w-full h-full block mix-blend-soft-light backdrop-blur-[17px] z-[1] bg-primary absolute top-0 left-0'></div>
      <div className='w-full h-full block mix-blend-color bg-primary absolute top-0 left-0'></div>

      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto relative z-10'>
        <div className='lg:flex block gap-[97px]'>
          <div>
            <span className='text-paragraph2Light text-white'>Case study</span>
            <SectionHeader
              title={
                <>Cloud-Based Document Management Software for a Legal Firm</>
              }
              description={
                <>
                  Discover how the Codewinglet team transformed manual document
                  management into an automated <br /> cloud workflow for swift
                  and secure legal operations.
                </>
              }
              headingClassName='text-white lg:!text-[56px] md:!text-h2 md:text-left text-center'
              descriptionClassName='text-white mt-2.5 lg:!text-paragraph1ExtraLight md:text-left text-center'
            />
          </div>
          <div>
            <div className='relative lg:block hidden'>
              <Image
                src='/assets/CaseStudy/codewinglet_text.png'
                alt='codewinglet_text'
                width={140}
                height={140}
                className='animate-infiniteRotate'
              />
              <div className='bg-white 2xl:w-14 w-11 2xl:h-14 h-11 flex justify-center items-center rounded-full absolute left-[18px] top-[18px]'>
                <Image
                  src='/assets/CaseStudy/logo.png'
                  alt='logo'
                  width={38}
                  height={38}
                  className='2xl:w-[38px] 2xl:h-[38px] w-9 h-9'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-6 grid-cols-2 lg:gap-5 gap-[30px] 2xl:mt-36 lg:mt-[70px] mt-10'>
          {caseStudyData.map((item, index) => (
            <div
              key={index}
              className='border border-white/10 text-white p-5 lg:w-[218px] bg-primary/10'
            >
              <Image src={item.icon} alt='icon' width={24} height={24} />
              <span className='text-secondary text-tagLight mt-5 block'>
                {item.label}
              </span>
              <Typography className='text-paragraph2'>{item.value}</Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default CloudBased;
