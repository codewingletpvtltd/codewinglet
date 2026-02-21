'use client';

import Image from 'next/image';

import CheckIcon from '@codewinglet/assets/icons/CheckIcon';
import { Typography } from '@codewinglet/components';
import { useWindowSize } from '@codewinglet/hooks/useWindowSize';

const ResultsContent = () => {
  const {
    windowSize: { width },
  } = useWindowSize();

  const isBelowMd = width < 991;

  // Data for repeated sections
  const sections = [
    {
      title: 'Streamlined Workflow and Data Segregation',
      description:
        'Whether you\'re seeking flexibility, cost-effectiveness, or specialized expertise, there\'s a hiring model tailored just for you.',
      highlights: [
        'Unlocking personalized quotations: tailored wisdom in simple terms',
        'Successfully overcome pressing business challenges',
      ],
      conversionRate: '52%',
    },
    {
      title: 'Enhanced Collaboration and Performance',
      description:
        'Streamline processes and improve team efficiency with specialized tools and practices.',
      highlights: [
        'Achieve higher productivity rates',
        'Implement effective solutions with ease',
      ],
      conversionRate: '45%',
    },
    {
      title: 'Enhanced Collaboration and Performance',
      description:
        'Streamline processes and improve team efficiency with specialized tools and practices.',
      highlights: [
        'Achieve higher productivity rates',
        'Implement effective solutions with ease',
      ],
      conversionRate: '45%',
    },
    {
      title: 'Enhanced Collaboration and Performance',
      description:
        'Streamline processes and improve team efficiency with specialized tools and practices. Streamline processes and improve team efficiency with specialized tools and practices.',
      highlights: [
        'Achieve higher productivity rates',
        'Implement effective solutions with ease',
      ],
      conversionRate: '45%',
    },
  ];

  return (
    <>
      <div className='mt-[50px] sticky top-[100px]'>
        <Image
          src='/assets/CaseStudy/resultsBg.png'
          alt='resultsBg'
          width={1410}
          height={219}
          className='sticky top-40 lg:h-[219px] h-[184px]'
        />
      </div>

      <div className='lg:-mt-36 -mt-32'>
        {sections.map((section, index) => (
          <div
            className='sticky z-10 top-20'
            key={index}
            style={{
              top: isBelowMd
                ? `${160 + index * 30}px`
                : `${160 + index * 30}px`,
              marginLeft: isBelowMd
                ? `${10 + index * 0}px`
                : `-${10 + index * 30}px`,
              marginRight: isBelowMd
                ? `${10 + index * 0}px`
                : `-${10 + index * 30}px`,
            }}
          >
            <div className='border border-gray-100 bg-white mt-5 flex md:gap-5 gap-3 lg:p-10 md:p-[30px] p-3 lg:mx-36'>
              <div className='bg-gray-50 lg:w-24 md:w-[50px] w-[30px] lg:h-24 md:h-[50px] h-[30px] flex justify-center items-center flex-shrink-0'>
                <Image
                  src='/assets/CaseStudy/growth.svg'
                  alt='growth'
                  width={52}
                  height={52}
                  className='lg:w-[52px] md:w-[26px] w-4'
                />
              </div>
              <div>
                <Typography className='lg:pt-2.5 lg:text-h6 md:text-paragraph1 text-tag text-gray-800'>
                  {section.title}
                </Typography>
                <span className='block w-10 h-[3px] bg-gray-800 my-3'></span>
                <Typography className='text-gray-400 lg:text-paragraph1ExtraLight md:text-paragraph2Light text-tagExtraLight font-light'>
                  {section.description}
                </Typography>
                <div className='flex lg:flex-row flex-col lg:gap-24 gap-3 lg:pr-20 pt-5'>
                  {section.highlights.map((highlight, idx) => (
                    <div key={idx} className='text-success flex gap-2.5'>
                      <CheckIcon className='lg:w-7 lg:h-7 w-6 h-6 flex-shrink-0' />
                      <Typography className='text-gray-800 lg:text-paragraph1ExtraLight text-tagLight'>
                        {highlight}
                      </Typography>
                    </div>
                  ))}
                </div>
                <div className='flex md:flex-row flex-col md:gap-5 gap-2.5 lg:mt-[50px] md:mt-10 mt-[15px]'>
                  {[1, 2].map((_, i) => (
                    <div
                      key={i}
                      className='bg-gray-50 lg:p-5 p-3 flex gap-[15px]'
                    >
                      <div className='bg-gray-800 lg:w-16 w-[46px] lg:h-16 h-[46px] flex items-center justify-center'>
                        <Image
                          src='/assets/CaseStudy/user.svg'
                          alt='user'
                          width={28}
                          height={28}
                        />
                      </div>
                      <Typography className='text-gray-400 lg:text-paragraph2Light md:text-tagLight text-tagExtraLight'>
                        Conversion rate
                        <span className='lg:text-h6 md:text-paragraph2 text-tag block text-gray-800 lg:pt-1'>
                          {section.conversionRate}
                        </span>
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResultsContent;
