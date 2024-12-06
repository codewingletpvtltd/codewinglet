'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@codewinglet/assets';
import { Button, SectionHeader, Typography } from '@codewinglet/components';

const caseStudyData = [
  {
    img: '/assets/CaseStudy/exploreMore.png',
    label: 'Retail',
    description: 'Techno blue : A digital haven for Qatar\'s premium electronics halt site',
  },
  {
    img: '/assets/CaseStudy/exploreMore.png',
    label: 'Social',
    description:
      'Social Cash: Bridging Brands and Influencers with an intuitive Application',
  },
  {
    img: '/assets/CaseStudy/exploreMore.png',
    label: 'Food',
    description:
      'CAFS: A website for premium air caterers that exemplifies supreme digital quality',
  },
  {
    img: '/assets/CaseStudy/exploreMore.png',
    label: 'Education',
    description:
      'LuLu Exchange: Securing transactions for the world’s leading currency exchange',
  },
];

const CaseStudies = () => (
  <>
    <div className='bg-bg lg:py-20 md:py-[60px] py-10' id='overview'>
      <div className='container w-full lg:px-[15px] sm:px-10 px-5 mx-auto'>
        <SectionHeader
          title={<>Explore More Case Studies</>}
          description={
            <>
              The brand is a dominant force in the US sports industry, engaging
              over 100 million fans weekly across
            </>
          }
          headingClassName='text-primary md:!text-h2 text-center'
          descriptionClassName='text-primary md:!text-paragraph1ExtraLight text-center'
        />

        <div className='flex gap-[30px] mt-12'>
          {caseStudyData.map((item, index) => (
            <div key={index} className='text-primary p-3 w-[330px] bg-white'>
              <Image
                src={item.img}
                alt='icon'
                width={306}
                height={216}
                className=''
              />
              <span className='text-secondary text-paragraph2 mt-4 block'>
                {item.label}
              </span>
              <Typography className='text-[19px] mt-1.5'>
                {item.description}
              </Typography>

              <Button className='p-0 !h-auto mt-6 underline' variant='link'>
                <Link
                  href='/blogs'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center gap-3'
                >
                  Explore blogs
                  <Arrow />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <Button
          className='sm:w-[276px] w-[203px] h-[52px] lg:m-auto 2xl:mt-12 mt-10 mx-auto lg:flex hidden !bg-transparent hover:!bg-primary'
          variant='blackOutline'
        >
          <Link
            href='/blogs'
            rel='noopener noreferrer'
            className='flex items-center justify-center gap-3'
          >
            Explore more works
            <Arrow />
          </Link>
        </Button>
      </div>
    </div>
  </>
);

export default CaseStudies;
