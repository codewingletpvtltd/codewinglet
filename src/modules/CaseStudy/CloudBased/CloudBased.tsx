'use client';

import Image from 'next/image';

import { SectionHeader, Typography } from '@codewinglet/components';

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
    <div
      className='bg-black xl:pt-[166px] lg:pt-60 md:pt-48 pt-[166px] lg:pb-20 md:pb-[60px] pb-10 relative scroll-mt-40'
      id='overview'
    >
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
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
              descriptionClassName='text-white mt-2.5 md:!text-paragraph1ExtraLight md:text-left text-center'
            />
          </div>
          <div>
            <div className='relative'>
              <Image
                src='/assets/CaseStudy/codewinglet_text.png'
                alt='codewinglet_text'
                width={120}
                height={120}
                className='animate-infiniteRotate'
              />
              <div className='bg-white w-14 h-14 flex justify-center items-center rounded-full absolute left-[12px] top-[11px]'>
                <Image
                  src='/assets/CaseStudy/logo.png'
                  alt='logo'
                  width={38}
                  height={38}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex gap-5 mt-36'>
          {caseStudyData.map((item, index) => (
            <div
              key={index}
              className='border border-white/10 text-white p-5 w-[218px]'
            >
              <Image
                src={item.icon}
                alt='icon'
                width={24}
                height={24}
                className=''
              />
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
