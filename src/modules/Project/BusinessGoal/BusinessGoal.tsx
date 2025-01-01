'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const BusinessGoal = () => {
  const businessHighlights = [
    {
      title: 'Enhance HR Efficiency',
      description:
        'We thoroughly test across platforms to address your needs, employing regression and integration testing.',
      icon: '/assets/Project/Efficiency.svg',
    },
    {
      title: 'Enhance HR Efficiency',
      description:
        'We thoroughly test across platforms to address your needs, employing regression and integration testing.',
      icon: '/assets/Project/Efficiency.svg',
    },
    {
      title: 'Enhance HR Efficiency',
      description:
        'We thoroughly test across platforms to address your needs, employing regression and integration testing.',
      icon: '/assets/Project/Efficiency.svg',
    },
    {
      title: 'Enhance HR Efficiency',
      description:
        'We thoroughly test across platforms to address your needs, employing regression and integration testing.',
      icon: '/assets/Project/Efficiency.svg',
    },
  ];

  return (
    <>
      <div className='bg-gray-50 lg:py-20 md:py-[60px] py-10 scroll-mt-32'>
        <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto lg:flex block 2xl:gap-[90px] gap-[50px]'>
          {/* Left Section */}
          <div className='2xl:w-[530px] lg:w-[440px] flex-shrink-0'>
            <SectionHeader
              title={<>Our Business Goal</>}
              description={
                <>
                  With extensive holdings in linear TV, digital apps, and
                  internet platforms, it offers comprehensive sports coverage.
                  The brand is a dominant force in the US sports industry,
                  engaging over 100 million.
                </>
              }
              headingClassName='text-gray-800 lg:!text-h2 lg:text-left md:text-center'
              descriptionClassName='text-gray-400 mt-1.5 md:!text-paragraph1ExtraLight lg:text-left md:text-center'
            />
            <Button
              className='lg:w-[229px] md:w-[248px] w-60 h-[52px] 2xl:mt-12 mt-[50px] !bg-transparent hover:!bg-gray-800 lg:block hidden'
              variant='blackOutline'
            >
              <Link
                href='/blogs'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-3'
              >
                Let’s Collaborate
                <Arrow />
              </Link>
            </Button>
          </div>

          {/* Right Section */}
          <div className='grid lg:grid-cols-2 gap-[30px] lg:mt-0 mt-10'>
            {businessHighlights.map((highlight, index) => (
              <div
                key={index}
                className='bg-white md:p-[30px] p-5 flex lg:flex-col flex-row lg:gap-0 md:gap-8 gap-3.5 items-start'
              >
                <Image
                  src={highlight.icon}
                  alt={highlight.title}
                  width={38}
                  height={38}
                  className='md:w-[38px] md:h-[38px] w-6 h-6'
                />
                <div>
                  <Typography className='text-gray-800 lg:text-subtitle2 md:text-paragraph1 text-tag lg:pt-10'>
                    {highlight.title}
                  </Typography>
                  <Typography className='text-gray-400 md:text-paragraph2Light text-tagExtraLight lg:pt-2.5 pt-1.5'>
                    {highlight.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <Button
            className='lg:w-[229px] md:w-[248px] w-60 h-[52px] mt-[40px] !bg-transparent hover:!bg-gray-800 mx-auto lg:hidden block'
            variant='blackOutline'
          >
            <Link
              href='/blogs'
              rel='noopener noreferrer'
              className='flex items-center justify-center gap-3'
            >
              Let’s Collaborate
              <Arrow />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default BusinessGoal;
