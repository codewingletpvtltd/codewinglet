'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const BusinessGoal = () => {
  const highlights = [
    {
      title: 'Enhance HR Efficiency',
      description:
        'We thoroughly test across platforms to address your needs, employing regression and integration testing.',
      icon: '/assets/Portfolio/Efficiency.svg',
    },
    {
      title: 'Enhance HR Efficiency',
      description:
        'We thoroughly test across platforms to address your needs, employing regression and integration testing.',
      icon: '/assets/Portfolio/Efficiency.svg',
    },
    {
      title: 'Enhance HR Efficiency',
      description:
        'We thoroughly test across platforms to address your needs, employing regression and integration testing.',
      icon: '/assets/Portfolio/Efficiency.svg',
    },
    {
      title: 'Enhance HR Efficiency',
      description:
        'We thoroughly test across platforms to address your needs, employing regression and integration testing.',
      icon: '/assets/Portfolio/Efficiency.svg',
    },
  ];

  return (
    <>
      <div className='bg-bg lg:py-20 md:py-[60px] py-10 scroll-mt-32'>
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
              headingClassName='text-primary lg:!text-h2 lg:text-left md:text-center'
              descriptionClassName='text-secondary mt-1.5 md:!text-paragraph1ExtraLight lg:text-left md:text-center'
            />
            <Button
              className='lg:w-[229px] md:w-[248px] w-60 h-[52px] 2xl:mt-12 mt-[50px] !bg-transparent hover:!bg-primary lg:block hidden'
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
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className='bg-white p-[30px] flex lg:flex-col flex-row lg:gap-0 gap-8 items-start'
              >
                <Image
                  src={highlight.icon}
                  alt={highlight.title}
                  width={38}
                  height={38}
                />
                <div>
                  <Typography className='text-primary lg:text-subtitle2 text-paragraph1 lg:pt-10'>
                    {highlight.title}
                  </Typography>
                  <Typography className='text-secondary text-paragraph2Light lg:pt-2.5 pt-1.5'>
                    {highlight.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          <Button
            className='lg:w-[229px] md:w-[248px] w-60 h-[52px] mt-[40px] !bg-transparent hover:!bg-primary mx-auto lg:hidden block'
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
