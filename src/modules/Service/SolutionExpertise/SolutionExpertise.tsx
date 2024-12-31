'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const expertiseData = [
  {
    title: 'Proven Expertise',
    description:
      'Our experienced team stays ahead of industry trends, ensuring your projects are future-ready.',
    className: 'md:border-r border-b',
  },
  {
    title: 'Customized Solutions',
    description:
      'We craft tailored strategies to solve your unique business challenges, boosting impact and ROI.',
    className: 'lg:border-r border-b',
  },
  {
    title: 'End-to-End Support:',
    description:
      'From consultation to maintenance, we provide transparent, collaborative support.',
    className: 'border-b lg:border-r-0 md:border-r',
  },
  {
    title: 'Quality Assurance',
    description:
      'We follow strict quality standards to ensure it’s security, scalable, and high-performing.',
    className: 'lg:border-r lg:border-b-0 border-b',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'Your success is our priority; we build lasting partnerships with clear, consistent value.',
    className: 'md:border-r md:border-0 border-b',
  },
  {
    title: 'Innovative Solutions',
    description:
      'We leverage cutting-edge technology to deliver solutions that drive growth and keep you ahead.',
  },
];

const SolutionExpertise = () => (
  <div className='bg-bg lg:py-20 md:py-[60px] py-10'>
    <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
      <SectionHeader
        title={<>What sets us apart in Web development solution expertise?</>}
        description={
          <>
            We deliver expert Custom development solutions that drive business
            success
          </>
        }
        headingClassName='text-primary lg:!text-h2 md:!text-[36px] lg:text-center'
        descriptionClassName='text-secondary md:!text-subtitle2Light lg:text-center'
      />

      {/* Expertise Grid */}
      <div className='md:mt-[50px] mt-5 grid lg:grid-cols-3 md:grid-cols-2'>
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className={`${item.className} bg-white md:p-10 p-[15px] border-headerBoxBorder md:block flex gap-2.5`}
          >
            <div className='bg-bg md:w-[70px] w-10 md:h-[70px] h-10 flex items-center justify-center flex-shrink-0'>
              <Image
                src='/assets/icons/share.svg'
                alt='share'
                width={28}
                height={28}
                className='md:w-7 w-5'
              />
            </div>
            <div>
              <Typography className='text-primary md:text-subtitle2 text-tag md:mt-[30px]'>
                {item.title}
              </Typography>
              <Typography className='md:text-paragraph2Light text-tagExtraLight font-light md:pt-2 pt-1'>
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button
        className='w-[224px] lg:mt-[50px] mt-8 py-0 mx-auto block bg-transparent'
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
);

export default SolutionExpertise;
